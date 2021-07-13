<template>
  <div>嘿嘿 这是一个Vue3项目</div>
  <h1>{{ num }}</h1></template>
<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    console.log("我来了")
    const num = 10
    return {num}
  }
}); </script>
<style></style>
