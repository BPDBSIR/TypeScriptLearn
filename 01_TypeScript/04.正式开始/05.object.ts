//object

//定义一个函数 参数是object 返回值也是object
function getObj(obj:object):object{
  console.log(obj);
  return{
    name: "卡扎",
    age: 17
  }
}

console.log(getObj({
  name: "咔嚓",
  age: 10
}));

