<template>
  <h2>reactive使用</h2>
  <h3>姓名: {{user.name}}</h3>
  <h3>年龄: {{user.age}}</h3>
  <h3>对象: {{user.wife}}</h3>
  <h3>性别: {{user.gender}}</h3>
  <hr>
  <button @click="updateUser">更新用户</button>
</template>

<script lang="ts">
import {defineComponent,reactive,ref} from 'vue';

export default defineComponent({
  name: 'App',
  //显示用户的相关信息 点击按钮 可以更新用户的相关信息数据
  setup(){
    /*
    * reactive
    * 作用: 定义多个数据的响应式
    * const proxy = reactive(obj): 接口一个普通对象然后返回该普通对象的响应式代理器对象
    * 返回的是一个Proxy的dialing对象 被代理者就是reactive中的传入的对象
    * */
    //目标对象
    const obj: any = {
    // const obj = {
      name:"小明",
      age: 20,
      wife: {
        name: "小花",
        age: 19,
        cars: ["奔驰","宝马","奥迪"]
      }
    }
    //代理对象
    const user = reactive<any>(obj)
    console.log(user)
    const updateUser = () => {
      // user.name  += "=="
      // user.age += 2
      // user.wife.name += "++"
      // user.wife.cars.push("玛莎拉蒂")
      //user独享或者obj对象添加一个新的额属性 哪种方式会影响界面的更新
      // obj.gender = "男"//界面没有发生渲染
      user.gender = "男"//界面发生渲染
      // delete obj.name//界面中没有了age属性
      delete user.name//界面中没有了age属性

      /**
       * 总结: 如果操作代理对象目标对象中的数据也会随之变化 同时如果想要在操作数据的时候界面也要跟着重新渲染
       * 那么也是操作代理对象
       */
    }
    return{
      user,
      updateUser
    }
  }
});
</script>

<style>
</style>
