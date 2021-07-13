import {onBeforeUnmount, onMounted, ref} from "vue";

/*
* 提高代码的可复用性
* */
export default () => {

    const x = ref(-1)
    const y = ref(-1)

    const clickHandler = (event: MouseEvent) => {
        x.value = event.pageX
        y.value = event.pageY
    }
    //页面已经加载完毕在进行点击的操作
    onMounted(() => {
        window.addEventListener("click", clickHandler)
    })
    //页面卸载钱的生命周期组合API
    onBeforeUnmount(() => {
        window.removeEventListener("click", clickHandler)
    })
    return {
        x, y
    }
}
