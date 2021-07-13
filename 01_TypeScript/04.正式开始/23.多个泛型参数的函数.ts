/*
* 多个泛型参数的函数
* */
function getMsg<K,V>(val1:K,val2:V):[K,V]{
    return [val1,val2]
}

let msg = getMsg<string,number>("jackson",10);
console.log(msg)

console.log("String Length: " + msg[0].length)
