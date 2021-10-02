// __proto__ vs prototype

let users = []
let cars = []

console.log(users.__proto__ === cars.__proto__) // __proto__ равны !!!

// св-во __proto__ есть у любого объекта - у одинаковых по типу объектов они равны.
// св-во prototype - у class, либо function. У стрелочных ф-ий нет !!!

// __proto__ любого объекта ссылается на prototype класса с помощью которого этот 
// объект был создан

let man = {} // man.__proto__ === Object.prototype
let users = [] // users.__proto__ === Array.prototype
let channel = new YoutubeChannel // channel.__proto__ === YoutubeChannel.prototype

// создадим конструктор
function Samurai (name) {
  this.name = name
}

// добавим метод
Samurai.prototype.hello = function () {
  alert(this.name) 
}
