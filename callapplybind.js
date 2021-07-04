// контекст - область видимости + ссылка на объект который вызывает код в данный момент
const animal = {
  hasTail: true,
  hasLegs: true
}

const f1 = function (arg1, arg2, arg3) {
  console.log(this, arg1 + arg2 + arg3)
}

// f1('A', 'B', 'C') // Window, 'ABC'

// 1 - bind возвращает новый экземпляр ф-ии c привязанным контекстом:
const f2 = f1.bind(animal, 'A', 'B', 'C')
f2() // animal object, 'ABC'

// 2 - call - контекст создается в момент запуска ф-ии:
f1.call(animal, 'A', 'B', 'C') // animal object, 'ABC'

// 3 - apply - как call, но аргументы в массиве:
f1.apply(animal, ['A', 'B', 'C']) // animal object, 'ABC'

// 4 - стрелочная ф-ия
const fArrow = () => console.log(this)
fArrow.call(animal) // Window !!!. стр.фия не имеет this !!!
