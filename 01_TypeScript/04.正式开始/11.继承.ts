/*
* 继承: 类与类之间的关系
*
* A类继承了B类  此时A类叫子类(派生类) B类叫父类(基类)
*
* */


class Person {
    //定义属性
    name: string
    age: number
    gender: string

    constructor(name: string, age: number, gender: string) {
        this.name = name
        this.age = age
        this.gender = gender
    }

    sayHi(str:string){
        console.log("Person sayHi" + this.name + " " + str)
    }
}

class Student extends Person {

    constructor(name: string, age: number, gender: string) {
        //调用父类的构造函数
        super(name, age, gender)
    }

    /**
     * 重写父类方法
     * @param str
     */
    sayHi(str: string) {
        console.log("Student sayHi")
        super.sayHi(str);
    }
}

const person = new Person("Bi Jizhuang",19,"boy")
person.sayHi("heihei")
const student = new Student("Wang Zhiqang",19,"boy")
student.sayHi("haha")
/*
* 类和类之间如果要有继承关系 就要使用extends关键字
*
* 子类中可以调用父类中的构造函数 使用的是super关键字(包括调用父类中的实例方法 也可以使用super)
*
* 子类中可以重写父类的方法
* */
