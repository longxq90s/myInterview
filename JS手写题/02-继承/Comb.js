// 组合继承

function Animal(name) {
  this.name = name
  this.colors = ['black', 'white']
}

Animal.prototype.getName = function() {
  return this.name
}

function Dog(name, age) {
  Animal.call(this, name)
  this.age = age
}

Dog.prototype = new Animal()
Dog.prototype.constructor = Dog

let redDog = new Dog('奶昔', 2)
console.log(redDog);