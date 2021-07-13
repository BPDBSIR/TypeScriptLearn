/*
* readonly修饰符: 对类中的属性成员进行修饰 修饰后 就不能再外部被随意的修改了
*
*
* 如果构造函数中没有任何的参数 类中的属性成员此时已经使用readonly进行修饰 外部也不能对这个属性进行修改
*
* */
//readonly修饰类中的成员属性
class Person {
    //只读属性
    readonly name: string = "default name"//初始值

    constructor(name: string) {
        //构造函数中可以对只读属性进行修改
        // this.name = name
        // this.name = "asdadsa"
    }

    sayHi() {
        //类的普通方法中也不能修改只读属性
        // this.name = "xj"
        console.log("Person say")
    }
}

const person: Person = new Person("xh")
// console.log(person.name)
// person.name = "xm"
// console.log(person.name)


//修饰类中方法的参数
class Student {
    //构造函数中的name属性一旦使用readonly进行修饰 那么该name参数可以叫做参数属性
    //一旦使用readonly修饰后 那么类中就默认生成了一个成员属性
    constructor(readonly name:string = "xh") {
        this.name = name
    }
    //如果修饰为public外部就可以修改name属性了
    // constructor(public name:string = "xh") {
    //     this.name = name
    // }
    //类中就生成了一个私有的name属性
    // constructor(private name:string = "xh") {
    //     this.name = name
    // }
    //类中就生成了一个子类能访问的name属性
    // constructor(protected name:string = "xh") {
    //     this.name = name
    // }
}

let student = new Student("ah")
console.log(student.name)
// student.name = "只要是readonly修饰的变量 外部都不可以修改"
