class Animal {
  constructor(name) {
    this.name = name
  }
  getNmae() {
    return this.name
  }
}

class Dog extends Animal {
  constructor(name, age) {
    super(name)
    this.age = age
  }
}

let redDog = new Dog('小灰', 18)
console.log(redDog);