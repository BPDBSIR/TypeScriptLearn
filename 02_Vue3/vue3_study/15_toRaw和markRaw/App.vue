<template>
  <h2>toRaw和markRaw</h2>
  <p>state: {{state}}</p>
  <hr>
  <button @click="testToTaw">测试toRaw</button>
  <button @click="testMarkRaw">测试markRaw</button>
</template>

<script lang="ts">
import {
  defineComponent,
    reactive,
    toRaw,
    markRaw
} from 'vue';

interface UserInfo{
  name:string;
  age:number;
  likes? :string[];
}
export default defineComponent({
  name: 'App',
  setup() {
    console.log("Vue Component Created")
    const state = reactive<UserInfo>({
      name: "小明",
      age:20
    })
    const testToTaw = () => {
      console.log("testToRaw")
      //把代理对象变成普通对象(不是响应式的数据)
      const user = toRaw(state)
      user.name += "abc"
    }
    const testMarkRaw = () => {
      console.log("testMarkRaw")
      const likes = ["吃","喝","玩","乐"]
      /*state.likes[0] += "=="
      console.log(state)*/
      //markRaw标记的对象数据 从此以后都不能再成为代理对象了
      state.likes = markRaw(likes)
      setInterval(() => {
        if (state.likes){
          state.likes[0] += "0"
          console.log("定时器运行")
        }
      },2000)
    }
    return{
      state,testToTaw,testMarkRaw
    }
  }
});
</script>
