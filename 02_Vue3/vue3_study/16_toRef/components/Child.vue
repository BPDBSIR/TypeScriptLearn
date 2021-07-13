<template>
  <h2>Child</h2>
  <p>{{age}}</p>
  <p>length: {{length}}</p>
</template>

<script lang="ts">

function useGetLength(age: Ref) {
  return computed(() => {
    return age.value.toString().length
  })
}

import {
  defineComponent,
  computed,
    Ref,
    toRef
} from 'vue'
export default defineComponent({
  name: "Child",
  props: {
    age:{
      type:Number,
      required:true//必须的
    }
  },
  setup(props){
    const length = useGetLength(toRef(props,"age"))
    return{
      length
    }
  }
})
</script>

<style scoped>

</style>
