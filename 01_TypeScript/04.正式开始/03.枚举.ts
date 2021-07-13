//枚举

enum Color{
  red,
  green,
  blue
}

let color:Color = Color.red
//获取编号
console.log(Color.red,Color.green,Color.blue);


console.log(Color[2]);

//枚举中的元素可以是中文的 但是不推荐
enum Gender{
  女,
  男
}

console.log(Gender.男);
