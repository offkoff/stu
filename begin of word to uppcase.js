// BEGIN
export default (str) => {
  let result = '';
  for (let i = 0; i < strings.length(str); i += 1) {
      //(первый символ или предидущий сивол пробел) и не пробел 
    const shouldBeBig = str[i] !== ' ' && (i === 0 || str[i - 1] === ' ');
    result += shouldBeBig ? strings.toUpperCase(str[i]) : str[i]; // если true - то первое, false - второе
  }

  return result;
};
// END
