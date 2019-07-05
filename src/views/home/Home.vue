<template>
  <div class="home">
    <div class="home-head">
      <router-link tag="a"
                   to="/city"
                   class="city">
        <span>{{nowCity ? nowCity : "全国"}}</span>
        <i class="iconfont icon-below-s"></i>
      </router-link>
      <div class="search">
        <input type="text"
               placeholder="搜索"
               @click="$router.push('/search')" />
        <i class="iconfont icon-sousuo"></i>
      </div>
    </div>
    <Banner :list="slideList"
            loop
            pagination></Banner>
    <div class="home-nav">
      <div class="title-nav">
        <p>
          <a href="/category/yanchanghui/"
             class>
            <i class="iconfont icon-huatong"></i>演唱会
          </a>
          <a href="/category/huajuwutaiju/"
             class>
            <i class="iconfont icon-navicon-hdbk"></i>话剧舞台剧
          </a>
          <a href="/category/tiyusaishi/"
             class>
            <i class="iconfont icon-yundong"></i>体育赛事
          </a>
          <a href="/category/ertongqinzi/"
             class>
            <i class="iconfont icon-qinzi"></i>儿童亲子
          </a>
        </p>
        <p class="mt25">
          <a href="/category"
             class>
            <i class="iconfont icon-fenlei"></i>全部分类
          </a>
          <a href="/subject"
             class>
            <i class="iconfont icon-icon--"></i>活动
          </a>
          <a href="/opera"
             class>
            <i class="iconfont icon-shanzi"></i>永乐说
          </a>
          <a href="/person/index.html">
            <i class="iconfont icon-gerenzhongxin"></i>我的
          </a>
        </p>
      </div>
    </div>
    <!--图片-->
    <div class="home-img">
      <div class="first-pay-first">
        <a v-for="item in blockRec"
           :key="item.LINKID">
          <img :src="item.IMG | toimg('//static.228.cn')"
               height="150"
               style="background: rgba(243, 187, 2, 0.3);" />
        </a>
      </div>
      <div class="special">
        <ul>
          <li>
            <a href="#"
               v-for="item in subjectList"
               :key="item.LINKID"
               style="height: 67.7914px;">
              <img :src="item.IMG | toimg('//static.228.cn')"
                   style="background: rgba(42, 164, 4, 0.3);" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 推荐和场馆 -->
    <div class="home-tit">
      <h3 class="con-tit con-tits mb15 pt10">
        <b class="active">推荐</b>
        <b class>场馆</b>
      </h3>
      <ul class="venue cl">
        <li v-for="item in recommendPage"
            :key="item.LINKID">
          <a href="#">
            <img :src="item.PBIGIMG | toimg('//static.228.cn')"
                 class="imgs"
                 style="background: rgba(7, 17, 9, 0.3);" />
            <b class="db mt5 name">{{item.NAME}}</b>
            <span class="gray9 venue-address db f11">{{item.VNAME}}</span>
          </a>
        </li>
        <div style="clear:both;"></div>
      </ul>
    </div>
    <Footers></Footers>
  </div>
</template>

<script>
import Vuex from "vuex";
import Banner from "@components/banner/Banner.vue";
import Footers from "@/common/Footers";
export default {
  name: "Home",
  components: {
    Banner,
    Footers
  },
  computed: {
    ...Vuex.mapState({
      blockRec: state => state.home.blockRec,
      recommendPage: state => state.home.recommendPage,
      slideList: state => state.home.slideList,
      subjectList: state => state.home.subjectList,
      nowCity: state => state.city.nowCity
    })
  },
  methods: {
    ...Vuex.mapActions({
      actIndexJson: "home/actIndexJson"
    })
  },
  created() {
    this.actIndexJson();
  }
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  overflow-y: auto;
  padding-bottom: 1rem;
  .home-head {
    padding: 0.08rem 0.3rem 0.08rem 0.2rem;
    display: flex;
    background: linear-gradient(to right, #ff7e6f, #ff2959);
    box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);
    .city {
      width: 1rem;
      height: 0.8rem;
      line-height: 0.8rem;
      position: relative;
      text-align: center;
      padding-right: 0.3rem;
      color: #fff;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      i {
        position: absolute;
        right: 0.3rem;
        top: 0rem;
        display: block;
        width: 0.1rem;
        height: 0.1rem;
        background-position: 0 -1144px;
      }
    }
    .search {
      flex: 1;
      text-align: center;
      height: 0.68rem;
      line-height: 0.68rem;
      border-radius: 2rem;
      margin-top: 0.06rem;
      background-color: #fff;
      overflow: hidden;
      position: relative;
      input {
        outline: none;
        position: relative;
        height: 0.68rem;
        line-height: 0.68rem;
        font-size: 0.26rem;
        width: calc(100% - 1.5rem);
        padding: 0 0.4rem 0 1.1rem;
        border: none;
        text-align: center;
        z-index: 2;
        background: none;
      }
      i {
        width: 0.28rem;
        height: 0.28rem;
        display: block;
        position: absolute;
        top: 0rem;
        background-size: 3rem;
        background-position: 0 -57.52rem;
        z-index: 1;
        left: calc(100% / 2 - 15px);
        color: #ff2959;
      }
    }
  }
  /*Nav*/
  .title-nav {
    margin: 0.5rem 0.4rem;
    overflow: hidden;
    p {
      display: flex;
      a {
        flex: 1;
        color: rgb(123, 129, 135);
        text-align: center;
        i {
          display: block;
          width: 0.72rem;
          height: 0.72rem;
          margin: auto;
          font-size: 0.5rem;
          text-align: center;
          padding-top: 0.25rem;
          color: #555;
        }
      }
    }
  }
  /*home-img*/
  .first-pay-first {
    position: relative;
    border-radius: 0.2rem;
    margin: 0.4rem;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .special {
    margin: 0 0.3rem;
    li {
      display: flex;
      margin-bottom: 0.2rem;
      a {
        flex: 1;
        margin: 0 0.1rem;
        border-radius: 0.2rem;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  /*推荐、场馆*/
  .con-tit {
    font-size: 0.44rem;
    color: #000;
    margin-left: 0.4rem;
    margin-right: 0.4rem;
    .mb15 {
      margin-bottom: 0.3rem;
    }
    .pt10 {
      padding-top: 0.2rem;
    }
    b {
      color: #b5bbc1;
      margin-right: 0.2rem;
    }
    .active {
      color: #000;
    }
  }
  .recommend {
    width: calc(100% - 0.8rem);
    margin: 0 0.2rem;
    li {
      float: left;
      margin-right: calc((100% - (2.1rem * 3)) / 2);
      width: 1.05rem;
      position: relative;
      overflow: hidden;
      margin-bottom: 0.24rem;
      .imgs {
        width: 100%;
        height: 2.8rem;
        border-radius: 0.2rem;
        display: block;
      }
      .tip {
        display: block;
        height: 0.4rem;
        line-height: 0.4rem;
        color: #fff;
        font-style: normal;
        position: absolute;
        top: 0;
        font-size: 0.22rem;
        font-weight: bold;
        border-radius: 0.2rem 0;
        padding: 0 0.1rem;
        left: 0;
        text-align: center;
      }
      .gradual-red {
        background: linear-gradient(to right, #ff7e6f, #ff2959);
        box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);
      }
      span:last-child {
        margin-top: 0.04rem;
      }
    }
  }
  b {
    font-weight: bold;
  }
  .name {
    font-size: 0.26rem;
    height: 0.68rem;
    line-height: 0.36rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .mt5 {
    margin-top: 0.1rem;
  }
  .db {
    display: block;
  }
  .f11 {
    font-size: 0.22rem;
  }
  .gray9 {
    color: #999;
  }
  .cl {
    zoom: 1;
  }
  .mb15 {
    margin-bottom: 0.3rem;
  }
  .pt10 {
    padding-top: 0.2rem;
  }
  .recommend li a span:last-child {
    margin-top: 0.04rem;
  }
  .recommend li:nth-child(3n) {
    margin-right: 0;
  }
  .red {
    color: #ff3a56;
  }
  .f11 {
    font-size: 0.22rem;
  }
  .f13 {
    font-size: 0.26rem;
  }
  .mr5 {
    margin-right: 0.1rem;
  }
  /*馆场*/
  .venue {
    width: calc(100% - 0.8rem);
    margin: 0 0.4rem;
    min-height: 4rem;
    li {
      float: left;
      margin-right: calc((100% - (2.15rem * 3)) / 2);
      width: 2.1rem;
      position: relative;
      overflow: hidden;
      margin-bottom: 0.24rem;
      .name {
        height: 0.32rem;
      }
    }
    .imgs {
      width: 100%;
      height: 2.8rem;
      border-radius: 0.2rem;
    }
    .tip-totalTicket {
      background-position: 0 -50.26rem;
    }
    .tip {
      display: block;
      height: 0.4rm;
      line-height: 0.4rem;
      color: #fff;
      font-style: normal;
      position: absolute;
      top: 0;
      font-size: 0.22rem;
      font-weight: bold;
      border-radius: 0.2rem 0;
      padding: 0 0.1rem;
      left: 0;
      text-align: center;
    }
    .venue-address {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
}
</style>
