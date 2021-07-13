<template>
  <h2>toRefs的使用</h2>
  <!--<p>name: {{state.name}}</p>
  <p>age: {{state.age}}</p>-->
  <p>name: {{ name }}</p>
  <p>age: {{ age }}</p>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs
} from 'vue';

export default defineComponent({
  name: 'App',
  setup() {

    const state = reactive({
      name: "诸葛亮",
      age: 28
    })
    //toRefs可以把一个响应式独享转换成普通对象 该普通对象的每个property都是一个ref
    const {name,age} = toRefs(state)
    // console.log(state2)
    //定时器 更新数据 如果数据变化了 界面也会随之变化肯定是响应式数据
    setInterval(() => {
      // state.name += "++"
      // state2.name.value += "++"
      name.value += "++"
    }, 1000)
    return {
      // state
      // ...state//不是响应式的数据了
      // ...state2
      name,age
    }
  }
});
</script>
