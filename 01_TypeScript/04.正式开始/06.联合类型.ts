//定义一个函数得到一个数字类型或字符串的字符串形式值
function getString(str:number|string):string{
  return str.toString()
}

console.log(getString("我是一个字符串"));

console.log(getString(111));

//只能传入number和string类型
// console.log(getString(true));


//定义一个函数得到一个数字或字符串值的长度

function getLength(value:number|string):number{
  //类型断言
  //第一种方式
  if((<string>value).length){
    // return (<string>value).length
    //第二种方式
    return (value as string).length
  }else{
    return value.toString().length
  }
}


console.log(getLength(123456));
console.log(getLength("0123456"));




//类型推断 ts会在没有明确指定一个类型的时候 会自动推断类型

let txt =100
// txt = "你好世界"
console.log(txt);


let c//any
c = 100
c = "Hello Vue"

console.log(c);
