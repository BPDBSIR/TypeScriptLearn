<template>
  <h2>shallowReactive与shallowRef</h2>
  <p>m1: {{m1}}</p>
  <p>m2: {{m2}}</p>
  <p>m3: {{m3}}</p>
  <p>m4: {{m4}}</p>

  <hr>
  <button @click="update">更新数据</button>
</template>

<script lang="ts">
import {
  defineComponent,
    reactive,
    ref,
    shallowReactive,
    shallowRef
} from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    console.log("Vue Component Created")

    //深度监视
    const m1 = reactive({
      name: "曹操",
      age: 20,
      car: {
        name: "玛莎拉蒂",
        color: "red"
      }
    })
    //潜度监视
    const m2 = shallowReactive({
      name: "曹操",
      age: 20,
      car: {
        name: "玛莎拉蒂",
        color: "red"
      }})
    //深度监视
    const m3 = ref({
      name: "曹操",
      age: 20,
      car: {
        name: "玛莎拉蒂",
        color: "red"
      }})
    //潜度监视
    const m4 = shallowRef({
      name: "曹操",
      age: 20,
      car: {
        name: "玛莎拉蒂",
        color: "red"
      }})

    const update = () => {
      //更改m1数据--reactive
      // m1.car.name += "up"//正常监视
      //更改m2数据--shallowReactive
      // m2.name += "up"//正常监视
      // m2.car.name += "up"//监视不到
      //更改m3数据--ref
      // m3.value.name += "up"//正常监视
      // m3.value.car.name += "up"//正常监视
      //更改m4数据--shallowRef
      // m4.value.name += "up"//正常监视
      // m4.value.car.name += "up"//监视不到
    }
    return{
      m1,m2,m3,m4,update
    }
  }
});
</script>
