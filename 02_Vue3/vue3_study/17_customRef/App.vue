<template>
  <h2>customRef</h2>
  <input type="text" v-model="keyWord">
  <p>{{keyWord}}</p>
</template>

<script lang="ts">
import {
  defineComponent,
    ref,
    customRef
} from 'vue';

/**
 * 自定义hook防抖函数
 * @param value 传入的函数 将来数据的类型不确定所以用泛型
 * @param delay delay防抖的时间间隔默认200毫秒
 */
function useDebouncedRef<T>(value: T,delay = 200){
  let timeoutId: number
  return customRef((track, trigger) => {
    return{
      //返回数据
      get(){
        //告诉vue追踪数据
        track()
        return value;
      },
      //设置数据
      set(newValue:T){
        //清理定时器
        clearTimeout(timeoutId)
        //开启定时器
        timeoutId = setTimeout(() => {
          value = newValue
          //告诉vue更新界面
          trigger()
        },delay)
      }

    }
  })
}

export default defineComponent({
  name: 'App',
  setup() {
    const keyWord = useDebouncedRef("abc",1000)
    return{
      keyWord
    }
  }
});
</script>
