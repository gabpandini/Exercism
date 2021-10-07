export function hey(message: string): string | undefined {
  let isQuestion: boolean = message.trim().slice(-1) === '?';
  let isYell: boolean = message.toUpperCase() === message;
  let isSilence: boolean = message.trim() === "";
  let notHasLetters: boolean = !(message.trim().match(/[a-z]/gi))

  if (isYell && isQuestion && !(notHasLetters)) {
    return "Calm down, I know what I'm doing!"
  } if (isYell && !(notHasLetters)) {
    return 'Whoa, chill out!';
  } if (isQuestion) {
    return 'Sure.';
  } if (isSilence) {
    return 'Fine. Be that way!';
  } 
   return 'Whatever.';
}
