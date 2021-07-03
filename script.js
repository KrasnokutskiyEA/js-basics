// создадим класс:

class Animal {
  // свойства класса:
  hasTail = true // обычное: доступно из экземпляра класса
  _hasLegs = true // защищенное: доступно только из класса, наследуется
  #hasHead = true // приватное: доступно только из класса, не наследуется
  static type = 'ANIMAL' // статическое: общее св-во класса, а не его экземпляра, наследуется

  // конструктор - инициализирует начальные значения экземпляра этого класса
  constructor (options) {
    this.name = options.name
    this.age = options.age
    this.hasTail = options.hasTail
  }

  // метод:
  voice () {
    console.log('I am animal !!!' + `and i have tail ${this.hasTail}`)
    return 'I am animal !!!'
  }

  get hasLegs () {
    return this._hasLegs
  }

  // статический метод - вызывается без создания экземпляра класса
  static staticVoice() {
    return 'I AM STATIC METHOD!!!'
  }
}

// создадим экземпляр класса:
// 1 - параметры передаваемые в конструктор класса Animal:
const opts = {
  name: 'Animal',
  age: 5,
  hasTail: true
}

// 2 - создаем экземпляр класса Animal:
const animal = new Animal(opts)

// console.log('----res=', Animal.staticVoice())

// 3 - Создадим класс Cat унаследовавшись от класса Animal: В нем будет нов. ключ color
class Cat extends Animal {
  static type = 'CAT'

  constructor (options) {
    super(options) // вызываем коструктор родителького класса, передав нужные ему параметры. Вызывать всегда если наследуемся!!!
    this.color = options.color // добавим новое свойство
  }

  // переопределим метод voice, определенный в родительском классе:
  voice () {
    super.voice() // вызовем метод родительского класса (опционально)
    return 'I am a cat !!!' // переписываем...
  }

  // геттер:
  get ageInfo () {
    return this.age * 7
  }

  // сеттер:
  set ageInfo (newAge) {
    this.age = newAge + 7
  }
}

// 4 - создаем экземпляр класса Cat:
const cat = new Cat({
  name: 'Cat',
  age: 7,
  hasTail: true,
  color: 'black'
})

// 5 - проверим, к какому классу принадлежит объект
// console.log('1-', cat instanceof Cat) // true
// console.log('1-', cat instanceof Animal) // true


