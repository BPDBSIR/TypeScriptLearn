<template>
  <h2>ref的另一个作用</h2>
  <input type="text" ref="inputRef">

</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted
} from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    //当页面加载完毕后 页面中的文本框可以直接获取焦点
    //默认是空的额页面加载完毕说明组件已经存在了获取文本框元素
    const inputRef = ref<HTMLElement | null>(null)

    onMounted(() => {
      inputRef.value && inputRef.value.focus()
    })
    return {
      inputRef
    }
  }
});
</script>
