// это функция, внутри которой нужно написать ваш код
// roadMines (массив ячеек поля) будет задаваться в момент вызова функции, как в примере кода под ней
function moveTank(roadMines) {
  let Number = [];
  let damage = 0;
  for (let i  in roadMines){
    if (roadMines[i] === true && damage === 1) {
      console.log( ' танк уничножен');
      break;
    }
    if (roadMines[i] === true) {
      ++damage;
      console.log('танк поврежден');
      continue;
    }
    console.log(` Танк переместился на ${Number(i) + 1} `);
  }
}
// вызов функции
moveTank([false, false, true, false, false, false, false, false, false, true]); // танк проедет по полю без мин
// можете вызывать функцию сколько угодно раз подряд с различными параметрами
// строка ниже необходима, чтобы работало автоматическое тестирование
// не изменяйте этот код!
export default moveTank;


