/*
* 可选参数和默认参数
* */

//传入姓氏和名字可以得到姓名 如果不传任何内容就返回默认的姓氏 只传入姓氏就返回姓氏 如果传入姓氏和名字就返回姓名

/**
 * 
 * @param firstName 默认参数
 * @param lastName  可选参数
 */
const getFullName = function (firstName: string = "东方", lastName?: string): string {
    //判断名字是否传入了
    if (lastName) {
        return firstName + "_" + lastName
    } else {
        return firstName
    }
}

console.log(getFullName());
console.log(getFullName("诸葛"));
console.log(getFullName("诸葛","孔明"));
