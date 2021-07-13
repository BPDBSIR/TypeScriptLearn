
//和JS一样TS里面所有而定数组都是浮点数 这些浮点数都是number类型 
let flag: boolean = true
console.log(flag);

let a1: number = 10//十进制
let a2: number = 0b010//二进制
// a1 = "Hello"
let str:string = "Hello TypeScript"
console.log(typeof str);

//字符串和数字之间能够义气拼接
let strS: string = "我有这么多的钱"
let money: number = 10000

console.log(strS + money + " " + typeof(str + money));

//ts中变量一开始是什么类型 后期赋值的时候只能用这个类型的数据 不允许用其他类型的数据赋值给当前的这个变量中

let und:undefined = undefined
let nul:null = null
//undefined和null都可以作为其他类型的子类型 吧undefined和null赋值给其他类型变量的
console.log(und);
console.log(nul);

let s: string = "Hello Ts"
s = und
console.log(s);
