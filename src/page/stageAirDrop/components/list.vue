<template>
  <div class="container">
    <div class="header">
      <div class="header-title" style="width: 10%">{{ t("stageAirDrop.jieduan") }}</div>
      <div class="header-title" style="width: 10%">{{ t("stageAirDrop.shuliang") }}</div>
      <div class="header-title" style="width: 20%">{{ t("stageAirDrop.kssj") }}</div>
      <div class="header-title" style="width: 40%">{{ t("stageAirDrop.jdu") }}</div>
      <div class="header-title" style="width: 10%"></div>
    </div>
    <div v-for="(v, i) in props.listData" :key="i" class="stage">
      <div class="stage-title">{{ v.title }}</div>
      <div class="stage-quantity">{{ v.quantity }}</div>
      <div class="stage-date">{{ v.date }}</div>
      <div class="progress">
        <div class="progress-text2">
          <div>{{ t("stageAirDrop.yilqum") }}{{ v.received }}</div>
          <div>{{ t("stageAirDrop.weiquw") }}{{ v.quantity - v.received }}</div>
        </div>
        <div class="progress-container">
          <div
            class="progress-bar"
            :style="{ width: (v.received / v.quantity) * 100 + '%' }"
          ></div>
          <div class="progress-text">
            {{ ((v.received / v.quantity) * 100).toFixed(2) }}%
          </div>
        </div>
      </div>

      <div class="button-container">
        <button
          :class="['stage-button', v.status !== t('stageAirDrop.lqu') ? 'disabled' : '']"
        >
          {{ v.status }}
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {  defineProps } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
interface Stage {
  id: number;
  title: string;
  quantity: number;
  received: number;
  date: string;
  status: string;
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
}
.header-title {
  /* display: flex; */
  /* text-align: center; */
}
.stage-title {
  font-size: 1.2em;
  width: 10%;
  /* text-align: center; */
}
.stage-quantity {
  color: #ffa500;
  font-size: 1.2em;
  width: 10%;
  /* text-align: center; */
}
.stage-date {
  width: 20%;
  /* text-align: center; */
}
.progress{
  width: 40%;

}
.progress-text2{
  display: flex;
  color: #FEFEFE;
  font-size: 14px;
  margin-bottom: 8px;
  justify-content: space-between;
}
.progress-container {
  background-color: #333;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  /* text-align: center; */
}
.button-container {
  display: flex;
  align-items: center;
  margin-left: 8%;
  width: 10%;
  /* text-align: center; */
}

.stage {
  background-color: #1d1d1d;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

/* .stage-info {
  display: flex;
  align-items: center;
  gap: 20px;
} */

.progress-bar {
  background-color: #46A362;
  height: 20px;
  border-radius: 15px;
}

.progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
}

.stage-button {
  background-color: #E62A2A;
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
