<template>
  <h2>父级组件</h2>
  <button @click="isShow=!isShow">切换显示</button>
  <hr>
  <child v-if="isShow"/>
</template>

<script lang="ts">
import {defineComponent, ref, reactive} from 'vue';
import Child from "@/components/Child.vue";

export default defineComponent({
  name: 'App',
  components: {
    Child
  },
  setup() {
    return {
      isShow: ref(true)
    }
  }
});
</script>
