//函数类型 通过接口的方式做为函数的类型来使用


interface ISearchFunc{
  (source:string,subString:string):boolean
}
const searchString: ISearchFunc = function(source:string,subString:string):boolean{
  return source.search(subString) >  1
}

console.log(searchString("无邪接近死亡","死"));
