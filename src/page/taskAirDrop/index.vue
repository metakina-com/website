<script setup lang="ts">
import Top from "../../components/topMenu.vue";
import Bottom from "../../components/bottom.vue";
import List from "./components/list.vue";

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
      <text class="t1">Metakina福利</text>
      <text class="t2" style="font-size: 52px">领取规则</text>
    </div>
    <div style="font-size: 18px; width: 50%">
      这里是Metkina福利领取规则详情说明这里是Metkina福利领取规则详情说明这里是Metkina福利领取规则详情说明这里是Metkina福利领取规则详情说明
    </div>
  </div>
  <List
    v-for="(v, i) in [
      { btnLName: '关注' },
      { btnLName: '点赞' },
      { btnLName: '转发' },
      { btnLName: '转发' },
    ]"
    :key="i"
    :btnLName="v.btnLName"
  />
  <el-button type="success" class="btn btn-withdraw">领取福利</el-button>
  <div class="raffle">
    <div class="lf">
      <text class="t2">幸运</text>
      <text class="t2" style="color: #fff">抽奖</text>
      <div style="font-size: 18px; width: 59%">
        任务时间到期，将随机抽取关注推特并领取福利的10位用户得到空投
      </div>
      <div style="font-size: 18px; margin-top: 40px">
        开奖倒计时：51天15小时23分55秒
      </div>
      <img :src="proxy?.$ipfsUrl + 'fuli.png'" alt="Image" class="fuliimage" />
    </div>
    <div class="rg">
      <div>上期中奖地址</div>
      <div class="scroll-container" ref="scrollContainer">
        <div class="scroll-list">
          <div v-for="item in items" :key="item">{{ item }}</div>
        </div>
      </div>
    </div>
  </div>
  <div class="explain bottomimg">
    <div class="content">
      <div>进入Kinaswap交易获取</div>
      <div>更多<text class="t2" style="font-size: 52px">空投福利</text></div>
      <div class="us t2">
        获取福利 <img :src="proxy?.$ipfsUrl + 'home/hong.png'" />
      </div>
    </div>
  </div>
  <Bottom />
</template>

<style scoped>
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
  background: url("https://plum-secure-meadowlark-923.mypinata.cloud/ipfs/QmVhCqjSFnw5Bvcjzmu2VCwnTMxU3fatZqeiHE2JZFaH5B/boyyomk.png")
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
</style>
