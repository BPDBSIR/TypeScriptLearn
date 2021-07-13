<template>
  <h2>App父级组件</h2>
  <p>{{ msg }}</p>
  <hr>
  <child :msg="msg" msg2="Good Luck" />
  <button @click="msg += '==='">更新数据</button>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import Child from "@/components/Child.vue";
export default defineComponent({
  name: 'App',
  components: {
    Child
  },
  setup(){
    const msg = ref("what is your name")
    return{
      msg
    }
  }
});
</script>

<style>
</style>
