<style lang="scss">
$tag: "AboutView";
$sel: "." + $tag;

#{$sel} {
}
</style>

<template>
  <div class="AboutView">
    <KunshanCase></KunshanCase>
    <SuzhouCase></SuzhouCase>
  </div>
</template>

<script>
import KunshanCase from "@v3p/KunshanCase";
import SuzhouCase from "@v3p/SuzhouCase";
export default {
  name: "AboutView",
  components: {
    KunshanCase,
    SuzhouCase
  },
  data() {
    return {}
  }
}
</script>
