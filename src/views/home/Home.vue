<template>
  <div>
    123
  </div>
</template>

<script>
import {http} from '@utils/http'
export default {
  name:"Home",
  created(){
    let data = http('get','/server/content/index.json');
    console.log(data);
  }
}
</script>

<style scoped>

</style>