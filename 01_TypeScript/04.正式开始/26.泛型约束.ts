/*
* 泛型约束: 如果我们直接对一个泛型参数去length属性 会报错 因为这个泛型根本就不知道他有和这个属性
*
* */

//定义一个接口用来约束将来的某个类型中必须要有length的这个属性
interface ILength {
    //接口中有一个属性length
    length: number
}

function getLength<T extends ILength>(x: T): number {
    return x.length
}

console.log(getLength<string>("what is your name???"))
// console.log(getLength<number>(111))
