<script setup lang="ts">
import Top from "../../components/topMenu.vue";
import Bottom from "../../components/bottom.vue";
import { ElMessage } from "element-plus";

import { ref, getCurrentInstance } from "vue";

const instance = getCurrentInstance();
const proxy = instance?.proxy as any; // 使用类型断言和可选链操作符
const input = ref("");
const search = (e: any) => {
  if (e) {
  }
};
const oneList = ref([
  {
    img: proxy?.$ipfsUrl + "contactUS/lbone.png",
    title: "元宇宙工作室",
    title2:
      "你正帮助客户设计他们的 web3 策略并考虑与 The Sandbox 合作?我们也为您提供更多空间。",
  },
  {
    img: proxy?.$ipfsUrl + "contactUS/lbtwo.png",
    title: "IP 及品牌",
    title2:
      "想知道如何将你们的品牌带入 TheSandbox?我们将帮助你将品牌形象融入我们的生态系统.",
  },
  {
    img: proxy?.$ipfsUrl + "contactUS/lbthree.png",
    title: "独立工作室",
    title2:
      "你是一家游戏工作室，想要在我们的体素世界中开发自己的概念?立即联系我们，让我们帮助你创造元宇宙体验",
  },
]);
const twoList = ref([
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
]);
const threeList = ref([
  {
    imgurl: proxy?.$ipfsUrl + "contactUS/cooone.png",
    t1: "房地产与家具",
  },
  {
    imgurl: proxy?.$ipfsUrl + "contactUS/cootwo.png",
    t1: "音乐、演唱会与流媒体",
  },
  {
    imgurl: proxy?.$ipfsUrl + "contactUS/coothree.png",
    t1: "艺术与博物馆",
  },
  {
    imgurl: proxy?.$ipfsUrl + "contactUS/coofour.png",
    t1: "体育运动",
  },
  {
    imgurl: proxy?.$ipfsUrl + "contactUS/coonine.png",
    t1: "时尚服饰",
  },
  {
    imgurl: proxy?.$ipfsUrl + "contactUS/cooeight.png",
    t1: "赛车",
  },
  {
    imgurl: proxy?.$ipfsUrl + "contactUS/cooseven.png",
    t1: "电玩",
  },
  {
    imgurl: proxy?.$ipfsUrl + "contactUS/coosix.png",
    t1: "购物",
  },
  {
    imgurl: proxy?.$ipfsUrl + "contactUS/coofive.png",
    t1: "社交与约会",
  },
  {
    imgurl: proxy?.$ipfsUrl + "contactUS/coox.png",
    t1: "专业互动",
  },
]);
const gourl = async (url: string) => {
  if (url) {
    window.open(url);
  } else {
    await navigator.clipboard.writeText("MetaverseKIA@gmail.com");
    ElMessage({
      message: "邮箱复制成功！！！",
      type: "success",
    });
  }
};
</script>

<template>
  <Top activeIndex="/" />
  <div class="search">
    <div class="video-background" id="nav">
      <div class="searchText" id="nav">
        <div class="searchT1">
          <img
            :src="proxy?.$ipfsUrl + 'contactUS/toptext.png'"
            alt=""
            srcset=""
          />
        </div>
        <div class="searchT2">
          欢迎任何人加入 MetaKina元宇宙品牌、工作室、独立创作者，你们都是
          ，我们生悉系统重要的一部分。我们知道你们都有不同需求，我们希望能够
          帮助你们进入元宇宙。
        </div>
      </div>
    </div>
  </div>
  <div style="height: 800px"></div>

  <div class="title">
    <div class="titleword">成为合作伙伴</div>
    <div class="redline"></div>
  </div>
  <div class="carouselBox">
    <div class="carousel">
      <div class="el-car-item" v-for="item in oneList">
        <div class="divSrc">
          <img class="img" :src="item.img" />
          <div class="title66" style="font-size: 32px; margin: 10px 0">
            {{ item.title }}
          </div>
          <div class="title66" style="font-size: 26px">
            {{ item.title2 }}
          </div>
          <div class="us">
            加入我们
            <img src="https://plum-secure-meadowlark-923.mypinata.cloud/ipfs/QmVhCqjSFnw5Bvcjzmu2VCwnTMxU3fatZqeiHE2JZFaH5B/home/hong.png" alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="title" style="padding-bottom: 40px">
    <div class="titleword">为什么与我们合作？</div>
    <div class="redline"></div>
  </div>
  <div class="metaKina cooperation">
    <div class="t2">
      我们有现实世界体验的延申指的技术，将人们在现实世界中的体验扩展到数字或虚拟空间，从而增强或补充现实生活中的感受和活动。
    </div>
    <div class="icontextBody">
      <div class="icontext" v-for="v in threeList">
        <img :src="v.imgurl" alt="" srcset="" />
        <div>{{ v.t1 }}</div>
      </div>
    </div>
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
.lbbg {
  /* width: 80%; */
  margin: 0 auto;
}
.us {
  font-size: 26px;
  margin-top: 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.us img {
  width: 46px;
  height: 36px;
  margin-left: 24px;
  transition: transform 0.3s ease-in-out;
}
.divSrc:hover .us img {
  transform: translateX(25px);
}
.divSrc:hover .us {
  color: #e62a2a;
}
.carouselBox {
  margin: 0 auto;
  // width: 90%;
  .el-carousel__item {
    left: 130px !important;
  }

  .carousel {
    width: 80%;
    height: 520px;
    display: flex;
    margin: 0 auto;

    .el-car-item {
      width: 100%;
      height: 420px;
      display: flex;
      .divSrc {
        width: 450px;
        height: 520px;
        margin-right: 46px;
        transition: transform 0.3s;
        .img {
          width: 450px;
          height: 242px;
          transition: transform 0.3s ease-in-out;
        }
        .title66 {
          color: #fff;
        }
      }
      .divSrc:hover .img {
        transform: scale(1.1);
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
  background: url("https://plum-secure-meadowlark-923.mypinata.cloud/ipfs/QmVhCqjSFnw5Bvcjzmu2VCwnTMxU3fatZqeiHE2JZFaH5B/bottombg.png") no-repeat;
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

.kinachaiione {
  display: flex;
  flex-direction: column;
  width: 1200px;
  height: 268px;
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
.cooperation {
  .t2 {
    font-size: 26px;
    color: #f9f9f9;
    width: 60%;
    text-align: center;
    position: relative;
    top: -30px;
  }
  .icontextBody {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    width: 100%;
    cursor: pointer;
    .icontext {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-top: 20px;
      width: 20%;
      transition: transform 0.3s;
      img {
        width: 120px;
        height: 120px;
        transition: transform 0.3s ease-in-out;
      }
      div {
        font-size: 26px;
        transition: color 0.3s ease-in-out;
      }
    }
    .icontext:hover img {
      transform: scale(1.3);
    }

    .icontext:hover div {
      color: #e62a2a; /* 你可以根据需要修改颜色 */
    }
  }
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
  background: url("https://plum-secure-meadowlark-923.mypinata.cloud/ipfs/QmVhCqjSFnw5Bvcjzmu2VCwnTMxU3fatZqeiHE2JZFaH5B/contactUS/topbg.png") no-repeat;
  background-size: 100%;
  position: absolute;
  top: 0;
  height: 817px;
  left: 0;
  width: 100%;
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
  height: 900px;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 1;
}
.searchText {
  text-align: center;
  width: 55%;
  margin: 0 auto;
  margin-top: 13%;
}
.searchT1 {
  img {
    width: 658px;
    height: 154px;
  }
}
.searchT2 {
  font-size: 32px;
}
</style>
