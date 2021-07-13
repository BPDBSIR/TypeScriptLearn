<template>
  <h2>App: Suspense</h2>
  <suspense>
    <template #default>
      <async-component/>
    </template>
    <template v-slot:fallback>
      <h2>Loading...</h2>
    </template>
  </suspense>
</template>

<script lang="ts">
import {
  defineComponent,
  defineAsyncComponent
} from 'vue'

// const AsyncComponent = defineAsyncComponent(() => import("@/components/AsyncComponent.vue"))
import AsyncComponent from "@/components/AsyncComponent.vue";
export default defineComponent({
  name: "App",
  components: {
    AsyncComponent
  }
})
</script>

<style>

</style>
