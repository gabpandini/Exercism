
export const promisify = (funcao) => {
  return function (parametro) {
    return new Promise((resolve, reject) =>{
      funcao(parametro, (error, data) => {
        if (error){
          return reject(error);
        } else {
            return resolve(data);
        }
      })
    });
  };
};

export const all = async (array) => {
    try {
    let list = [];
      for (let promises of array) {
        list.push(await promises);
      } return list;
    } catch (error) {
      return Promise.reject(error);
    }
  
};

export const allSettled = async (array) => {
    let list = [];
      for (let promise of array) {
        try {
          list.push(await promise); 
        } catch (error) {
          
          list.push(error)
        }
      } 
     return list;
};

export const race = (array) => {
  return new Promise((resolve, reject) => {
    for (let promise of array) {
      promise.then(result => resolve(result))
             .catch(error => reject(error));
    }
  })
};

export const any = (array) => {
  return new Promise(async (resolve, reject) => {
    let list = [];
    for (let promises of array) {
      promises.then(result => resolve(result))
              .catch(error => list.push(error))
    }
      while (list.length < array.length) {
        await new Promise(resolve => setTimeout(resolve, 150))
      }
      reject(list);
  })
};
