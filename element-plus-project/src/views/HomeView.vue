<template>
  <div>
    <h1>VUE 3 Element Project！</h1>
    <v3p-helloworld msg="远程调用 Element-plus Base 组件"/>
    <v3b-button />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import HelloWorld from '@v3p/HelloWorld'
export default {
  components:{
    'v3p-helloworld': HelloWorld,
    "v3b-button": defineAsyncComponent(() => import("@v3b/Button")),
  },
  setup() {},
  mounted() {},
  name: "HomeView",
};
</script>
