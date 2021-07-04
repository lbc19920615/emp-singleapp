<template>
  <main>
    <h1>Hello App!</h1>
    <el-space wrap>
      <!--使用 router-link 组件进行导航 -->
      <!--通过传递 `to` 来指定链接 -->
      <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
      <router-link class="el-link el-link--primary" to="/">首页</router-link>
      <router-link class="el-link el-link--primary" to="/about">案件</router-link>
    </el-space>
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  setup() {},
  mounted() {},
  name: "App",
};
</script>
