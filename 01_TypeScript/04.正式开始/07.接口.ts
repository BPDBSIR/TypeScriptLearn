//接口 接口是对象的状态(属性)和行为(方法)的抽象(描述)

interface IPerson{
  readonly id:number//设置只读属性不嫩修改
  name:string
  age:number
  sex?:string//表示可有可无的属性
}
const person:IPerson = {
  id: 1,
  name: "小花",
  age: 18,
  // sex: "女"//sex这个属性可以没有
}

console.log(person);
