<script setup lang="ts">
import { ref } from "vue";
const djs: any = ref("获取验证码");
const getYzm = () => {
  djs.value = 60;
  const interval = setInterval(() => {
    djs.value--;

    if (djs.value <= 0) {
      djs.value = "获取验证码";
      clearInterval(interval);
    }
  }, 1000);
};
</script>

<template>
    <div class="down">挖矿APP下载</div>
    <div class="logincontainer">
    <div class="illustration">
      <img src="../../../assets/images/wakuang.png" alt="Mining Illustration" />
    </div>
    <div class="login-form">
      <h2 style="font-size: 32px">开机挖币</h2>
      <div class="yxyzm">
        <input type="email" id="email" placeholder="请输入邮箱" />
      </div>
      <div class="yxyzm">
        <input type="password" id="password" placeholder="请输入验证码" />

        <div class="yzm" @click="getYzm">{{ djs }}</div>
      </div>

      <div style="display: flex; align-items: center; padding: 30px 0">
        <input type="checkbox" id="agree" />
        <div for="agree">
          我已阅读并同意 <a href="#">《用户协议》</a> 和
          <a href="#">《隐私政策》</a>
        </div>
      </div>
      <button>登 录</button>
      <p style="width: 400px; text-align: center">
        没有有效账号？<a href="#">立即注册</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
.yzm {
  white-space: nowrap;
  color: red;
  cursor: pointer;
}
.down{
    text-align: right;
    position: relative;
    top: 42px;
    right: 181px;
    cursor: pointer;
}
.yxyzm {
  width: 400px;
  display: flex;
  border-bottom: 1px solid #333;;
  margin-top: 30px;
  align-items: center;
}
.logincontainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 0;
  width: 100%;
  background-color: rgb(24, 25, 32);;
}

.illustration {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.illustration img {
  max-width: 100%;
}

.login-form {
  width: 50%;
  padding: 20px;
}

.login-form h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.login-form label {
  display: block;
  margin-bottom: 10px;
  font-size: 14px;
}

.login-form input[type="email"],
.login-form input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 4px;
  background-color: rgb(24, 25, 32);;
  color: white;
  font-size: 18px;
  border: none;
}

.login-form input[type="checkbox"] {
  margin-right: 10px;
}

.login-form a {
  color: #00f;
}

.login-form button {
  width: 400px;
  padding: 15px;
  background-color: #f04e4e;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
}

.login-form button:hover {
  background-color: #d43f3f;
}
</style>
