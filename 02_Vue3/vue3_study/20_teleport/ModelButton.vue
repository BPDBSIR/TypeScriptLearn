<template>
  <button @click="modelOpen=true">打开一个对话框</button>

  <!--
    提供了一种干净的方法 让组件的html在父㢟界面外的特定标签中显示
  -->
  <teleport to="body">
    <div v-if="modelOpen" class="dialog_style">
      <div class="dialog_body">
        这是对话框

        <button @click="modelOpen=false">关闭对话框</button>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import {
  defineComponent,
    ref
} from 'vue'

export default defineComponent({
  name: "ModelButton",
  setup(){
    //控制对话框显示/隐藏
    let modelOpen = ref(false)
    return{
      modelOpen
    }
  }
})
</script>

<style scoped>

.dialog_style{

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 0.5s;
  animation: DialogShow ease-in .1s;
}

@keyframes DialogShow {
  0%{
    opacity: 0;
    top: -100px;
  }
  100%{
    opacity: 1;
    top: 0;
  }
}

.dialog_body{
  background-color: #fff;
  border-radius: 2px;
  height: 283px;
  width: 460px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
