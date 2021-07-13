/*
* 抽象类: 包含抽象方法 抽象方法一般没有任何的具体内容实现 也可以包含实例方法 抽象类是不能被实例化
* 为了让子类进行实例化及实现内部的抽象方法
*
*  */
//抽象类不能被实例化 只能被子类实现
abstract class Animal{
    abstract eat()

    //抽象类中可以有实例方法
    sayHi(){
        console.log("hello!")
    }
}

class Dog extends Animal{
    eat() {
        console.log("ha si~")
    }
}

let dog:Animal = new Dog()
dog.sayHi()
dog.eat()
