//原型链继承

function Animal() {
  this.colors = ['black', 'white']
}
Animal.prototype.getColor = function() {
  return this.colors
}

function Dog() {}
Dog.prototype = new Animal()

let redDog = new Dog()
console.log(redDog.colors);