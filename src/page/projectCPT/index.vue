<script setup lang="ts">
import Top from "../../components/topMenu.vue";
import Bottom from "../../components/bottom.vue";


import { Search } from "@element-plus/icons-vue";
import { ref, onMounted, getCurrentInstance } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const instance = getCurrentInstance();
const proxy = instance?.proxy as any; // 使用类型断言和可选链操作符

const getNavoneList = () => [
  {
    imgurl: proxy?.$ipfsUrl + "project/boxf.png",
    t1:t("projectCPT.szcpxt"),
    t2:t("projectCPT.szcpip"),
  },
  {
    imgurl: proxy?.$ipfsUrl + "project/boxs.png",
    t1:t("projectCPT.qklyys"),
    t2:t("projectCPT.mzkhgbf"),
  },
  {
    imgurl: proxy?.$ipfsUrl + "project/boxo.png",
    t1:t("projectCPT.tdzgyyz"),
    t2:t("projectCPT.tsyhty"),
  },
  {
    imgurl: proxy?.$ipfsUrl + "project/boxt.png",
    t1:t("projectCPT.hyjjfa"),
    t2:t("projectCPT.syyyh"),
  },
]
const getNavtwoList = () => [
  {
    imgurl: proxy?.$ipfsUrl + "project/psix.png",
    t1:t("projectCPT.dzkf"),
  },
  {
    imgurl: proxy?.$ipfsUrl + "project/pone.png",
    t1:t("projectCPT.dzhkf"),
  },
  {
    imgurl: proxy?.$ipfsUrl + "project/ps.png",
    t1:t("projectCPT.defikaifa"),
  },
  {
    imgurl: proxy?.$ipfsUrl + "project/pf.png",
    t1:t("projectCPT.nftmkkf"),
  },
  {
    imgurl: proxy?.$ipfsUrl + "project/pfive.png",
    t1:t("projectCPT.bpsmtxf"),
  },
  {
    imgurl: proxy?.$ipfsUrl + "project/pt.png",
    t1:t("projectCPT.qkldsdzkf"),
  },
  {
    imgurl: proxy?.$ipfsUrl + "project/pseven.png",
    t1:t("projectCPT.glkf"),
  },
  {
    imgurl: proxy?.$ipfsUrl + "project/peight.png",
    t1:t("projectCPT.lykf"),
  },
]
const getNavthreeList = () => [
  {
    imgurl: proxy?.$ipfsUrl + "project/aleight.png",
    t1:t("projectCPT.catanlizs"),
  },
  {
    imgurl: proxy?.$ipfsUrl + "project/alfive.png",
    t1:t("projectCPT.xjzbalzs"),
  },
  {
    imgurl: proxy?.$ipfsUrl + "project/alseven.png",
    t1:t("projectCPT.catanlizs"),
  },
  {
    imgurl: proxy?.$ipfsUrl + "project/alf.png",
    t1:t("projectCPT.kjwkalzs"),
  },
  {
    imgurl: proxy?.$ipfsUrl + "project/alone.png",
    t1:t("projectCPT.sbzyalzs"),
  },
  {
    imgurl: proxy?.$ipfsUrl + "project/alsix.png",
    t1:t("projectCPT.slwkalzs"),
  },
  {
    imgurl: proxy?.$ipfsUrl + "project/altwo.png",
    t1:t("projectCPT.yskanlz"),
  },
  {
    imgurl: proxy?.$ipfsUrl + "project/althree.png",
    t1:t("projectCPT.yggsalsz"),
  },
]
const navoneList = ref(getNavoneList())
const navtwoList = ref(getNavtwoList())
const navthreeList = ref(getNavthreeList())
const switchLanguage = () => {
  navoneList.value = getNavoneList();
  navtwoList.value = getNavtwoList();
  navthreeList.value = getNavthreeList();
}
const animationState = ref("running");
const animationState2 = ref("running");
const input = ref("");
const search = (e: any) => {
  if (e) {
    window.open(`https://scan.kinachain.com/address/${e}`);
  }
};
const pauseScroll = (v: number) => {
  v === 1
    ? (animationState.value = "paused")
    : (animationState2.value = "paused");
};
const resumeScroll = (v: number) => {
  v === 1
    ? (animationState.value = "running")
    : (animationState2.value = "running");
};
const tabScroll = (v: any) => {
  const element = document.getElementById(v);

  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

onMounted(() => {
  tabScroll(useRoute().query.nav);
});
</script>

<template>
  <Top activeIndex="/projectCPT" @tabScroll="tabScroll" @switchLanguage="switchLanguage"/>
  <div class="search">
    <div class="video-background" id="nav">
      <video autoplay muted loop id="bg-video">
        <source :src="proxy?.$ipfsUrlMP4 + 'topbg.mp4' " type="video/mp4" />
      </video>
    </div>
    <div class="searchText" >
      <div class="searchT1">
        <text style="color: #e62a2a">{{t("projectCPT.jnl")}}</text>{{t("projectCPT.llq")}}
      </div>
      <div class="searchT2">
        {{t("projectCPT.cxqbdz")}}
      </div>
      <el-input
        class="searchInput"
        v-model="input"
        :placeholder="t('projectCPT.tddz')"
        @change="search"
        :prefix-icon="Search"
      />
    </div>
  </div>
  <div style="height: 994px"></div>
  <div class="title"  id="nav2">
    <div class="titleword"></div>
  </div>
  <div class="saasSystem">
    <img
      :src= "proxy?.$ipfsUrl + 'project/szcpzc.png'"
      alt="saas"
      class="saasimg"
      srcset=""
    />
    <div class="saasright" >
      <div>{{t("projectCPT.szcoyszzc")}}</div>
      <div>{{t("projectCPT.yyxx")}}<text style="color: #e62a2a">{{t("projectCPT.saasxxt")}}</text></div>
      <div style="font-size: 26px; width: 52%; text-align: right">
        {{t("projectCPT.ksadpcs")}}
      </div>
      <el-button type="danger" class="btn">{{t("projectCPT.kssy")}}</el-button>
    </div>
  </div>
  <div class="cpjs">
    <div class="cpjsbg"></div>
    <div class="hbg">
      <text style="margin-left: 100px"
        > {{t("projectCPT.sdyyqkl")}}</text
      >
    </div>
  </div>
  <div class="title">
    <div class="titleword">{{t("projectCPT.nftxtst")}}</div>
    <div class="redline"></div>
  </div>
  <div class="navone">
    <div class="navonebody" v-for="(v, _) in navoneList">
      <div class="box">
        <img class="boximg" :src="v.imgurl" alt="" srcset="" />
      </div>
      <div>
        <div style="font-size: 42px; text-align: right; margin-bottom: 16px">
          {{ v.t1 }}
        </div>
        <div style="font-size: 30px; color: #999999; text-align: right">
          {{ v.t2 }}
        </div>
      </div>
    </div>
  </div>
  <div class="title" id="nav3">
    <div class="titleword" >{{t("projectCPT.wmdxmu")}}</div>
    <div class="redline"></div>
  </div>
  <div class="navtwo">
    <div class="navtwobody" v-for="(v, _) in navtwoList">
      <img class="navtwoimg" :src="v.imgurl" alt="" srcset="" />
      <div class="navtwot1" style="">{{ v.t1 }}</div>
    </div>
  </div>
  <div class="title">
    <div class="titleword">{{t("projectCPT.alzsss")}}</div>
    <div class="redline"></div>
  </div>
  <div
    class="navthree scroll-container"
    @mouseenter="pauseScroll(1)"
    @mouseleave="resumeScroll(1)"
  >
    <div class="scroll-content" :style="{ animationPlayState: animationState }">
      <div class="navthreebody" v-for="(v, _) in navthreeList">
        <img class="navthreeimg" :src="v.imgurl" alt="" srcset="" />
        <div class="navthreet1" style="">{{ v.t1 }}</div>
      </div>
    </div>
  </div>
  <div
    style="margin-bottom: 100px"
    class="navthree scroll-container"
    @mouseenter="pauseScroll(2)"
    @mouseleave="resumeScroll(2)"
  >
    <div
      class="scroll-contenttwo"
      :style="{ animationPlayState: animationState2 }"
    >
      <div class="navthreebody" v-for="(v, _) in navthreeList">
        <img class="navthreeimg" :src="v.imgurl" alt="" srcset="" />
        <div class="navthreet1" style="">{{ v.t1 }}</div>
      </div>
    </div>
  </div>
  <Bottom />
</template>

<style scoped>
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

.scroll-container {
  display: flex;
  overflow: hidden;
}

.scroll-content {
  display: flex;
  animation: scroll 15s linear infinite;
}
.scroll-contenttwo {
  display: flex;
  animation: scrolltwo 15s linear infinite;
}

@keyframes scrolltwo {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
.navthreeimg {
  width: 480px;
  height: 270px;
}
.navthreet1 {
  height: 70px;
  background: #f9f9f9;
  border-radius: 0px 0px 40px 40px;
  color: #333333;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -6px;
  padding: 5px 10px;
}
.navthreebody {
  width: 480px;
  height: 352;
  border-radius: 40px;
  margin-right: 15px;
  margin-bottom: 15px;
  overflow: hidden;
  cursor: pointer;
}
.navthree {
}
.navtwo {
  display: flex;
  width: 80%;
  margin: 0 auto;
  flex-wrap: wrap;
  margin-bottom: 100px;
  justify-content: center;
}
.navtwot1 {
  height: 82px;
  background: #f9f9f9;
  border-radius: 0px 0px 40px 40px;
  color: #333333;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -6px;
  padding: 0 10px;
}
.navtwobody {
  width: 355px;
  height: 442px;
  border-radius: 40px;
  margin-right: 20px;
  margin-bottom: 20px;
  overflow: hidden;
  cursor: pointer;
}
.navtwoimg {
  width: 355px;
  height: 360px;
  transition: transform 0.3s ease; /* 设置过渡效果 */
}
.navtwobody:hover .navtwoimg {
  transform: scale(1.2); /* 放大图片 */
}
.boximg {
  width: 70px;
  height: 70px;
}
.box {
  width: 220px;
  height: 80px;
  background: #2b2d3a;
  border-radius: 40px;
  padding-left: 8px;
  display: flex;
  align-items: center;
}
.navone {
  display: flex;
  width: 80%;
  margin: 0 auto;
  flex-wrap: wrap;
  margin-bottom: 100px;
  justify-content: center;
}
.navonebody {
  width: 610px;
  height: 350px;
  padding: 36px 48px 64px 43px;
  background: #181920;
  border-radius: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  margin-right: 30px;
  margin-bottom: 30px;
  cursor: pointer;
  transition: transform 0.5s;
}
.navonebody:hover {
  background-color: #fff;
  color: black;
  transform: rotate(20deg);
}
.navonebody:hover .box {
  background-color: black;
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
  font-size: 40px;
  position: relative;
  z-index: 999;
}
.cpjs {
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  width: 85%;
  position: relative;
  left: 15%;
  margin-bottom: 66px;
}
.cpjsbg {
  border-radius: 0px 0px 0px 20px;
  width: 99%;
  top: 61px;
  right: 0.3%;
  height: 217px;
  border: 3px solid #2b2d3a;
  position: absolute;
}
.hbg {
  background: #2b2d3a;
  border-radius: 20px 0px 0px 20px;
  height: 269px;
  font-size: 42px;
  line-height: 269px;
  width: 99%;
}
.btn {
  border: none;
  width: 180px;
  height: 60px;
  border-radius: 5px;
  font-size: 24px;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  background-color: #e62a2a !important;
  margin: 64px 0;
}

.saasSystem {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  padding-top: 166px;
  margin-bottom: 120px;
}
.saasright {
  font-size: 80px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}
.saasimg {
  width: 687px;
  height: 434px;
}
.search {
  width: 100%;
  height: 994px;
  z-index: 1;
  position: absolute;
  top: 0;
}
.searchText {
  width: 80%;
  margin: 0 auto;
  margin-top: 14%;
}
.searchT1 {
  font-size: 80px;
}
.searchT2 {
  font-size: 26px;
  width: 61%;
}
.searchInput {
  height: 54px;
  width: 1000px;
  font-size: 26px;
  margin-top: 100px;
}
</style>
