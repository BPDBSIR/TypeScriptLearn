/*
* 函数: 封装了一些重复使用的代码 在需要的时候直接调用即可
* */

//JavaScript中的写法
// function add(x,y){
//     return x + y
// }
//
// const add2 = function (x, y) {
//     return x + y
// }

//TypeScript中的写法 -- 指定参数类型和返回值类型
function add(x: number, y: number): number {
    return x + y
}

const add2 = function (x: number, y: number): number {
    return x + y
}
let result = add(12, 21)
console.log(result)

/*
* 函数完整的写法
* add3: 变量名
* (x: number, y: number) => number: 当前函数的类型
* function (x: number, y: number): number: 相当于复合上面的这个函数类型的值
* */
const add3: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y
}
console.log(add3(10, 10));
