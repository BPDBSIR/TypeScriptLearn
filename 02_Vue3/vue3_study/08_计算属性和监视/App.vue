<template>
  <h2>计算属性和监视</h2>
  <fieldset>
    <legend>姓名操作</legend>
    姓氏: <input v-model="user.firstName" type="text" placeholder="请输入姓氏"><br>
    名字: <input v-model="user.lastName" type="text" placeholder="名字">
  </fieldset>
  <fieldset>
    <legend>计算属性和监视的演示</legend>
    姓名: <input v-model="fullName1" type="text" placeholder="显示姓名"><br>
    姓名: <input v-model="fullName2" type="text" placeholder="显示姓名"><br>
    姓名: <input v-model="fullName3" type="text" placeholder="显示姓名"><br>
  </fieldset>
</template>

<script lang="ts">
import {defineComponent, ref, reactive, computed, watch, watchEffect} from 'vue';

export default defineComponent({
  name: 'App',
  /*
  *
  * */
  setup() {
    const user = reactive({
      firstName: "诸葛",
      lastName: "孔明"
    })
    /*
    * 通过计算属性的方式 实现第一个姓名的显示
    * 计算属性的函数中如果只传入一个回调函数 表示的是get
    *
    * 返回的是一个Ref类型的对象
    * */
    const fullName1 = computed(() => {
      return user.firstName + "_" + user.lastName
    })
    const fullName2 = computed({
      get: () => user.firstName + "_" + user.lastName,
      set(v: string) {
        console.log("=====", v)
        const names = v.split("_")
        console.log(names)
        user.firstName = names[0]
        user.lastName = names[1]
      }
    })
    /*
    * 监视---监视指定的数据 一开始不会执行 只有在数据发生改变的时候才会执行
    *
    * */
    const fullName3 = ref("")
    watch(user, (value) => {
      fullName3.value = value.firstName + "_" + value.lastName
    }, {
      immediate: true//指定该监视对象即使在数据不发生改变的情况下也会默认的执行一次
      // ,deep = true//深度监视
    })

    /*
    * 第二种监视(不用另外配置参数 会默认执行一次)
    * */
    /*watchEffect(() => {
      fullName3.value = user.firstName + "_" + user.lastName
    })*/

    //监视fullName3的数据改变firstName和lastName
    /*watchEffect(() => {
      const names = fullName3.value.split("_")
      user.firstName = names[0]
      user.lastName = names[1]
    })*/

    //watch===监视多个数据
    /*watch([user.firstName,user.lastName,fullName3],() => {
      //这里的代码没有执行 fullName3是响应式的数据但是user.firstName和user.lastName不是响应式的数据
      console.log("===")
    })*/
    //解决方案 如果监视的是非响应式的数据 可以这么做
    watch([() => user.firstName, () => user.lastName], () => {
      console.log("===")
    })
    return {
      user,
      fullName1,
      fullName2,
      fullName3
    }
  }
});
</script>
