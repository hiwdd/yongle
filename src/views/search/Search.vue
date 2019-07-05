<template>
  <div class="search">
    <van-nav-bar title="搜索"
                 left-text="返回"
                 left-arrow
                 @click-left="onClickLeft"
                 :border="false" />
    <van-search placeholder="请输入搜索关键词"
                v-model="value" />
    <div class="search-list"></div>
    <Footers></Footers>
  </div>
</template>

<script>
import Footers from "@/common/Footers";
export default {
  name: "Search",
  components: {
    Footers
  },
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    }
  }
};
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: 1rem;
  .search-list {
    flex: 1;
  }
}
</style>