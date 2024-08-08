<script setup lang="ts">
import Top from "../../components/topMenum.vue";
import Bottom from "../../components/bottomm.vue";

import { ElMessage } from "element-plus";
import { ref, getCurrentInstance, onMounted } from "vue";
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const instance = getCurrentInstance();
const proxy = instance?.proxy as any; // 使用类型断言和可选链操作符
const input = ref("");
const search = (e: any) => {
  if (e) {
  }
};
const getoneList = () => [
  {
    img: proxy?.$ipfsUrl + "home/lbthree.png",
    title: t("metaverse.yuanyuzhoushe"),
    title2: t("metaverse.tgvrdzwwkj"),
  },
  {
    img: proxy?.$ipfsUrl + "home/lbeight.png",
    title: t("metaverse.yyzzhant"),
    title2: t("metaverse.liyxujinxian"),
  },
  {
    img: proxy?.$ipfsUrl + "home/lbfour.png",
    title: t("metaverse.yunyuzhouyouxi"),
    title2: t("metaverse.jiehexunisixnah"),
  },
  {
    img: proxy?.$ipfsUrl + "home/lbsix.png",
    title: t("metaverse.yyzszls"),
    title2: t("metaverse.wulishiyi"),
  },
  {
    img: proxy?.$ipfsUrl + "home/lbone.png",
    title: t("metaverse.yunyuzhoushuziren"),
    title2: t("metaverse.jisuanqituxjishu"),
  },
  {
    img: proxy?.$ipfsUrl + "home/lbseven.png",
    title: t("metaverse.yunyuzshuzucp"),
    title2: t("metaverse.sjiyuqukljishu"),
  },
  {
    img: proxy?.$ipfsUrl + "home/lbtwo.png",
    title: t("metaverse.yunyuzhou1huiyi"),
    title2: t("metaverse.zaifashengyige"),
  },
  {
    img: proxy?.$ipfsUrl + "home/lbfive.png",
    title: t("metaverse.yunyuhoujichujians"),
    title2: t("metaverse.shejiyixiek"),
  },
  {
    img: proxy?.$ipfsUrl + "home/lbnight.png",
    title: t("metaverse.yuanyuzhoulux"),
    title2: t("metaverse.wufaqlxcdqk"),
  },
]
const gettwoList = () => [
  {
    imgurl: proxy?.$ipfsUrl + "home/byyhree.png",
    url: "https://x.com/MetaverseKIA",
  },
  {
    imgurl: proxy?.$ipfsUrl + "home/btfour.png",
    url: "https://discord.gg/HQxkyZM6kw",
  },
  {
    imgurl: proxy?.$ipfsUrl + "home/btone.png",
    url: "https://t.me/MetaverseKIApublic",
  },
  {
    imgurl: proxy?.$ipfsUrl + "home/btfive.png",
    url: "https://www.youtube.com/@MetaverseKIA",
  },
  {
    imgurl: proxy?.$ipfsUrl + "home/bttwo.png",
    url: "",
  },
]

const carouselData: any = ref([]);
const oneList = ref(getoneList())
const twoList = ref(gettwoList())
const switchLanguage = () => {
  oneList.value = getoneList();
  twoList.value = gettwoList();
  byEvents();
}
onMounted(() => {
  byEvents();
});

const byEvents = () => {
  let newDataList = [];
  let current = 0;
  for (let i = 0; i < oneList.value.length; i++) {
    const item = oneList.value[i];
    if (i % 3 !== 0 || i === 0) {
      if (!newDataList[current]) {
        newDataList[current] = [];
      }
      newDataList[current].push(item);
    } else {
      current++;
      newDataList.push([item]);
    }
  }
  carouselData.value = newDataList;
}
const gourl = async (url: string) => {
  if (url) {
    window.open(url);
  } else {
    await navigator.clipboard.writeText("MetaverseKIA@gmail.com");
    ElMessage({
      message: t("home.youxiangfuzhicg"),
      type: "success",
    });
  }
};
</script>

<template>
  <Top activeIndex="/" @switchLanguage="switchLanguage"/>
  <div class="search">
    <div class="video-background" id="nav">
      <video autoplay muted loop id="bg-video">
        <source :src="proxy?.$ipfsUrl + 'home/matetop.mp4'" type="video/mp4" />
      </video>
    </div>
    <div class="searchText" id="nav">
      <div class="searchT1">{{t("home.mkyyz")}}</div>
      <div class="searchT2">
        {{t("metaverse.qukljishuyousj")}}
      </div>
      <div class="searchT2"> {{t("metaverse.jjkfjqqd")}}</div>
    </div>
  </div>
  <div class="zhanweifu"></div>

  <div class="kinachain">
    <div class="kinachaiione">
      <div class="kinachaiionet">
        <div>{{t("metaverse.smshi")}}</div>
        <div style="color: #e62a2a">“{{t("metaverse.matayuanyuzhou")}}”</div>
        ？
      </div>
      <div class="kinachaiioneb">
        {{t("metaverse.dajianxianshi")}}
      </div>
    </div>
  </div>
  <div class="title">
    <div class="titleword">{{t("metaverse.yyzhoushengt")}}</div>
    <div class="redline"></div>
  </div>
  <div class="carouselBox">
    <el-carousel class="carousel">
      <el-carousel-item
        class="el-car-item"
        v-for="item in carouselData"
        :key="item[0].img"
      >
        <div v-for="imgItem in item" :key="imgItem.img" class="divSrc">
          <img class="img" :src="imgItem.img" />
          <div class="title661">{{ imgItem.title }}</div>
          <div class="title662">
            {{ imgItem.title2 }}
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="title ywombcll">
    <div class="titleword">{{t("metaverse.yuwombaochilx")}}</div>
    <div class="redline"></div>
  </div>
  <div class="metaKina">
    <div class="fsndyj">{{t("metaverse.jiangzuixwen")}}</div>
    <div class="metaKinabody">
      <el-input
        class="searchInput"
        v-model="input"
        :placeholder="t('metaverse.dzyoujiandihzi')"
        @change="search"
      />
      <el-button type="danger" class="btn">{{t("metaverse.dingyue")}}</el-button>
    </div>
    <div class="tbyh">{{t("metaverse.tijiaoxxi")}}</div>
    <div class="metaKinaicon">
      <img
        :src="v.imgurl"
        alt=""
        srcset=""
        v-for="(v, _) in twoList"
        @click="gourl(v.url)"
      />
    </div>
  </div>
  <Bottom />
</template>

<style scoped lang="scss">
.tbyh {
  font-size: 24px;
  color: #f9f9f9;
  position: relative;
  // left: -210px;
}
.fsndyj {
  font-size: 26px;
  color: #f9f9f9;
}
.ywombcll {
  padding-bottom: 40px;
}
.zhanweifu {
  height: 1080px;
}
.lbbg {
  /* width: 80%; */
  margin: 0 auto;
}

.carouselBox {
  margin: 0 auto;
  // width: 90%;
  .el-carousel__item {
    left: 130px !important;
  }

  .carousel {
    width: 100%;
    height: 520px;
    .el-car-item {
      width: 100%;
      height: 420px;
      width: 89%;
      display: flex;
      justify-content: center;
      .divSrc {
        width: 520px;
        height: 520px;
        margin-right: 46px;
        .img {
          width: 520px;
          height: 242px;
        }
        .title661 {
          color: #fff;
          font-size: 36px;
        }
        .title662 {
          font-size: 28px;
          color: #fff;
        }
      }
    }
  }
  .el-car-item {
    width: 100%;
    display: flex;

    .img {
      width: 284px;
      height: 184px;
      margin-right: 20px;
      cursor: pointer;
    }
  }
}
.metaKinaicon {
  margin: 80px 0 200px 0;
}
.metaKinaicon img {
  width: 40px;
  height: 40px;
  margin-right: 16px;
  cursor: pointer;
}
.btn {
  border: none;
  width: 133px;
  height: 56px;
  border-radius: 5px;
  font-size: 24px;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  background-color: #e62a2a !important;
  margin-left: 20px;
}
.bottom {
  width: 100%;
  height: 382px;
  background: url("https://plum-secure-meadowlark-923.mypinata.cloud/ipfs/QmVhCqjSFnw5Bvcjzmu2VCwnTMxU3fatZqeiHE2JZFaH5B/home/bottombg.png")
    no-repeat;
  background-size: 100%;
  text-align: center;
  margin: 100px 0;
}
.bottomt {
  font-size: 52px;
  position: relative;
  left: 60px;
  top: 106px;
}
.bottomb {
  position: relative;
  font-size: 32px;
  color: #e62a2a;
  left: 60px;
  top: 130px;
  cursor: pointer;
}
.bottom img {
  width: 46px;
  height: 36px;
  position: relative;
  top: 7px;
}
.kinachain {
  padding: 180px 10% 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.kinachaiione {
  display: flex;
  flex-direction: column;
  width: 1200px;
  height: 268px;
  margin-bottom: 24px;
}
.kinachainbody {
  width: 425px;
  height: 268px;
  display: flex;
  flex-direction: column;
  background: #181920;
  border-radius: 40px;
  padding: 32px;
  margin-bottom: 24px;
}
.kinachaiioneb {
  font-size: 28px;
}
.kinachaiionet {
  font-size: 46px;
  display: flex;
  margin-bottom: 27px;
}
.metaKina {
  padding: 0 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
}
.metaKinabody {
  display: flex;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 10px;
}
.searchInput {
  width: 847px;
  height: 56px;
  font-size: 26px;
}
.metaKinabodytop {
  display: flex;
  font-size: 30px;
  align-items: center;
  margin-top: 48px;
  margin-left: 20px;
}
.metaKinabodytop img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
.metaKinabodybottom {
  margin-top: 32px;
  margin-left: 20px;
  font-size: 28px;
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
.sassbodyt1 {
  font-size: 28px;
  margin-bottom: 20px;
}
.sassbodyt2 {
  font-size: 36px;
}
.sassbodyt {
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
}

.sassbodyImg {
  width: 439px;
  break-inside: avoid; /* 避免内容分布在多列 */
  margin-bottom: 40px; /* 项目间的底部外边距 */
  background-size: cover;
  cursor: pointer;
}
.saasSystem {
  padding: 0 10%;
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
  width: 40%;
  margin: 0 auto;
  margin-top: 15%;
}
.searchT1 {
  font-size: 80px;
}
.searchT2 {
  font-size: 26px;
  margin-bottom: 15px;
}
</style>
