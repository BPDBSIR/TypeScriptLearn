/*
* 存取器: 让我们可以有效的控制对对象中的成员的访问 通过getters和setters来进行操作
* */

//外部可以传入姓氏个名字数据 同时使用set和get控制名字的数据 外部也可以进行修改操作
class Person{

    firstName:string
    lastName:string

    constructor(firstName:string,lastName:string) {
        this.firstName = firstName
        this.lastName = lastName
    }
    get fullName(){
        console.log("fullName get..")
        return this.firstName + "_" + this.lastName
    }

    set fullName(val){
        console.log("fullName set...")
        let names = val.split("_")
        this.firstName = names[0]
        this.lastName = names[1]
    }
}

let person = new Person("Bi","Jizhuang")
//获取给属性恒源属性
console.log(person.fullName);
person.fullName = "Fan_Wenxi"
console.log(person.fullName)
