<template>
  <div id="layout">
    <div class="login-bg"></div>
    <div class="top">
      <div class="top-icon">
        <a class="iconfont" @click="$router.back();">&#xe771;</a>
      </div>
    </div>
    <div class="login">
      <h3>会员登录</h3>
      <div class="content">
        <form id="from">
          <div class="form">
            <label>
              <input type="text" name="username" class="username inp" placeholder="手机号 / 邮箱地址" />
            </label>
            <label>
              <input type="password" name="password" class="password inp" placeholder="请输入密码" />
            </label>
          </div>
          <div class="exempt">
            <label class="fl">
              <input name="freeloginbtn" type="checkbox" class="check" />
              <span>两周内免登录</span>
            </label>
            <a href="javascript:;" class="fr">忘记密码</a>
          </div>
          <div class="login-btn">登录</div>
          <div class="other-login-type">
            <a href="javascript:;" class="tc iconfont">&#xe622;</a>
            <a href="javascript:;" class="tc iconfont">&#xe66b;</a>
            <a href="javascript:;" class="tc iconfont">&#xe66b;</a>
          </div>
        </form>
      </div>
      <div class="foot">
        <router-link tag="a" :to="{name:'register'}" class="go-register">马上注册</router-link>
        <p>
          登录注册表示同意
          <a href="javascript:;">永乐票务用户服务协议</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
};
</script>

<style scoped>
#layout .login-bg {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  background: url(http://m2static.228.cn/images/loginBg.jpg) no-repeat 50%;
}

#layout .top {
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-bottom: 0.2rem;
}

#layout .top .top-icon {
  padding-top: 0.66rem;
  width: calc(100% - 0.3rem);
  margin-left: 0.3rem;
  overflow: hidden;
  position: relative;
  z-index: 9;
}

#layout .top .top-icon a {
  font-size: 0.5rem;
  font-weight: bold;
  color: #dedfe0;
  display: block;
}

#layout .login {
  margin: 0.6rem 1rem 0;
}

#layout .login h3 {
  color: #fff;
  font-size: 0.64rem;
  margin-bottom: 0.6rem;
  font-weight: bold;
}

#layout .login label {
  display: block;
  margin-bottom: 0.4rem;
}

#layout .login .inp {
  font-size: 0.3rem;
  width: 100%;
  height: 0.92rem;
  border: 1px solid #dedfe0;
  border-radius: 0.92rem;
  outline: none;
  color: #fff;
  background-color: rgba(0, 0, 0, 0);
  text-align: center;
}

#layout .login .exempt {
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0.1rem;
  height: 0.8rem;
}

#layout .login .exempt .check {
  width: 0.3rem;
  height: 0.3rem;
  margin-top: 0;
  margin-right: 0.05rem;
  vertical-align: middle;
  filter: alpha(opacity=20);
  -moz-opacity: 0;
  -khtml-opacity: 0;
  opacity: 0.2;
}

#layout .login .exempt .fl {
  float: left;
}

#layout .login .exempt .fr {
  float: right;
}

#layout .login .exempt a {
  color: rgba(255, 255, 255, 0.7);
  padding-right: 0.2rem;
}

#layout .login .login-btn {
  height: 0.92rem;
  width: 100%;
  background: rgba(255, 255, 255, 0.7);
  color: #fff;
  border-radius: 0.92rem;
  opacity: 0.8;
  font-size: 0.3rem;
  text-align: center;
  line-height: 0.92rem;
}

#layout .login .other-login-type {
  display: flex;
  margin: 0.8rem 0.25rem 0;
  justify-content: space-around;
}

#layout .login .other-login-type .iconfont {
  font-size: 0.6rem;
  color: #df2d4e;
  opacity: 0.6;
}

#layout .login .foot {
  margin-top: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 0.4rem;
}

#layout .login .foot .go-register {
  font-size: 0.3rem;
  margin-bottom: 0.8rem;
  display: block;
}

#layout .login .foot a {
  color: #ff3a56;
  text-decoration: underline;
}

#layout .login .foot p {
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.25rem;
}

#layout .login .foot p a {
  color: rgba(255, 58, 86, 0.6);
  font-size: 0.25rem;
}

#layout .login .foot a {
  text-decoration: underline;
}
</style>