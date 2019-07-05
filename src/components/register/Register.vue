<template>
  <div id="layout">
    <div class="login-bg"></div>
    <div class="top">
      <div class="top-icon">
        <a class="iconfont" @click="$router.back();">&#xe771;</a>
      </div>
    </div>
    <div class="login">
      <h3>会员注册</h3>
      <div class="content">
        <form id="from">
          <div class="form">
            <label class="lab">
              <input type="text" name="username" class="username inp" placeholder="请输入手机号" />
            </label>
            <label class="lab">
              <input type="password" name="password" class="password inp" placeholder="请输入密码" />
            </label>
            <label class="lab">
              <input type="number" name="vercode" class="vercode inp" placeholder="请输入验证码" />
              <a href="javascript:;" class="red">获取验证码</a>
            </label>
          </div>
          <div class="login-btn">登录</div>
        </form>
      </div>
      <div class="foot">
        <a href="javascript:;" class="go-register">马上登录</a>
        <p>
          登录注册表示同意
          <a href="javascript:;">永乐票务用户服务协议</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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

#layout .login .inp {
  font-size: 0.3rem;
  height: 0.92rem;
  outline: none;
  color: #fff;
  background-color: rgba(0, 0, 0, 0);
  text-align: center;
  margin-left: 0.41rem;
  border: none;
}

#layout .login .username,
#layout .login .password {
  width: calc(100% - 0.92rem);
}

#layout .login .lab a {
  color: #ff3a56;
  font-size: 0.2rem;
}

#layout .login .lab {
  width: 100%;
  height: 0.92rem;
  border: 1px solid #dedfe0;
  border-radius: 0.92rem;
  display: block;
  margin-bottom: 0.4rem;
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