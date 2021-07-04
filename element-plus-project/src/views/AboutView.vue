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
import expose from '@v3p/expose'
console.log(expose)
export default {
  name: "AboutView",
  components: {
    KunshanCase: expose.KunshanCase,
    SuzhouCase: expose.SuzhouCase,
  },
  data() {
    return {}
  }
}
</script>
