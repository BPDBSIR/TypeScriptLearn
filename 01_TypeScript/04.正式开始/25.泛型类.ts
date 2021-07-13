/*
* 泛型类
* */

//定义一个类 类中的属性值和类型是不确定 方法中的参数和返回值类型也是不确定的

class GenericNumber<T> {
    defaultValue: T
    add: (x: T, y: T) => T
}

const g1: GenericNumber<number> = new GenericNumber<number>()
g1.defaultValue = 10
g1.add = function (x, y) {
    return x + y
}
console.log(g1.add(10, 20));
const g2: GenericNumber<string> = new GenericNumber<string>()
g2.defaultValue = "jack"
g2.add = function (x, y) {
    return x + y
}
console.log(g2.add("S", "K"));
