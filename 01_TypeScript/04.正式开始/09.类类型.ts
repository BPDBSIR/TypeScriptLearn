//类类型  可以通过接口来实现

//定义一个接口
interface IFly{
  fly()
}

//接口的实现类
class Person implements IFly{
  //实现类
  fly(){
    console.log("我会飞了");
    
  }
}

const p = new Person()
p.fly()

interface ISwim{
  swim()
}

class Person2 implements IFly,ISwim{
  fly(){
    console.log("我会飞了2");
    
  }
  swim(){
    console.log("我会游泳了2");
    
  }
}

const p2 = new Person2()
p2.fly()
p2.swim()


//接口可以继承其他的多个接口

interface IMyFlyAndSwim extends IFly,ISwim{

}

class Person3 implements IMyFlyAndSwim{
  fly() {
    console.log("我会飞了3");
    
  }
  swim() {
    console.log("我会游泳了3");
    
  }
}


const p3 = new Person3()
p3.fly()
p3.swim()
//接口和接口之间叫继承 类和接口之间叫实现 extends  implements