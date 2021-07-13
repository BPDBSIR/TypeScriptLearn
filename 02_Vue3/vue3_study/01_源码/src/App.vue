<template>
  <!--Vue2的html模板中必须要有一对根标签Vue3组件的html模板中可以没有-->
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<!--可以使用ts代码-->
<script lang="ts">
/* defineComponent函数 目的是定义一个组件 内部可以传入一个配置对象*/
import { defineComponent } from 'vue';
//导入一个子组件
import HelloWorld from './components/HelloWorld.vue';
//暴露出一个定义好的组件
export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
