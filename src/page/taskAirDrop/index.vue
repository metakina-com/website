<script setup lang="ts">
import Top from "../../components/topMenu.vue";
import Bottom from "../../components/bottom.vue";
import List from "./components/list.vue";
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { ref, onMounted, getCurrentInstance } from "vue";
const instance = getCurrentInstance();
const proxy = instance?.proxy as any; // 使用类型断言和可选链操作符
const items = ref([
  "0x5b8ACF7E2672C4d7D665A661A574a811224394a27",
  "0x5b8ACF7E2672C4d7D665A661A574a811224394a27",
  "0x5b8ACF7E2672C4d7D665A661A574a811224394a27",
  "0x5b8ACF7E2672C4d7D665A661A574a811224394a27",
  "0x5b8ACF7E2672C4d7D665A661A574a811224394a27",
  "0x5b8ACF7E2672C4d7D665A661A574a811224394a27",
  "0x5b8ACF7E2672C4d7D665A661A574a811224394a27",
  "0x5b8ACF7E2672C4d7D665A661A574a811224394a27",
  "0x5b8ACF7E2672C4d7D665A661A574a811224394a27",
  "0x5b8ACF7E2672C4d7D665A661A574a811224394a27",
  "0x5b8ACF7E2672C4d7D665A661A574a811224394a27",
  "0x5b8ACF7E2672C4d7D665A661A574a811224394a27",
  "0x5b8ACF7E2672C4d7D665A661A574a811224394a27",
  "0x5b8ACF7E2672C4d7D665A661A574a811224394a27",
  "0x5b8ACF7E2672C4d7D665A661A574a811224394a27",
  "0x5b8ACF7E2672C4d7D665A661A574a811224394a27",
  "0x5b8ACF7E2672C4d7D665A661A574a811224394a27",
  "0x5b8ACF7E2672C4d7D665A661A574a811224394a27",
  "0x5b8ACF7E2672C4d7D665A661A574a811224394a27",
  "0x5b8ACF7E2672C4d7D665A661A574a811224394a27",
]);
const listgz:any = ref([
      { btnLName: t("stageAirDrop.gz") },
      { btnLName: t("stageAirDrop.dz") },
      { btnLName: t("stageAirDrop.zf") },
      { btnLName: t("stageAirDrop.zf") },
    ])
const scrollContainer: any = ref(null);
onMounted(() => {
  const containerHeight = scrollContainer.value.clientHeight;
  const itemHeight = scrollContainer.value.querySelector("div").clientHeight;
  if (containerHeight > itemHeight) {
    const scrollList = document.querySelector(".scroll-list");
    if (scrollList !== null) {
      (scrollList as HTMLElement).style.animation = `none`;
    }
    // document.querySelector(".scroll-list").style.animation = `none`;
  }
});
</script>

<template>
  <Top activeIndex="/task" />
  <div class="explain" style="align-items: center">
    <div class="content">
      <text class=" t3">{{ t("stageAirDrop.makfuli") }}</text>
      <text class="  lquguiz">{{ t("stageAirDrop.lquguiz") }}</text>
    </div>
    <div class="metkinfuli">
      {{ t("stageAirDrop.metkinfuli") }}
    </div>
  </div>
  <List
    v-for="(v, i) in listgz"
    :key="i"
    :btnLName="v.btnLName"
  />
  <el-button type="success" class="btn btn-withdraw">{{ t("stageAirDrop.lqufuli") }}</el-button>
  <div class="raffle">
    <div class="lf">
      <text class="t2">{{ t("stageAirDrop.xyun") }}</text>
      <text class="t2" style="color: #fff">{{ t("stageAirDrop.choujing") }}</text>
      <div class="jlirelue" >
        {{ t("stageAirDrop.rwushijiandaoqi") }}
      </div>
      <div class="djs">
        {{ t("stageAirDrop.kjdjs") }}
      </div>
      <img :src="proxy?.$ipfsUrl + 'fuli.png'" alt="Image" class="fuliimage" />
    </div>
    <div class="rg">
      <div>{{ t("stageAirDrop.zjdizhi") }}</div>
      <div class="scroll-container" ref="scrollContainer">
        <div class="scroll-list">
          <div v-for="item in items" :key="item">{{ item }}</div>
        </div>
      </div>
    </div>
  </div>
  <div class="explain bottomimg">
    <div class="content">
      <div>{{ t("stageAirDrop.jyihuoqu") }}</div>
      <div>{{ t("stageAirDrop.more") }}<text class="t2 dirfuli" >{{ t("stageAirDrop.ktoufuli") }}</text></div>
      <div class="us t2">
        {{ t("stageAirDrop.huoqufuli") }} <img :src="proxy?.$ipfsUrl + 'home/hong.png'" />
      </div>
    </div>
  </div>
  <Bottom />
</template>

<style scoped>
.dirfuli{
  font-size: 52px;
}
.djs{
  font-size: 18px; 
  margin-top: 40px;
}
.jlirelue{
  font-size: 18px;
  margin-top: 40px;
}
.lquguiz{
  font-size: 52px;
}
.metkinfuli{
  font-size: 18px; 
  width: 50%;
}
.us {
  font-size: 26px;
  margin-top: 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: flex-end;
}
.us img {
  width: 46px;
  height: 36px;
  margin-left: 24px;
  transition: transform 0.3s ease-in-out;
}
.scroll-container {
  height: 90%;
  overflow: hidden;
  position: relative;
  margin-top: 24px;
}

.scroll-list {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  animation: scroll 10s linear infinite;
  font-size: 17px;
}
.scroll-list div {
  margin-bottom: 24px;
  color: #46a362;
}
@keyframes scroll {
  0% {
    top: 0;
  }
  100% {
    top: -100%;
  }
}
.rg {
  border: 1px solid #323232;
  border-radius: 16px;
  width: 30%;
  position: relative;
  padding: 30px;
  height: 600px;
  font-size: 24px;
}
.fuliimage {
  width: 383px;
  height: 322px;
  position: absolute;
  right: 90px;
  bottom: 30px;
}
.raffle {
  width: 80%;
  margin: 0 auto;
  position: relative;
  margin-bottom: 80px;
  display: flex;
  justify-content: space-between;
}
.lf {
  background-color: rgb(24, 25, 32);
  border-radius: 16px;
  width: 60%;
  position: relative;
  padding: 30px;
  height: 600px;
}
.bottomimg {
  background: url("https://pub-7f3d82f53363484c8d4f6a346d92560a.r2.dev/img/boyyomk.png")
    no-repeat;
  background-size: 100%;
}
.explain {
  display: flex;
  align-items: end;
  justify-content: center;
  padding: 50px 0;
  width: 100%;
  height: 282px;
  background-color: rgb(24, 25, 32);
  flex-direction: column;
  margin-bottom: 60px;
}
.btn {
  border: none;
  width: 180px;
  height: 40px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  position: relative;
  left: 50%;
  margin: 30px 0 80px 0;
}
.btn-withdraw {
  background-color: #46a362;
  color: #fff;
  margin-left: 10px;
}
.content {
  font-size: 52px;
  margin-bottom: 20px;
  padding-right: 200px;
  text-align: right;
}
.t1 {


}
.t2 {
  font-size: 32px;
  color: #e62a2a;
}
.t3 {
  color: #e62a2a;
}
</style>
