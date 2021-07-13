/*
* 类中的修饰符: 描述类中成员的可访问性(属性 构造函数 方法)
*
* 类中的成员都有默认的修饰符 :pubic
*
* private 修饰的变量外部无法访问 只能类内部访问 子类也不能访问
* protect 外部无法访问 子类中可以访问
*
*
* (和Java的一毛一样)
* */

class Person {
    // public name: string
    private name: string

    constructor(name: string) {
        this.name = name
    }

    eat() {
        console.log(this.name + "eat...")
    }
}

let person = new Person("BJZ");
// console.log(person.name);
