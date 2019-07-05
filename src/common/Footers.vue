<template>
  <div class="footers">
    <div class="home-foot tc">
      <div class="box-shadow-top">
        <div class="box-shadow-bot">
          <p class="pt20 mb10">
            <a href="javascript:;"
               class>最新资讯</a>
            <a href="javascript:;"
               class>合作招商</a>
            <a href="javascript:;"
               class>联系我们</a>
          </p>
          <em class="f11">© 永乐票务</em>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footers"
};
</script>

<style scoped>
.home-foot {
  height: 1.54rem;
  width: 100%;
}

.tc {
  text-align: center;
}
.box-shadow-top {
  height: 100%;
  box-shadow: 2px 20px 15px -9px #f4f4f4 inset;
}
.box-shadow-bot {
  height: 100%;
  height: 100%;
  box-shadow: 0 -20px 15px -9px #f4f4f4 inset;
}
.mb10 {
  margin-bottom: 0.22rem;
}
.pt20 {
  padding-top: 0.4rem;
}
.home-foot em {
  color: #ccd1d6;
}
.f11 {
  font-size: 0.22rem;
}

em {
  font-style: normal;
}
.home-foot p a {
  margin: 0 0.3rem;
  color: #5f646a;
  font-size: 0.24rem;
}
</style>