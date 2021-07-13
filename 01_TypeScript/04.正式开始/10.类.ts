//类 可以理解为 模板 通过模板可以实例化对象
//面向对象的编程思想


class Person4{
  name:string
  age:number
  gender:string
  //定义构造函数:为了将来实例化对象的时候 可以直接对属性的值进行初始化

  constructor(name:string = "小花",age:number = 18,gender:string = "女"){
    this.name = name
    this.age = age
    this.gender = gender
  }

  sayHi(str:string){
    console.log("大家好,我是" + this.name +  ",今年已经" + this.age + "岁了,是个" + this.gender + "孩子" + " " +  str );
  }
}

//ts中使用类 实例化对象 可以直接进行初始化操作
const person4 = new Person4()//也可以自行传值
person4.sayHi("What is your name?")