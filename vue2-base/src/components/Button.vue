<template>
<div>
  <button @click="showTips">{{textVal||'vue2 base button'}}</button>
</div>
</template>

<<script>
export default {
  name:'Button',
  methods:{
    showTips(){
      alert(this.textVal)
    }
  },
  props:{
    textVal:String
  }
}
</script>