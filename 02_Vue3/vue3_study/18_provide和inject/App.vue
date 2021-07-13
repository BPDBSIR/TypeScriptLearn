<template>
  <h2>provide与inject</h2>
  <p>当前的颜色额: {{color}}</p>
  <button @click="color='red'">红色</button>
  <button @click="color='blue'">蓝色</button>
  <button @click="color='green'">绿色</button>
  <hr>
  <son/>
</template>

<script lang="ts">
import {
  defineComponent,
    ref,
    provide
} from 'vue';
import Son from "@/components/Son.vue";

export default defineComponent({
  name: 'App',
  components: {
    Son
  },
  /*
  * provide/inject: 跨层级组件数据传递
  * */
  setup() {
    //响应式的数据
    const color = ref("red")
    //提供数据
    provide("color",color)
    return{
      color
    }
  }
});
</script>
