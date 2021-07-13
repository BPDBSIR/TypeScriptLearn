/*
* 静态成员: 在类中通过static修饰的属性或者方法 那么就是静态的属性以及静态的方法 也称之为: 静态成员
* */

class Person{
    //类中默认有一个默认的name属性 所以会出现错误
    //静态属性

    static str:string = "XM"
    constructor(str:string) {
        //此时thsi是实例变量 str是静态属性不能通过实例对象直接调用静态属性来使用
        // this.str = str
    }

    static sayHi(){
        console.log("HAHAHAH")
    }
}

// let person = new Person("XH")
// console.log(person.str)
//访问静态属性
console.log(Person.str);
// Person.str = "可以任意修改值"
// person.sayHi()
//访问静态方法
Person.sayHi()
