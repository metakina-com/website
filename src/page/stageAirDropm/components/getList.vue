<template>
  <div class="container">
    <div class="header">
      <div class="header-title"style="width: 200px;">{{ t("stageAirDrop.jieduan") }}</div>
      <div class="header-title" style="width: 200px;">{{ t("stageAirDrop.lqudizhi") }}</div>
      <div class="header-title" style="width: 200px;">{{ t("stageAirDrop.lqushuliang") }}</div>
      <div class="header-title"style="width: 300px;">{{ t("stageAirDrop.lqushijina") }}</div>
    </div>
    <div v-for="(v, i) in props.listData" :key="i" class="stage">
      <div class="stage-title" style="width: 200px;">{{ v.title }}</div>
      <div class="stage-address" style="width: 200px;">{{ yasuo(v.address) }}</div>
      <div class="stage-num" style="width: 200px;">{{ v.num }}</div>
      <div class="stage-date" style="width: 300px;">
        {{ v.date }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {  defineProps } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const yasuo = (address: any) => {
  if (address.length <= 10) {
    return address; // 如果地址长度小于或等于10，则直接返回地址
  }
  const firstPart = address.slice(0, 5); // 提取前五位
  const lastPart = address.slice(-5); // 提取后五位
  return `${firstPart}...${lastPart}`;
};
interface Stage {
  id: number;
  title: string;
  num: number;
  date: string;
  address: string;
}
const props = defineProps({
  listData: Array<Stage>,
});
</script>
<style scoped>
.container {
  width: 80%;
  margin: 0 auto;
  padding: 20px;
}
.header {
  display: flex;
  padding: 15px;
  background-color: #1d1d1d;
  border-radius: 10px 10px 0 0;
  justify-content: space-between;
}
.header-title {
  /* display: flex; */
  /* text-align: center; */
}
.stage-title {
  font-size: 1.2em;
  /* text-align: center; */
}
.stage-address {
  color: #46a362;
  font-size: 1.2em;
  text-decoration: underline;
  cursor: pointer;
  /* text-align: center; */
}
.stage-num {
  /* text-align: center; */
}
.stage-date {
  color: #666666;
}

.stage {
  border: 1px solid #1d1d1d;
  padding: 15px;
  display: flex;
  border-top: none;
  align-items: center;
  justify-content: space-between;
}

.progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
}

.stage-button {
  background-color: #e62a2a;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1em;
  width: 120px;
}

.stage-button.disabled {
  background-color: #888;
  cursor: not-allowed;
}
</style>
