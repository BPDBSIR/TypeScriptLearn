/*
* 多态: 父类型的引用指向子类型的对象
* 不同类型的对象正对相同的烦不烦干 产生了不同的行为
* */

class Animal {
    name: string

    constructor(name: string) {
        this.name = name
    }

    run(distance: number = 0) {
        console.log("Run " + distance)
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    run(distance: number = 5) {
        console.log("Run " + distance)
    }

    eat(){
        console.log("Dog eat...")
    }
}

class Pig extends Animal {
    constructor(name: string) {
        super(name);
    }

    run(distance: number = 10) {
        console.log("Run " + distance)
    }
}

const ani:Animal = new Animal("Animal")
ani.run()
const dog:Dog = new Dog("旺财")
dog.run()
const pig:Pig = new Pig("八戒")
pig.run()


//父类和子类的关系: 父子类型 父类类型创建子类的对象

const dog1: Animal = new Dog("阿旺")
dog1.run()
const pig1: Animal = new Pig("GG Boy")
pig1.run()


function showRun(ani: Animal) {
    ani.run()
}

showRun(dog1)
showRun(pig1)
