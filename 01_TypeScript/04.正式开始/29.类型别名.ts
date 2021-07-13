/*
* 类型别名: 是可以给一个类型起一个新的名字
* */

type strType = string | number//strType可以表示2种类型

const str: strType = "what are you doing"//字符串
const str2: strType = 100//数值
// const str3: strType = true//因为没有声明布尔类型 所以不能使用

interface Num1{
    name:string
}
interface Num2{
    age:number
}
type numType= Num1 | Num2
const obj1:numType = {
    name: "张三"
}
const obj2:numType = {
    age: 12
}
const obj3: numType = {
    name: "王五",
    age: 10
}
