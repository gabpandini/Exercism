import { NotAvailable } from "./errors";

export class TranslationService {
  /**
   * Creates a new service
   * @param {ExternalApi} api the original api
   */
  constructor(api) {
    this.api = api;
  }

  /**
   * Attempts to retrieve the translation for the given text.
   *
   * - Returns whichever translation can be retrieved, regardless the quality
   * - Forwards any error from the translation api
   *
   * @param {string} text
   * @returns {Promise<string>}
   */
  async free(text) {
    //return new Promise ((resolve, reject) => {
    //  this.api.fetch(text).then(result => resolve(result.translation)).catch(error => reject(error));
    //});
    let resultado = await this.api.fetch(text);
    return resultado.translation;
  }

  /**
   * Batch translates the given texts using the free service.
   *
   * - Resolves all the translations (in the same order), if they all succeed
   * - Rejects with the first error that is encountered
   * - Rejects with a BatchIsEmpty error if no texts are given
   *
   * @param {string[]} texts
   * @returns {Promise<string[]>}
   */
  batch(texts) {
    return new Promise ((resolve, reject) => {
      if (!texts || texts.length == 0) {
        reject(new BatchIsEmpty());
      }
      let promisses = [];
      for (let i = 0; i < texts.length; i++) {
        promisses.push(this.api.fetch(texts[i]));
      } 
        return Promise.all(promisses).then(result => resolve(result.map(item => item.translation))).catch(error => reject(error));
    });
  }

  /**
   * Requests the service for some text to be translated.
   *
   * Note: the request service is flaky, and it may take up to three times for
   *       it to accept the request.
   *
   * @param {string} text
   * @returns {Promise<void>}
   */
   async request(text) {
    for (let i = 1; i <= 3; i++) {
      try {
        await this.requestPromise(text);
          return undefined;
      } catch (error) {
        if (i === 3) {
          throw error;
        }
      }
      
    }
  }
  
  requestPromise (text) {
    return new Promise ((resolve, reject) => {
      this.api.request(text, error => {
        if (error == null){
          resolve(undefined);
        } else reject (error); 
      });
    });
  }

  /**
   * Retrieves the translation for the given text
   *
   * - Rejects with an error if the quality can not be met
   * - Requests a translation if the translation is not available, then retries
   *
   * @param {string} text
   * @param {number} minimumQuality
   * @returns {Promise<string>}
   */
  async premium(text, minimumQuality) {
    try {
      let resultado = await this.api.fetch(text);
        if (resultado.quality >= minimumQuality) {
          return resultado.translation;
        } else throw new QualityThresholdNotMet();
    } catch(error) {
        if (error instanceof NotAvailable) {
          await this.request(text);
          return (await this.api.fetch(text)).translation;
        } else throw error;
    }
  }
}

/**
 * This error is used to indicate a translation was found, but its quality does
 * not meet a certain threshold. Do not change the name of this error.
 */
export class QualityThresholdNotMet extends Error {
  /**
   * @param {string} text
   */
  constructor(text) {
    super(
      `
The translation of ${text} does not meet the requested quality threshold.
    `.trim()
    );

    this.text = text;
  }
}

/**
 * This error is used to indicate the batch service was called without any
 * texts to translate (it was empty). Do not change the name of this error.
 */
export class BatchIsEmpty extends Error {
  constructor() {
    super(
      `
Requested a batch translation, but there are no texts in the batch.
    `.trim()
    );
  }
}

