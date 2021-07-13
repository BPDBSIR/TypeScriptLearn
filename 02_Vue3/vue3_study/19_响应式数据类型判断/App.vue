<template>
  <h2>响应式数据类型的判断</h2>
</template>

<script lang="ts">
import {
  defineComponent,
    ref,reactive,readonly,isRef,isReactive,isReadonly,isProxy
} from 'vue';

export default defineComponent({
  name: 'App',

  setup() {

    /*
    * 响应式数据类型的判断
    * isRef: 检查一个值是否为ref对象
    * isReactive: 检查一个对象是否是reactive创建的响应式代理
    * isReadonly: 检查一个对象是否是readonly创建的只读代理
    * isProxy: 检查一个对象是否是由reactive或者readonly方法创建的代理
    * */
    console.log(isRef(ref({})))
    console.log(isReactive(reactive({})))
    console.log(isReadonly(readonly({})))
    console.log(isProxy(readonly({})))
    return{

    }
  }
});
</script>
