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
// f2() // animal object, 'ABC'

const f3 = f1.bind(animal) // аргументы можно передать непосредственно при вызове
// f3('A', 'B', 'C')

// 2 - call - контекст создается в момент запуска ф-ии:
// f1.call(animal, 'A', 'B', 'C') // animal object, 'ABC'

// 3 - apply - как call, но аргументы в массиве:
// f1.apply(animal, ['A', 'B', 'C']) // animal object, 'ABC'

// 4 - стрелочная ф-ия
const fArrow = () => console.log(this)
// fArrow.call(animal) // Window !!!. стр.фия не имеет this !!!

// 5 - Частичные функции
const f4 = f1.bind(undefined, 'Z', 'X')
// f4('A', 'B', 'C') // 'ZXA'

// 6 Вытягтвание методов
const obj1 = {
  password: 'abcd',
  validate () {
    return this.password.length > 8
  }
}

const obj2 = {
  password: 'zxcvbnmqwerty'
}

const validatePass = obj1.validate.bind(obj2)
// console.log(validatePass())
