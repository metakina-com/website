<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const djs: any = ref(t("collaborativeMining.getcode"));
const getYzm = () => {
  djs.value = 60;
  const interval = setInterval(() => {
    djs.value--;

    if (djs.value <= 0) {
      djs.value = t("collaborativeMining.getcode");
      clearInterval(interval);
    }
  }, 1000);
};
</script>

<template>
  <div class="down">{{t("collaborativeMining.dpwnlapp")}}</div>
  <div class="logincontainer">
    <div class="illustration">
      <img
        src="https://plum-secure-meadowlark-923.mypinata.cloud/ipfs/QmVhCqjSFnw5Bvcjzmu2VCwnTMxU3fatZqeiHE2JZFaH5B/wakuang.png"
        alt="Mining Illustration"
      />
    </div>
    <div class="login-form">
      <h2 class="loginwakuang">{{t("collaborativeMining.begin")}}</h2>
      <div class="yxyzm">
        <input type="email" id="email" :placeholder="t('collaborativeMining.qshryx')" />
      </div>
      <div class="yxyzm">
        <input type="password" id="password" :placeholder="t('collaborativeMining.qsryzm')" />

        <div class="yzm" @click="getYzm">{{ djs }}</div>
      </div>

      <div class="yhxy">
        <input type="checkbox" id="agree" />
        <div for="agree">
          {{t("collaborativeMining.wytyxx")}} <a href="#">{{t("collaborativeMining.yhxy")}}</a> {{t("collaborativeMining.and")}}
          <a href="#">{{t("collaborativeMining.zcxy")}}</a>
        </div>
      </div>
      <button>{{t("collaborativeMining.lgin")}}</button>
      <p class="myzh">{{t("collaborativeMining.myzh")}}<a href="#">{{t("collaborativeMining.ljzc")}}</a></p>
    </div>
  </div>
</template>

<style scoped>
.yhxy {
  display: flex;
  align-items: center;
  padding: 30px 0;
}
.myzh {
  width: 400px;
  text-align: center;
}
.loginwakuang {
  font-size: 32px;
}
.yzm {
  white-space: nowrap;
  color: red;
  cursor: pointer;
}
.down {
  text-align: right;
  position: relative;
  top: 42px;
  right: 181px;
  cursor: pointer;
}
.yxyzm {
  width: 400px;
  display: flex;
  border-bottom: 1px solid #333;
  margin-top: 30px;
  align-items: center;
}
.logincontainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 0;
  width: 100%;
  background-color: rgb(24, 25, 32);
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
  background-color: rgb(24, 25, 32);
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
