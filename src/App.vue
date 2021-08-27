<template>
  <div class="container-fluid px-0 flex-shrink-0">
    <global-header :user="currentUser"></global-header>
    <!-- <router-view></router-view> -->
    <column-list :list="list"></column-list>
  </div> 
</template>
 
<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList from './components/ColumnList.vue'
import PostList from './components/PostList.vue'
import GlobalHeader, { UserProps} from './components/GlobalHeader.vue'
import { useStore } from 'vuex'

const currentUser: UserProps = {
  isLogin: false,
  name: 'viking'
}

export default defineComponent({
    name: 'App',
    components: {
      ColumnList,
      GlobalHeader,
      PostList
    },
    setup() { 
      const store = useStore()
      return {
        list: computed(() => store.state.testData),
        currentUser,
      }
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
