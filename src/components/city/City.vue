<template>
  <div class="city">
    <van-nav-bar title="选择出演的城市"
                 left-text="返回"
                 left-arrow
                 @click-left="onClickLeft"
                 :border="false" />

    <div class="city-list">
      <span class="title-list">当前城市</span>
      <a class="one"
         href="#">{{nowCity ? nowCity : cityName}}</a>
    </div>

    <div class="city-list">
      <p class="title-list">热门城市</p>
      <div class="more-list">
        <a href="#"
           @click="selectCity({city:cityName})">{{cityName}}</a>
        <a href="#"
           v-for="item in hotCitys"
           @click="selectCity(item)"
           :key="item.FCONFIGID">{{item.CITYNAME}}</a>
      </div>
    </div>

    <div class="city-list">
      <p class="title-list">更多城市</p>
      <div class="more-list">
        <a href="#"
           v-for="city in fcitys"
           @click="selectCity(city)"
           :key="city.FCONFIGID">{{city.CITYNAME}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  name: "City",
  computed: {
    ...Vuex.mapState("city", ["cityName", "hotCitys", "fcitys", "nowCity"])
  },
  methods: {
    ...Vuex.mapActions({
      actListJson: "city/actListJson",
      actGetCityByNameJson: "city/actGetCityByNameJson"
    }),
    onClickLeft() {
      this.$router.back();
    },
    selectCity(city) {
      let nowCity = city.CITYNAME;
      this.$store.commit({
        type: "city/getNowCity",
        nowCity
      });
      this.$router.back();
    }
  },
  created() {
    this.actListJson();
    this.actGetCityByNameJson();
  }
};
</script>

<style lang="scss" scoped>
.city {
  height: 100%;
  overflow-y: auto;
  font-size: 14px;
  color: #999;
  &::-webkit-scrollbar {
    overflow-y: auto;
  }
  .city-list {
    margin: 0.3rem;
    .title-list {
      margin-bottom: 0.3rem;
    }
    .more-list {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      a {
        width: 25%;
        text-align: center;
        margin: 0.2rem 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    a {
      color: #999;
      font-size: 16px;
    }
    .one {
      color: #1989fa;
      margin-left: 0.2rem;
    }
  }
}
</style>