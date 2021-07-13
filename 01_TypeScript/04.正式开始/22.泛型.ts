/*
* 泛型: 在定义函数 接口 类的时候不能预先确定要使用的数据类型 而是在使用函数 接口 类的时候才能确定数据的类型
* */

//需求: 定义一个函数 传入两个参数 第一个参数是数据 第二个参数是数量 函数的作用: 根据产生对应个数的额数据 存在一个数组中

function getArr(value: number, count: number): number[] {
    const arr: number[] = []
    for (let i = 0; i < count; i++) {
        arr.push(value)
    }
    return arr
}

console.log(getArr(10, 5));
//定义一个函数 同上只不过传入的是字符串类型(此时如果在用常规的方法需要在写一个差不多相同的函数)



//可以传入任意的数据返回来的是存储这个任意类型的数组

function getArr2(value: any, count: any): any[] {
    const arr: number[] = []
    for (let i = 0; i < count; i++) {
        arr.push(value)
    }
    return arr
}

console.log(getArr2("abc",10))


function getArr3<T>(value: T, count: number): T[] {
    const arr: T[] = []
    for (let i = 0; i < count; i++) {
        arr.push(value)
    }
    return arr
}

console.log(getArr3<string>("aaa", 4));
console.log(getArr3<number>(1212, 4));
