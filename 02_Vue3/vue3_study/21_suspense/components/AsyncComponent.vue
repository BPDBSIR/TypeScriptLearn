<template>
  <h2>AsyncComponent</h2>

  <h3>{{msg}}</h3>

</template>

<script lang="ts">
import {
  defineComponent
} from 'vue'
export default defineComponent({
  name: "AsyncComponent",
  setup(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          msg: "what are you no sha lei "
        })
      },2000)
    })
  }
})
</script>

<style>

</style>
