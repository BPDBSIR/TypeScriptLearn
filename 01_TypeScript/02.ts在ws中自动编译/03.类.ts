//ts中书写js中的类
(() => {
  //定义一个接口
  interface IPerson{
    firstName: string
    lastName: string
  }
  //定义一个类
  class Person{
    firstName:string
    lastName:string
    fullName:string
    constructor (firstName:string,lastName:string){
      this.firstName = firstName
      this.lastName = lastName
      this.fullName = firstName + "_" + lastName
    }
  }
  //实例对象
  const person = new Person("曹","阿满")

  console.log(person.fullName);
  
  function showFullName(person: IPerson){
    return person.firstName + "_" + person.lastName
  }
  console.log(showFullName(person));
  
})()