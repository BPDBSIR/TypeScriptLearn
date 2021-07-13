<template>
  <h2>App组件</h2>
  <hr>
  <model-button/>
</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue';
import ModelButton from "@/ModelButton.vue";

export default defineComponent({
  name: 'App',
  components: {
    ModelButton
  },
  setup() {
    return{

    }
  }
});
</script>
