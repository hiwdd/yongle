<template>
  <div id="category">
    <div class="header">
      <ul>
        <li style="margin-left:.1rem;"
            class="iconfont icon-zuojiantou"
            @click="$router.back();"></li>
        <li>分类</li>
        <li style="margin-right:.1rem"
            class="iconfont icon-sousuo"
            @click="$router.push('/search');"></li>
      </ul>
    </div>

    <div class="nav">
      <select>
        <option value="volvo">全国</option>
        <option value="saab">深圳</option>
        <option value="opel">广州</option>
        <option value="audi">北京</option>
      </select>

      <select>
        <option value="volvo">全部分类</option>
        <option value="saab">演唱会</option>
        <option value="opel">音乐会</option>
        <option value="audi">休闲娱乐</option>
      </select>

      <select>
        <option value="volvo">全部时间</option>
        <option value="saab">今天</option>
        <option value="opel">明天</option>
        <option value="audi">本周内</option>
      </select>
    </div>

    <div class="main"
         v-for="item in categoryList"
         :key="item.isdate">
      <div class="left">
        <a href="#">
          <img :src="item.pbigimg | toimg('//static.228.cn')"
               :v-lazy="item.pbigimg | toimg('//static.228.cn')">
          <span :class="item.status == 1 ? 'bule' : 'red'">{{item.status == 1 ? '预定' : '售票中'}}</span>
        </a>
      </div>

      <div class="right">
        <b>{{item.name}}</b>
        <p>{{item.begindate + ((item.enddate === item.begindate) ? "" :'~' + item.enddate)}}</p>
        <p>{{item.vname}}</p>
        <span>{{item.prices.split(",")[0] + '~' + item.prices.split(",")[item.prices.split(",").length - 1]}}元</span>
      </div>
    </div>

    <div class="load-more">
      <a href="javascript:;">查看更多</a>
    </div>

    <Footers></Footers>
  </div>
</template>

<script>
import Vuex from "vuex";
import Footers from "@/common/Footers";
export default {
  name: "Category",
  data() {
    return {};
  },
  components: {
    Footers
  },
  computed: {
    ...Vuex.mapState({
      categoryList: state => state.category.categoryList
    })
  },
  methods: {
    ...Vuex.mapActions({
      actDefaultJson: "category/actDefaultJson"
    })
  },
  created() {
    this.actDefaultJson();
  }
};
</script>

<style scoped>
#category {
  height: calc(100% - 1rem);
  overflow-y: auto;
}
#category::-webkit-scrollbar {
  overflow-y: auto;
}
/* 头部 */
.header {
  height: 0.8rem;
}
.header ul {
  display: flex;
  justify-content: space-between;
}
.header ul li {
  line-height: 0.8rem;
  font-size: 0.35rem;
}
.header ul .iconfont {
  font-size: 0.5rem;
  color: #1989fa;
  font-weight: bold;
}

/* 下拉菜单 */
.nav {
  height: 1.04rem;
  width: 100%;
  border-bottom: 1px solid #e9dcdc;
  display: flex;
  justify-content: space-around;
}
select {
  margin-bottom: 0.12rem;
  border: none;
  color: #857878;
  outline: none;
}

/* 中间内容部分 */
#main-m {
  margin-bottom: 1rem;
}
.main {
  height: 2.64rem;
  display: flex;
  margin-top: 0.2rem;
  overflow-y: hidden;
}
.main .left {
  margin-left: 0.2rem;
  margin-right: 0.2rem;
}
.main .left a {
  display: block;
  position: relative;
  height: 2.24rem;
}
.main .left img {
  width: 1.7rem;
  height: 2.24rem;
}
.main .left span {
  display: block;
  width: 0.92rem;
  height: 0.4rem;
  font-size: 12px;
  color: #fff;
  border-radius: 30% 0 32% 0;
  position: absolute;
  top: 0;
}
.main .left .red {
  background: #ff004c;
}
.main .left .bule {
  background: #00abc3;
}
.main .right {
  margin-top: 0.04rem;
  margin-right: 0.2rem;
}
.main .right b {
  height: 0.8rem;
  font-size: 14px;
}
.main .right p {
  right: 0.32rem;
  margin-top: 0.1rem;
  color: #857878;
  font-size: 12px;
}
.main .right span {
  display: block;
  margin-top: 0.1rem;
  color: red;
  font-size: 16px;
}

/* 查看更多 */
.load-more {
  width: 2rem;
  height: 0.54rem;
  line-height: 0.54rem;
  text-align: center;
  border-radius: 2rem;
  margin: auto;
  background: #fff;
  box-shadow: 0px 2px 6px 0px rgba(255, 58, 86, 0.2);
  margin-bottom: 0.3rem;
}
.load-more a {
  background: linear-gradient(to right, #ff7e6f, #ff2959);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>