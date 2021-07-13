<template>
<div>
  <h2>setup和ref的基本使用</h2>
  <h3>{{count}}</h3>
  <button @click="updateCount">更新数据</button>
</div>
</template>

<script lang="ts">
import {defineComponent,ref} from 'vue';

export default defineComponent({
  name: 'App',
  //页面打开后可以直接看到一个数组 点击按钮后 该数据可以发生变化
  // data(){
  //   return{
  //     count: 0
  //   }
  // },
  // methods: {
  //   updateCount(){
  //     this.count++
  //   }
  // }
  //setup是组合api的入口函数 只在初始化的时候执行一次
  setup(){
    //变量
    //ref是一个函数 作用: 定义一个响应式的数据 返回的是一个Ref对象 对象中有一个value属性 如果需要对数据进行操作 需要用该Ref对象调用value属性的方式进行数据的操作
    //html的末班中是不需要使用.value模板的
    const count = ref(0)//如果要是变量是响应式的必须要声明ref
    console.log(count)
    //方法
    function updateCount(){
      console.log("updateCount...")
      //报错的原因: count是一个Ref对象 对象是不能进行++操作的
      // count++
      count.value++
    }
    return{
      count,
      updateCount
    }
  }
});
</script>

<style>
</style>
