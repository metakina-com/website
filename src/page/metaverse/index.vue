<script setup lang="ts">
import Top from "../../components/topMenu.vue";
import Bottom from "../../components/bottom.vue";
import lbone from "../../assets/images/home/lbone.png";
import lbtwo from "../../assets/images/home/lbtwo.png";
import lbthree from "../../assets/images/home/lbthree.png";
import lbfour from "../../assets/images/home/lbfour.png";
import lbfive from "../../assets/images/home/lbfive.png";
import lbsix from "../../assets/images/home/lbsix.png";
import lbseven from "../../assets/images/home/lbseven.png";
import lbeight from "../../assets/images/home/lbeight.png";
import lbnight from "../../assets/images/home/lbnight.png";

import btone from "../../assets/images/home/btone.png";
import bttwo from "../../assets/images/home/bttwo.png";
import byyhree from "../../assets/images/home/byyhree.png";
import btfour from "../../assets/images/home/btfour.png";
import btfive from "../../assets/images/home/btfive.png";

import topbg from "../../assets/images/home/matetop.mp4";

import { ref, onMounted } from "vue";
const input = ref("");
const search = (e: any) => {
  if (e) {
  }
};
const oneList = ref([
  {
    img: lbthree,
    title: "元宇宙社交",
    title2: "通过VR、AR和3D技术，打造三维空间的互动社交体验。",
  },
  {
    img: lbeight,
    title: "元宇宙展厅",
    title2: "利用虚拟现实技术在元宇宙中构建的展览空间，为艺术家和创作者提供了一个展示作品的新渠道。",
  },
  {
    img: lbfour,
    title: "元宇宙游戏",
    title2: "结合了虚拟现实技术、区块链、以及在线多人互动，为用户提供一个沉浸式的虚拟世界。",
  },
  {
    img: lbsix,
    title: "元宇宙数字孪生",
    title2: "通过创建物理实体的数字副本来实现对现实世界的精确映射和实时监控。在智慧城市、自动驾驶等领域有着广泛的应用。",
  },
  {
    img: lbone,
    title: "元宇宙虚拟数字人",
    title2: "通过计算机图形学技术创造的与人类形象接近的数字化形象，并被赋予特定的人物身份设定。",
  },
  {
    img: lbseven,
    title: "元宇宙数字藏品",
    title2: "基于区块链技术的独特数字资产，每个藏品都拥有独一无二的身份标识，确保了其稀缺性和唯一性。",
  },
  {
    img: lbtwo,
    title: "元宇宙会议",
    title2: "发生在一个由技术构建的数字空间，参与者可以通过虚拟形象进入并进行互动。",
  },
  {
    img: lbfive,
    title: "元宇宙基础建设",
    title2: "涉及一系列核心技术，如人工智能、区块链、云计算、虚拟现实等，这些技术共同支撑元宇宙的运行和发展。",
  },
  {
    img: lbnight,
    title: "元宇宙虚拟旅行",
    title2: "在无法亲临现场的情况下，通过虚拟旅游体验不同地点的风光和文化。",
  },
]);
const twoList = ref([
  {
    imgurl: byyhree,
  },
  {
    imgurl: btfour,
  },
  {
    imgurl: btone,
  },
  {
    imgurl: btfive,
  },
  {
    imgurl: bttwo,
  },
]);

const carouselData: any = ref([]);

onMounted(() => {
  byEvents();
});

function byEvents() {

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
</script>

<template>
  <div class="search">
    <Top activeIndex="/" />
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
  <div class="kinachain">
    <div class="kinachaiione">
      <div class="kinachaiionet">
        <div>什么是</div>
        <div style="color: #e62a2a">“METAKINA 元宇宙”</div>
        ？
      </div>
      <div class="kinachaiioneb">
        人类濒临灭绝。时空之墙正在坍塌，不同的历史时代正在碰撞在一起，黑暗的力量正在穿过时间的裂。你将扮演一名被召唤到宇宙尽头的时间旅行者，参与历史上最伟人的冒险。
      </div>
    </div>
  </div>
  <div class="title">
    <div class="titleword">MetaKina元宇宙生态系统</div>
    <div class="redline"></div>
  </div>
  <div class="carouselBox">
    <el-carousel  class="carousel">
      <el-carousel-item
        class="el-car-item"
        v-for="item in carouselData"
        :key="item[0].img"
      >
        <div v-for="imgItem in item" :key="imgItem.img" class="divSrc">
          <img class="img" :src="imgItem.img" />
          <div class="title66" style="font-size: 36px;">{{ imgItem.title }}</div>
          <div class="title66" style="font-size: 28px;">{{ imgItem.title2 }}</div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="title" style="padding-bottom: 40px">
    <div class="titleword">与我们保持联系</div>
    <div class="redline"></div>
  </div>
  <div class="metaKina">
    <div style="font-size: 26px; color: #f9f9f9">
      将最新新闻、活动和故事直接发送到您的收件
    </div>
    <div class="metaKinabody">
      <el-input
        class="searchInput"
        v-model="input"
        placeholder="电子邮件地址"
        @change="search"
      />
      <el-button type="danger" class="btn">订阅</el-button>
    </div>
    <div
      style="font-size: 24px; color: #f9f9f9; position: relative; left: -210px"
    >
      提交信息即表示您同意接收新闻、调查和特别优惠。
    </div>
    <div class="metaKinaicon">
      <img :src="v.imgurl" alt="" srcset="" v-for="(v, _) in twoList" />
    </div>
  </div>
  <Bottom />
</template>

<style scoped lang="scss">
.lbbg {
  /* width: 80%; */
  margin: 0 auto;
}

.carouselBox {
  margin: 0 auto;
  width: 90%;
  .el-carousel__item{
    left: 130px !important;
  }

  .carousel {
    width: 100%;
    height: 520px;
    .el-car-item {
      width: 100%;
      height: 420px;
      display: flex;
      .divSrc {
        width: 520px;
        height: 520px;
        margin-right: 46px;
        .img {
          width: 520px;
          height: 242px;
        }
        .title66 {
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
  background: url("../../assets/images/home/bottombg.png") no-repeat;
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
  position: relative;
  z-index: 1;
}
.searchText {
  text-align: center;
  width: 40%;
  margin: 0 auto;
  margin-top: 20%;
}
.searchT1 {
  font-size: 80px;
}
.searchT2 {
  font-size: 26px;
}
</style>
