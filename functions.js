// 1- function declaration
testFunction() // можно вызывать до объявления

function testFunction () {
  console.log('testFunction called')
}

// 2 - параметры по умолчанию - задавать в конце!!! ...args - в конце !!!
function pars (a = 1, b = 1, ...args) {
  console.log(arguments) // arguments - это не массив !!!
  console.log(args) // это уже массив
  console.log(a + b)
}

pars(2, 3, 4, 5, 6, 7)
