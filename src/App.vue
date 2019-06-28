<template>
  <div id="app">
    <router-view></router-view>
    <TabBar v-if="$route.meta.TabBarFlag"/>
  </div>
</template>

<script>
import TabBar from '@common/TabBar'
export default {
  name:"App",
  components:{
    TabBar
  }
}
</script>


<style lang="scss">

</style>
