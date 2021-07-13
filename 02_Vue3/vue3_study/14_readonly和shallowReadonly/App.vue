<template>
  <h2>readonly与shallowReadonly</h2>
  <p>state: {{state3}}</p>
  <button @click="update">更新数据</button>
</template>

<script lang="ts">
import {
  defineComponent,
    reactive,
    ref,
    shallowReactive,
    shallowRef,
    readonly,
    shallowReadonly
} from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    console.log("Vue Component Created")

    const state = reactive({
      name: "曹阿瞒",
      age: 20,
      car: {
        name: "法拉利",
        color: "yellow"
      }
    })
    // const state2 = readonly(state)

    const state3 = shallowReadonly(state)
    const update = () => {
      console.log("Test")
      /*
      * 通过readonly监视的对象是只读数据并且是深度只读数据
      * */
      // state2.name += "====="//只读属性不可以更改
      // state2.car.name += "111"//只读

      /*
      * shallowReadonly监视的对象是潜度只读数据
      * */
      // state3.name += "up"//只读
      state3.car.name += "up"//正常
    }
    return{
      // state2,
      state3,update
    }
  }
});
</script>
