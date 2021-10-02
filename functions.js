// 1- function declaration
// - блочная область видимости - не доступна снаружи блока в котором объявлена
// - обрабатываются перед выполнением блока кода.

testFunction() // можно вызывать до объявления

function testFunction () {
  console.log('testFunction called')
}

// function expression - создаются только когда выполнение доходит до них
const ff = function () {
  console.log('ff')
}

ff() // вызов только после объявления

// 2 - параметры по умолчанию - задавать в конце!!! ...args - в конце !!!
function pars (a = 1, b = 1, ...args) {
  console.log(arguments) // arguments - это не массив !!!
  console.log(args) // это уже массив
  console.log(a + b)
}

pars(2, 3, 4, 5, 6, 7)

// 3 - стрелочные функции позволяют заменить анонимные ф-ии
// стр. фии берут this из глобальной области в отличие от анонимной
// arguments - нет!!!

// 4 - pure ф-ии:
// - результат явно зависит только от агрументов,
// - при одинаковых аргументах - одинаковый результат,
// - нет side-effects - ф-ия изменят состояние вне собственного контекста

// 5 - функции как объекты
function hello () {
  console.log('hello')
}

hello.hi = 123

console.log(hello.hi) // 123

// 6 - ф-ии высшего порядка - принимают ф-ии как аргумент и возвращают фи-ю.

// 7 - рекурсия - ф-ия вызывает сама себя.

// 8 - замыкание - это функция, запоминающая свои внешние переменные.
function createStep () {
  let count = 0 // значение переменной не удалится из памяти после выполнения createStep, т.к вложенная ф-ия ссылается на него
  return function () {
    count++
    console.log(count)
  }
}

const step1 = createStep()
const step2 = createStep()

step1() // 1
step1() // 2
step1() // 3
step2() // 1
