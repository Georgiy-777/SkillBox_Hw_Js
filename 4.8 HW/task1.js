// это функция, внутри которой нужно написать ваш код
// count, n и m будут задаваться в момент вызова функции, как в примере кода под ней
function randomArray(count, n, m) {
  // ваш код здесь
let finalRanResult = [];
// for ( let i = 0; i < count; ++i ) {
//   finalRanResult.push( (Math.floor(Math.random()  * Math.max(m, n)-(Math.min(m,n)))) + Math.min(m, n));
// }
while(count > 0) {
  count--;
  max = Math.max(m, n);
  min = Math.min(m,n);
  finalRanResult.push((Math.round( Math.random() * (max- min) ) ) + min);
}
console.log(finalRanResult);
}
// вызов функции
randomArray(10, 10, 100); // вывести массив из 10-ти случайных чисел от 10 до 100
randomArray(2, 5, 1); // вывести массив из 2-х случайных чисел от 1 до 5сдк
// можете вызывать функцию сколько угодно раз подряд с различными параметрами

// строка ниже необходима, чтобы работало автоматическое тестирование
// не изменяйте этот код!
export default randomArray;
