<template>
  <h2>子级组件</h2>
  <h4>{{ msg }}</h4>
  <button @click="updateMsg">更新数据</button>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from 'vue';

export default defineComponent({
  name: 'Child',
  //Vue2中的生命周期钩子
  beforeCreate() {
    console.log("Vue2 beforeCreate")
  },
  created() {
    console.log("Vue2 created")
  },
  beforeMount() {
    console.log("Vue2 beforeMount")
  },
  mounted() {
    console.log("Vue2 mounted")
  },
  /*beforeUpdate() {
    console.log("Vue2 beforeUpdate")
  },
  updated() {
    console.log("Vue2 updated")
  },*/
  /*
  * beforeDestroy和destroyed已经在vue3中改名了 所以不能使用了
  * */
  beforeUnmount() {
    console.log("Vue2 beforeUnmount")
  },
  unmounted() {
    console.log("Vue2 unmounted")
  },
  /*
  * setup相当于beforeCreate以及created
  * */
  setup() {
    console.log("Vue3 setup")

    onBeforeMount(() => {
      console.log("Vue3 onBeforeMount")
    })
    onMounted(() => {
      console.log("Vue3 onMounted")
    })
    onBeforeUpdate(() => {
      console.log("Vue3 onBeforeUpdate")
    })
    onUpdated(() => {
      console.log("Vue3 onUpdated")
    })
    onBeforeUnmount(() => {
      console.log("Vue3 onBeforeUnmount")
    })
    onUnmounted(() => {
      console.log("Vue3 onUnmounted")
    })

    const msg = ref("")

    function updateMsg() {
      msg.value += "==="
    }

    return {
      msg,
      updateMsg
    }
  }
});
</script>
