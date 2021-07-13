//类型注解是一种轻量级的为函数或者变量添加的约束

(() =>{
  function showMsg(str:string){
    return "窗前明月光," + str
  }
  
  console.log(showMsg("疑似地上霜"));
  
})()