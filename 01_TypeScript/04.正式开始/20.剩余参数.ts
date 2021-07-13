/*
* 剩余参数(rest参数)
* 只能放在该函数的最后一个参数中
* */
/**
 *
 * @param str
 * @param args 剩余的参数放在了一个字符串的数组中 args里面
 */
function showMsg(str: string, ...args: string[]) {
    console.log(str)
    console.log(args)
}
showMsg("a","b","c","d")
