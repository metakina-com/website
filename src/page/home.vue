<script setup lang="ts">
import Top from "@/components/topMenu.vue";
import Bottom from "@/components/bottom.vue";
import tf from "@/assets/images/home/tf.png";
import tone from "@/assets/images/home/tone.png";
import tseven from "@/assets/images/home/tseven.png";
import tshree from "@/assets/images/home/tshree.png";
import tsix from "@/assets/images/home/tsix.png";
import ttive from "@/assets/images/home/ttive.png";
import ttwo from "@/assets/images/home/ttwo.png";

import bai from "@/assets/images/home/bai.png";
import hei from "@/assets/images/home/hei.png";
import lan from "@/assets/images/home/lan.png";
import hui from "@/assets/images/home/hui.png";
import shuang from "@/assets/images/home/shuang.png";
import qhuang from "@/assets/images/home/qhuang.png";

import pfive from "@/assets/images/project/pfive.png";
import pt from "@/assets/images/project/pt.png";
import pseven from "@/assets/images/project/pseven.png";
import peight from "@/assets/images/project/peight.png";

import aleight from "@/assets/images/project/aleight.png";
import alfive from "@/assets/images/project/alfive.png";
import alseven from "@/assets/images/project/alseven.png";
import alf from "@/assets/images/project/alf.png";
import alone from "@/assets/images/project/alone.png";
import alsix from "@/assets/images/project/alsix.png";
import altwo from "@/assets/images/project/altwo.png";
import althree from "@/assets/images/project/althree.png";
import topbg from "@/assets/images/home/bgtop.mp4";

import { Search } from "@element-plus/icons-vue";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const oneList = ref([
  {
    imgurl: tseven,
    height: "584px",
    color: "#fff",
    arrows: bai,
    t1: "技术",
    t2: "行业高水平开发团队",
  },
  {
    imgurl: tf,
    height: "398px",
    arrows: hei,
    t1: "热门项目",
    t2: "探索最受欢迎的项目合集",
  },
  {
    imgurl: ttive,
    height: "422px",
    arrows: lan,
    t1: "创新",
    t2: "品牌引领未来",
  },
  {
    imgurl: tone,
    height: "422px",
    color: "#fff",
    arrows: bai,
    t1: "公链挖矿",
    t2: "获得高收益",
  },
  {
    imgurl: ttwo,
    height: "314px",
    arrows: hui,
    t1: "服务",
    t2: "全球领先品质",
  },
  {
    imgurl: tshree,
    height: "314px",
    arrows: shuang,
    t1: "专业",
    t2: "10年+营销沉淀",
  },
  {
    imgurl: tsix,
    height: "314px",
    color: "#fff",
    arrows: qhuang,
    t1: "元宇宙",
    t2: "探索元宇宙的无限可能",
  },
]);
// const twoList = ref([
//   {
//     imgurl: psix,
//     t1: "APP定制开发",
//   },
//   {
//     imgurl: pone,
//     t1: "DAPP定制化开发",
//   },
//   {
//     imgurl: ps,
//     t1: "DEFI开发",
//   },
//   {
//     imgurl: pf,
//     t1: "SAAS系统NFT板块开发",
//   },
//   {
//     imgurl: pfive,
//     t1: "APP定制开发",
//   },
//   {
//     imgurl: pt,
//     t1: "DAPP定制化开发",
//   },
//   {
//     imgurl: pseven,
//     t1: "DEFI开发",
//   },
//   {
//     imgurl: peight,
//     t1: "SAAS系统NFT板块开发",
//   },
// ]);
// const navthreeList = ref([
//   {
//     imgurl: aleight,
//     t1: "Cat Man 案例展示",
//   },
//   {
//     imgurl: alfive,
//     t1: "星际争霸案例展示",
//   },
//   {
//     imgurl: alseven,
//     t1: "Cat Man 案例展示",
//   },
//   {
//     imgurl: alf,
//     t1: "矿机挖矿案例展示",
//   },
//   {
//     imgurl: alone,
//     t1: "双币质押案例展示",
//   },
//   {
//     imgurl: alsix,
//     t1: "算力挖矿案例展示",
//   },
//   {
//     imgurl: altwo,
//     t1: "元时空案例展示",
//   },
//   {
//     imgurl: althree,
//     t1: "异国怪兽案例展示",
//   },
// ]);
</script>

<template>
  <div class="search">
    <Top activeIndex="/" @tabScroll="tabScroll" />
    <div class="video-background" id="nav">
      <video autoplay muted loop id="bg-video">
        <source :src="topbg" type="video/mp4" />
      </video>
    </div>
    <div class="searchText" id="nav">
      <div class="searchT1">METAVERSE</div>
      <div class="searchT2">
        Postscript univerrse,metaphysical universe,metaverse,hypersensitive
        space,virtual space
      </div>
    </div>
  </div>
  <div class="saasSystem">
    <div class="sassbody">
      <div
        class="sassbodyImg"
        :src="v.imgurl"
        v-for="(v, _) in oneList"
        :style="{
          backgroundImage: 'url(' + v.imgurl + ')',
          height: v.height,
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
  <div class="title">
    <div class="titleword">MetaKina技术服务生态</div>
    <div class="redline"></div>
  </div>
  <!-- <div class="metaKina">
      <div class="metaKinabody" v-for="(v, _) in twoList"></div>
  </div> -->
  <Bottom />
</template>

<style scoped>
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
  font-size: 40px;
  position: relative;
  z-index: 999;
}
.sassbodyt1 {
  font-size: 28px;
  margin-bottom: 20px;
}
.sassbodyt2 {
  font-size: 36px;
}
.sassbodyt {
  color: black;
  padding-top: 32px;
  margin-left: 36px;
}
.sassbodyImg img {
  width: 46px;
  height: 36px;
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
  column-count: 3;
}

.sassbodyImg {
  width: 439px;
  break-inside: avoid; /* 避免内容分布在多列 */
  margin-bottom: 40px; /* 项目间的底部外边距 */
  background-size: cover;
  cursor: pointer;
}
.saasSystem {
  padding: 0 14%;
  position: relative;
  z-index: 1;
  top: -310px;
}

.search {
  width: 100%;
  height: 1080px;
  position: relative;
  z-index: 1;
}
.searchText {
  text-align: center;
  width: 40%;
  margin: 0 auto;
  margin-top: 1%;
}
.searchT1 {
  font-size: 80px;
}
.searchT2 {
  font-size: 26px;
}
</style>
