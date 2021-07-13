<template>
  <h2>Child子级组件</h2>
  <p>{{ msg }}</p>
  <p>{{count}}</p>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'

export default defineComponent({
  name: "Child",
  props: {
    msg: {
      type: String
    }
  },
  //数据初始化的生命周期回调
  beforeCreate() {
    console.log("beforeCreate")
  },
  //界面渲染完毕
  mounted() {
    console.log("mounted",this)
  },
  /*
  * setup细节问题
  * setup是在beforeCreate生命周期函数回调之前就执行了 而且就执行一次
  *
  * 由此可以推断出setup在执行的时候当前的组件还没有创建出来 也就意味着 组件实例对象this根本就不能用
  *
  * this是undefined 说明就不能通过this调用 computed/data/method/props中的相关内容了
  *
  * 其实所有的composition api相关回调函数中也都不可以使用
  *
  *
  * setup中的返回值是个对象 内部中的变量或者函数时给html模板使用的
  *
  * setup中的对象内部的属性和data函数中的return对象的属性都可以在html模板中使用
  *
  * setup中的属性和data函数中的属性会合并为组件对象的属性
  * setup中的方法和data中的方法会合并为组件对象的方法
  * */
  data(){
    return{
      count: 10
    }
  },
  /**
   *
   * @param props  是一个对象 里面有父级组件向子级组件传递的数据并且是在子级组件中使用props接受到的所有属性 包含props配置声明并且传入了所有属性的对象
   * @param context
   */
  setup(props,context){
    console.log("props: ",props)
    console.log("context: ",context)
    console.log(context.attrs.msg2)
    console.log("setup",this)
    const showMsg1 = () => {
      console.log("setup中的showMsg方法")
    }
    return{
      //setup中一般都是返回对象 对象中的属性和方法都可以在html模板中使用
      showMsg1
    }
  },
  methods:{
    showMsg2(){
      console.log("methods中的showMsg方法")
    }
  }
})
</script>

<style scoped>

</style>
