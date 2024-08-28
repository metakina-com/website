<script setup lang="ts">
import Top from "../components/topMenum.vue";
import Bottom from "../components/bottomm.vue";
import { ref, getCurrentInstance } from "vue";
import router from "../router";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const animatedDiv: any = ref(null);
const animatedDiv2: any = ref(null);


const instance = getCurrentInstance();
const proxy = instance?.proxy as any; // 使用类型断言和可选链操作符




const getOneList = () => [
  {
    imgurl: proxy?.$ipfsUrl + "home/tseven.png",
    color: "#fff",
    arrows: proxy?.$ipfsUrl + "home/bai.png",
    t1: t("home.jihsu"),
    t2: t("home.hangyeshuipkftd"),
  },
  {
    imgurl: proxy?.$ipfsUrl + "home/tf.png",
    arrows: proxy?.$ipfsUrl + "home/hei.png",
    t1: t("home.remxm"),
    t2: t("home.shydhj"),
  },
  {
    imgurl: proxy?.$ipfsUrl + "home/ttive.png",
    arrows: proxy?.$ipfsUrl + "home/lan.png",
    t1: t("home.chuangx"),
    t2: t("home.ppylwl"),
  },
  {
    imgurl: proxy?.$ipfsUrl + "home/tone.png",
    color: "#fff",
    arrows: proxy?.$ipfsUrl + "home/bai.png",
    t1: t("home.glwk"),
    t2: t("home.hdgsy"),
  },
  {
    imgurl: proxy?.$ipfsUrl + "home/ttwo.png",
    arrows: proxy?.$ipfsUrl + "home/hui.png",
    t1: t("home.fuw"),
    t2: t("home.qqlxpz"),
  },
  {
    imgurl: proxy?.$ipfsUrl + "home/tshree.png",
    arrows: proxy?.$ipfsUrl + "home/shuang.png",
    t1: t("home.zhuanye"),
    t2: t("home.yxxd"),
  },
  {
    imgurl: proxy?.$ipfsUrl + "home/tsix.png",
    color: "#fff",
    arrows: proxy?.$ipfsUrl + "home/qhuang.png",
    t1: t("home.yyzhou"),
    t2: t("home.txyyzdkn"),
  },
]
const getTwoList = () => [
  {
    imgurl: proxy?.$ipfsUrl + "yhsctabone.png",
    background: "none",
    color: "#999",
    t1: t("home.yhsc"),
    t2: t("home.szcpdsxt"),
  },
  {
    imgurl: proxy?.$ipfsUrl + "home/mone.png",
    t1: t("home.jxqb"),
    t2: t("home.hfszsqy"),
  },
  {
    imgurl: proxy?.$ipfsUrl + "home/meight.png",
    background: "none",
    color: "#999",
    t1: t("home.gxlgl"),
    t2: t("home.haxiewm"),
  },
  {
    imgurl: proxy?.$ipfsUrl + "home/msthree.png",
    t1: t("home.sqyfsyy"),
    t2: t("home.hyhylb"),
  },
  {
    imgurl: proxy?.$ipfsUrl + "home/mtwo.png",
    t1: t("home.jnllq"),
    t2: t("home.sjksh"),
  },
  {
    imgurl: proxy?.$ipfsUrl + "home/msix.png",
    color: "#999",
    background: "none",
    t1: t("home.qklyx"),
    t2: t("home.fhgjgd"),
  },
  {
    imgurl: proxy?.$ipfsUrl + "home/mfour.png",
    t1: t("home.jxnssyq"),
    t2: t("home.wqstgbnfh"),
  },
  {
    imgurl: proxy?.$ipfsUrl + "home/mseven.png",
    color: "#999",
    background: "none",
    t1: t("home.yyzsc"),
    t2: t("home.mcqssw"),
  },
]

const getThreeList = () => [
  {
    t1: t("home.lgassf"),
    t2: t("home.xydgsxy"),
  },
  {
    t1: t("home.anquna"),
    t2: t("home.jnlyzjd"),
  },
  {
    t1: t("home.gbfcz"),
    t2: t("home.gbsjd"),
  },
  {
    t1: t("home.gkz"),
    t2: t("home.qyxqjyqk"),
  },
]
const oneList = ref(getOneList())
const twoList = ref(getTwoList())
const threeList = ref(getThreeList())
const switchLanguage = () => {
  oneList.value = getOneList();
  twoList.value = getTwoList();
  threeList.value = getThreeList();
}
const goUrl = () => {
  router.push("/metaverse");
};
</script>

<template>
  <Top activeIndex="/" @switchLanguage="switchLanguage" />
  <div class="search">
    <div class="video-background" id="nav">
      <video autoplay muted loop id="bg-video">
        <source :src="proxy?.$ipfsUrlMP4 + 'bgtop.mp4'" type="video/mp4" />
      </video>
    </div>
    <div class="searchText" id="nav">
      <div class="searchT1">{{ t("home.mkyyz") }}</div>
      <div class="searchT2">
        {{ t("home.djxsysh") }}
      </div>
    </div>
  </div>
  <div class="fengge"></div>
  <div class="saasSystem">
    <div class="sassbody">
      <div
        class="sassbodyImg"
        :src="v.imgurl"
        v-for="(v, _) in oneList"
        :style="{
          backgroundImage: 'url(' + v.imgurl + ')'
        }"
      >
        <div
          class="sassbodyt"
          :style="{
            color: v.color,
          }"
        >
          <div class="sassbodyt1">
            {{ v.t1 }}
          </div>
          <div class="sassbodyt2">
            {{ v.t2 }}
          </div>
        </div>
        <img :src="v.arrows" alt="" srcset="" />
      </div>
    </div>
  </div>
  <div class="title tkinjieshao" style="padding: 0;">
    <div class="titleword">{{ t("home.khgljs") }}</div>
    <div class="redline"></div>
  </div>
  <div class="videoMetaKina" id="nav">
    <video
      :poster="proxy?.$ipfsUrl + 'home/videofm.png'"
      controls
      id="bg-video2"
    >
      <source
        :src="proxy?.$ipfsUrlMP4 + 'videoMetaKina.mp4'"
        type="video/mp4"
      />
    </video>
  </div>
  <div class="title">
    <div class="titleword">{{ t("home.mkjsfwst") }}</div>
    <div class="redline"></div>
  </div>
  <div class="metaKina" ref="animatedDiv">
    <div
      class="metaKinabody "
      :style="{ background: v.background }"
      v-for="(v, _) in twoList"
    >
      <div class="metaKinabodytop">
        <img :src="v.imgurl" alt="" srcset="" />
        <div>{{ v.t1 }}</div>
      </div>
      <div :style="{ color: v.color }" class="metaKinabodybottom">
        {{ v.t2 }}
      </div>
    </div>
  </div>
  <div class="title">
    <div class="titleword">{{ t("home.khgljsys") }}</div>
    <div class="redline"></div>
  </div>
  <div class="kinachain" ref="animatedDiv2">
    <div class="kinachaiione">
      <div class="kinachaiionet">
        <div>{{ t("home.xyidia") }}</div>
        <div style="color: #e62a2a">{{ t("home.gxxy") }}</div>
      </div>
      <div class="kinachaiioneb">
        {{ t("home.xyybkfp") }}
      </div>
    </div>
    <div class="kinachainbody " v-for="(v, _) in threeList">
      <div class="kinachainbodyt1">{{ v.t1 }}</div>
      <div class="kinachainbodyt2">{{ v.t2 }}</div>
    </div>
  </div>
  <div class="bottom">
    <div class="bottomt">
      <div>
        {{ t("home.kaisiq")
        }}<text style="color: #e62a2a">{{ t("home.yyzkaiqi") }}</text>
      </div>
      <div>{{ t("home.tssjwexwsj") }}</div>
    </div>
    <div @click="goUrl" class="bottomb">
      {{ t("home.kaiqits") }}
      <img
        src="https://pub-7f3d82f53363484c8d4f6a346d92560a.r2.dev/img/home/hong.png"
      />
    </div>
  </div>
  <Bottom />
</template>

<style scoped>
.videoMetaKina {
  width: 80%;
  margin: 0 auto;
  position: relative;
}
#bg-video2 {
  width: 100%;
  height: 300px;
}
.bottom {
  width: 100%;
  height: 482px;
  background: url("https://pub-7f3d82f53363484c8d4f6a346d92560a.r2.dev/img/home/bottombg.png")
    no-repeat;
  background-size: 280%;
  background-position: 55% 50%;
  text-align: center;
  position: relative;
}
.bottomt {
  font-size: 32px;
  padding: 200px 0 0 15px;
}
.bottomb {
  padding: 15px 0 0 15px;
  font-size: 26px;
  color: #e62a2a;
  cursor: pointer;
}
.bottom img {
  width: 38px;
  height: 30px;
  position: relative;
  top: 7px;
}
.kinachain {
  padding: 0 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.kinachaiione {
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
}
@-webkit-keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
.kinachainbodyt1 {
  font-size: 30px;
  margin-bottom: 12px;
}
.kinachainbodyt2 {
  font-size: 26px;
}
.kinachainbody {
  /* width: 425px; */
  /* height: 268px; */
  display: flex;
  flex-direction: column;
  background: #181920;
  border-radius: 40px;
  padding: 32px;
  margin-bottom: 24px;
  -webkit-animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.kinachaiioneb {
  font-size: 25px;
}
.kinachaiionet {
  font-size: 38px;
  display: flex;
  margin-bottom: 27px;
}
.metaKina {
  padding: 0 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

@keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1000px);
    opacity: 0;
  }
  50% {
    -webkit-transform: translateX(-500px);
    transform: translateX(-500px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

.metaKinabody {
  width: 100%;
  background: #181920;
  border-radius: 8%;
  margin-bottom: 20px;
  padding-bottom: 20px;
}

.metaKinabodytop {
  display: flex;
  font-size: 28px;
  align-items: center;
  margin-top: 48px;
  margin-left: 20px;
}
.metaKinabodytop img {
  width: 35px;
  height: 35px;
  margin-right: 10px;
}
.tkinjieshao {
  margin-top: -200px;
}
.metaKinabodybottom {
  margin-top: 32px;
  margin-left: 20px;
  font-size: 24px;
}
.title {
  text-align: center;
  padding: 100px 0;
}
.redline {
  width: 193px;
  height: 10px;
  background: #e62a2a;
  margin: 0 auto;
  position: relative;
  top: -14px;
}
.titleword {
  font-size: 32px;
  position: relative;
  z-index: 999;
}
.sassbodyt1 {
  font-size: 24px;
  margin-bottom: 15px;
}
.sassbodyt2 {
  font-size: 18px;
}
.sassbodyt {
  color: black;
  padding-top: 24px;
  margin-left: 28px;
}
.sassbodyImg img {
  width: 27.6px;
  height: 21.6px;
  position: relative;
  transform: translateX(36px);
  margin-top: 20px;
  transition: transform 0.5s ease-in-out;
}
.sassbodyImg:hover img {
  transform: translateX(200%);
}
.sassbodyImg:hover {
  opacity: 0.9;
}
#bg-video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  background-size: cover;
  z-index: 1;
}
.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
}
.content {
  position: relative;
  z-index: 1;
  color: white;
  text-align: center;
  padding: 20px;
}

.sassbody {
  /* column-count: 3; */
}
.fengge {
  height: 1080px;
}
.sassbodyImg:nth-child(1) {
  height: 400px;
}
.sassbodyImg:nth-child(2) {
  height: 280px;
}
.sassbodyImg:nth-child(3) {
  height: 300px;
}
.sassbodyImg:nth-child(4) {
  height: 300px;
}
.sassbodyImg:nth-child(5) {
  height: 235px;
}
.sassbodyImg:nth-child(6) {
  height: 235px;
}
.sassbodyImg:nth-child(7) {
  height: 235px;
}
.sassbodyImg {
  width: 100%;
  break-inside: avoid; /* 避免内容分布在多列 */
  background-size: cover;
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: 100%;
}
.saasSystem {
  padding: 0 18%;
  position: relative;
  z-index: 1;
  top: -310px;
}

.search {
  width: 100%;
  height: 1080px;
  position: absolute;
  top: 0;
  z-index: 1;
}
.searchText {
  text-align: center;
  width: 80%;
  margin: 0 auto;
  margin-top: 40%;
}
.searchT1 {
  font-size: 40px;
  
}
.searchT2 {
  font-size: 26px;
  margin-top: 10px;
}
</style>
