// BEGIN
 //функция принимает число
 const addDigits = (num) => {
   //суммирует посимвольно каждую цифру этого числа
   num += '';
  let sum = 0;
  for(let i = 0; i < num.length; i++) {
     sum += Number(num[i]);
  }
  //проверяет превышает ли сумма число 9
  if(num > 9) {
  	// если превышает - снова складывает цифры и проверяет
  	return addDigits(sum);
  }
  // если не превышает - возвращает число
  return sum;
};
export default addDigits;
// END
