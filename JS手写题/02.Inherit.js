function Animal(name,age){
    this.name = name
    this.age = age
    this.getName = function (){
        return this.name
    }
}

function Dog(name,age){
    Animal.call(this,name,age)
}


let dog1 = new Dog()
console.log(dog1.color)