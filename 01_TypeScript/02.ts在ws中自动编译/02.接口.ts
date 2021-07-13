//接口: 是一种能力 一种约束

(() => {
  interface IPerson{
    firstName:string,
    lastName:string
  }
  function showFullName(person: IPerson){
    return person.firstName + "_" + person.lastName
  }

  const person = {
    firstName: "Bi",
    lastName: "Jizhuang"
  }
  console.log(showFullName(person));
  
})()