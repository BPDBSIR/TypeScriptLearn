/*
* 泛型接口: 在定义接口的时候 为接口中的属性或者方法定义泛型类型 在使用接口时 在指定具体的泛型类型
* */

//需求: 定义一个类用来储存用户的相关信息(id,name,age)
//通过一个雷的实例对象调用相关方法可以添加多个用户信息对象调用getUserId方法可以根据id获取某个指定用户信息对象
//Model
class User {
    id?: number//? 代表该属性可有可无
    name: string
    age: number
    constructor(name:string,age:number) {
        this.name = name
        this.age = age
    }
}

//定义一个泛型接口
//IService
interface IBaseCRUD<T> {
    //保存信息的集合
    data: Array<T>
    //添加
    add: (t: T) => T
    //根据ID查询
    getUserId: (id:number) => T
}

//定义一个类 可以正对用户信息对象进行增加以及查询的操作
//ServiceImpl
class UserCRUD implements IBaseCRUD<User>{
    add(user: User): User {
        user.id = Date.now() * Math.random()
        this.data.push(user)
        return user;
    }
    data: Array<User> = [];
    getUserId(id: number): User {
        // return this.data.forEach(user => user.id === id);
        return this.data.filter((value => value.id === id))[0]
    }
}

let userCRUD:UserCRUD = new UserCRUD()
userCRUD.add(new User("jack",20))
let {id} = userCRUD.add(new User("tom",22))
userCRUD.add(new User("lucy",19))
userCRUD.add(new User("rouse",21))


console.log(userCRUD.data)
console.log(userCRUD.getUserId(id));
