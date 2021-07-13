<template>
  <h2>自定义hook函数操作</h2>
  <p>x {{ x }} y {{ y }}</p>
  <h4 v-if="!loading">正在加载中...</h4>
  <h4 v-else-if="errorMsg">错误信息: {{ errorMsg }}</h4>
  <!--  <ul v-else>-->
  <!--    <li>{{ data.id }}</li>-->
  <!--    <li>{{ data.address }}</li>-->
  <!--    <li>{{ data.distance }}</li>-->
  <!--  </ul>-->

  <ul v-for="item in data" :key="item.id">
    <li>id: {{ item.id }}</li>
    <li>title: {{ item.title }}</li>
    <li>price: {{ item.price }}</li>
  </ul>
</template>

<script lang="ts">
import {
  defineComponent,
  watch
} from 'vue';

import useMousePosition from "@/hooks/useMousePosition";

import useRequest from "@/hooks/useRequest";

interface AddressData {
  id: number;
  address: string;
  distance: string;
}

interface ProductsData {
  id: number;
  title: string;
  price: number;
}

export default defineComponent({
  name: 'App',
  /*
  * 用户在也没按中点击页面 把点击页面的位置的横纵坐标收集并展示出来
  * */
  setup() {
    const {x, y} = useMousePosition()

    //发送请求
    // const {loading, data, errorMsg} = useRequest<AddressData>("data/address.json")
    const {loading, data, errorMsg} = useRequest<ProductsData[]>("data/products.json")

    //监视
    watch(data, () => {
      if (data.value) {
        console.log(data.value.length)
      }
    })
    return {
      x, y, loading, data, errorMsg
    }
  }
});
</script>
