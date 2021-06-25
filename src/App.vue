<template>
  <div class="container">
    <global-header></global-header>
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import GlobalHeader from './components/GlobalHeader.vue'

export default defineComponent({
  name:'App',
  components: {
    GlobalHeader
  }
})
</script>


<style lang="less">
*{
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}
</style>
