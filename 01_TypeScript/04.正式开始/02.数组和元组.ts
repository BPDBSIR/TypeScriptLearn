//定义数组(里面的数据必须是相同类型)
//第一种方法
let arr:number[] = [10,20,30,40]
//第二种方法
let arr2:Array<String> = [
  "小花",
  "小芳",
  "小明"
]

console.log(arr);
console.log(arr2);
//数组定义后 里面的数据类型必须和定义数组的时候的类型是一只的 否则有错误提示信息 也不会编译通过的

//元组: 在定义数组的时候 类型和数据的个数就已经限定了
let arr3:[string,number,boolean] = ["小花",10,true]
console.log(arr3);
//注意问题:元组类型在使用的时候 数据类型的位置和数据的个数 应该定义在元组的时候的数据类型及位置应该一致的
console.log(arr3[0].split(''));
