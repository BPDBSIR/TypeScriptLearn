/*
* 函数重载
* 函数名字相同 函数的参数及个数不相同 以及数据类型
* */


//我们有个add函数 他可以接受2个string类型的参数进行拼接 也可以接受2个number类型的参数进行相加



function add(x: string, y: string): string
function add(x: number, y: number): string


function add(x: string | number, y: string | number): string | number {
    if (typeof x === "string" && typeof y === "string") {
        return x + y//字符串拼接
    } else if (typeof x === "number" && typeof y === "number") {
        return x + y//数字相加
    }
}

console.log(add("Bi", " Jizhuang"))
console.log(add(10, 20))
// console.log(add("ZhenXiang", 10))//错误
// console.log(add(100, "adad"))//错误
//以上函数并不能满足需求

