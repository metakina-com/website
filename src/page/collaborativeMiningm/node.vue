<script setup lang="ts">
import Top from "../../components/topMenum.vue";
import Bottom from "../../components/bottomm.vue";
import Pledge from "./components/pledge.vue";
import Login from "./components/login.vue";
import { ref, getCurrentInstance } from "vue";
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const instance = getCurrentInstance();
const proxy = instance?.proxy as any; // 使用类型断言和可选链操作符

const activeTab2 = ref(t("projectCPT.daibi"));
</script>

<template>
  <Top activeIndex='/node'/>
  <Login/>
  <div class="container">
    <div class="tabs">
      <div
        class="tab2 active"
      >
      {{ t("projectCPT.jdwk") }}
      </div>
    </div>
    <Pledge :imgurl="proxy?.$ipfsUrl + 'ETH.png'" :circle="true" v-for="(_, index) in [ {}]" :key="index"/>
  </div>
  <div class="container">
    <div class="tabs">
    
      <div
        class="tab2"
        :class="{ active: activeTab2 === t('projectCPT.daibi') }"
        @click="activeTab2 = t('projectCPT.daibi')"
      >
      {{ t("projectCPT.daibi") }}
      </div>
      <div
        class="tab2"
        :class="{ active: activeTab2 === 'LP' }"
        @click="activeTab2 = 'LP'"
      >
        LP
      </div>
    </div>
    <div class="">
      <div v-if="activeTab2 === t('projectCPT.daibi')" class="statc">
        <Pledge :imgurl="proxy?.$ipfsUrl + 'ETH.png'" :circle="true" v-for="(_, index) in [{}, {}, {}, {}, {}]" :key="index"/>
      </div>
      <div v-if="activeTab2 === 'LP'" class="statc">
        <Pledge :imgurl="proxy?.$ipfsUrl + 'BTC.png'" :circle="true" v-for="(_, index) in [{}, {}]" :key="index" />
      </div>
    </div>
  </div>
  <Bottom />
</template>

<style scoped>
.container {
  padding: 20px 0;
}

.tabs {
  display: flex;
  margin-left: 10%;
  font-size: 36px;
}

.tab {
  cursor: pointer;
  color: #fff;
  margin-right: 40px;
}
.tab2 {
  cursor: pointer;
  color: #fff;
  padding: 10px 20px;
}
.tab2.active {
  color: red;
}
.tab.active {
  border-bottom: 2px solid red;
}

.content {
  display: flex;
  justify-content: space-around;
  padding: 100px 0;
  background-color: rgb(24, 25, 32);
  margin-top: 20px;
}
.contentc {
  background-color: rgb(24, 25, 32);
  margin-top: 20px;
  border-radius: 16px;
}
.stat {
  text-align: center;
  display: flex;
  width: 80%;
  justify-content: space-around;
}
.statc {
  /* background: #1D1D1D; */
}
.number {
  font-size: 60px;
  margin-bottom: 10px;
  color: white;
}

.description {
  font-size: 24px;
  color: #999;
}
.Person:hover {
  background-color: #434343;
}
</style>
