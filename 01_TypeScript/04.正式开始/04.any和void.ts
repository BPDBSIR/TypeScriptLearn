

//any 不确定数据的类型 相当于Java中的Object类型
let str:any = 100
console.log(str);
str = "男人只要长得帅 何愁没有富婆爱"
console.log(str);

let arr:any[] = [100,"你好世界",true]

arr.forEach((i) => {
  console.log(i);
})

//void 当一个函数没哟返回值的时候 会使用void
function showMsg():void{
  console.log("Hello Vue3");
}

showMsg()
//这样写没有意义
let vb:void = undefined
console.log(vb)
