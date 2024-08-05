<script setup lang="ts">
import Top from "../components/topMenu.vue";
import Bottom from "../components/bottom.vue";
import { ref, onMounted, onUnmounted, getCurrentInstance  } from "vue";
import router from "../router";
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const animatedDiv:any = ref(null);
const animatedDiv2:any = ref(null);

const handleScroll = () => {
  if (animatedDiv.value) {
    const rect = animatedDiv.value.getBoundingClientRect();
    const rect2 = animatedDiv2.value.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      animatedDiv.value.classList.add("animate");
    } else {
      animatedDiv.value.classList.remove("animate");
    }
    if (rect2.top < window.innerHeight && rect2.bottom > 0) {
      animatedDiv2.value.classList.add("animate2");
    } else {
      animatedDiv2.value.classList.remove("animate2");
    }
  }
};
const instance = getCurrentInstance();
const proxy = instance?.proxy as any; // 使用类型断言和可选链操作符

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
const oneList = ref([
  {
    imgurl: proxy?.$ipfsUrl + "home/tseven.png",
    height: "584px",
    color: "#fff",
    arrows: proxy?.$ipfsUrl + "home/bai.png",
    t1:t("home.jihsu") ,
    t2:t("home.hangyeshuipkftd"),
  },
  {
    imgurl: proxy?.$ipfsUrl + "home/tf.png",
    height: "398px",
    arrows: proxy?.$ipfsUrl + "home/hei.png",
    t1: "热门项目",
    t2: "探索最受欢迎的项目合集",
  },
  {
    imgurl: proxy?.$ipfsUrl + "home/ttive.png",
    height: "422px",
    arrows: proxy?.$ipfsUrl + "home/lan.png",
    t1: "创新",
    t2: "品牌引领未来",
  },
  {
    imgurl: proxy?.$ipfsUrl + "home/tone.png",
    height: "422px",
    color: "#fff",
    arrows: proxy?.$ipfsUrl + "home/bai.png",
    t1: "公链挖矿",
    t2: "获得高收益",
  },
  {
    imgurl: proxy?.$ipfsUrl + "home/ttwo.png",
    height: "314px",
    arrows: proxy?.$ipfsUrl + "home/hui.png",
    t1: "服务",
    t2: "全球领先品质",
  },
  {
    imgurl: proxy?.$ipfsUrl + "home/tshree.png",
    height: "314px",
    arrows: proxy?.$ipfsUrl + "home/shuang.png",
    t1: "专业",
    t2: "10年+营销沉淀",
  },
  {
    imgurl: proxy?.$ipfsUrl + "home/tsix.png",
    height: "314px",
    color: "#fff",
    arrows: proxy?.$ipfsUrl + "home/qhuang.png",
    t1: "元宇宙",
    t2: "探索元宇宙的无限可能",
  },
]);
const twoList = ref([
  {
    imgurl: proxy?.$ipfsUrl + "home/mone.png",
    background: "none",
    color: "#999",
    t1: "元话数藏",
    t2: "数字藏品电商系统，商家快速搭建数字藏品平台的SaaS工具。",
  },
  {
    imgurl: proxy?.$ipfsUrl + "home/mone.png",
    t1: "基纳钱包",
    t2: "已进行合法设置，是企业与商家推广和留存用户的有效工具。",
  },
  {
    imgurl: proxy?.$ipfsUrl + "home/meight.png",
    background: "none",
    color: "#999",
    t1: "供应链管理",
    t2: "将哈希二维码存在防篡改分类账，实现快速、透明、高效的数据验证。",
  },
  {
    imgurl: proxy?.$ipfsUrl + "home/msthree.png",
    t1: "社群与粉丝运营",
    t2: "用于用户裂变、VIP福利、社群活跃 内容营销与UGC等。",
  },
  {
    imgurl: proxy?.$ipfsUrl + "home/mtwo.png",
    t1: "基纳浏览器",
    t2: "通过数据可视化，为用户提供360°全部交易行为解析。",
  },
  {
    imgurl: proxy?.$ipfsUrl + "home/msix.png",
    color: "#999",
    background: "none",
    t1: "区块链游戏 / 元宇宙",
    t2: "符合国家法律法规，十大基本玩法，几十种衍生玩法，与数字藏品结合产生更大效益。",
  },
  {
    imgurl: proxy?.$ipfsUrl + "home/mfour.png",
    t1: "基纳搜索引擎",
    t2: "为商家提供免费与付费宣传，助力客户商业化与品牌传播。",
  },
  {
    imgurl: proxy?.$ipfsUrl + "home/mseven.png",
    color: "#999",
    background: "none",
    t1: "赋能实体/元宇宙商城",
    t2: "买藏品送实物，买实物送藏品；实物包括商品、门票、会员卡等。",
  },
]);

const threeList = ref([
  {
    t1: "零gas费",
    t2: "新一代共识协议提升了交易速度和效率，可实现超低Gas费。现阶段，新用户GAS全免!",
  },
  {
    t1: "安全",
    t2: "基纳链验证节点全部来自国内由发起方和服务商共同组建，受监管部门监督。",
  },
  {
    t1: "高并发承载",
    t2: "通过分布式节点，轻松实现每秒数千笔交易处理。技术迭代升级后，每秒TPS可达20万+。",
  },
  {
    t1: "高扩展",
    t2: "根据企业或商家需求，基于区块链智能合约开发，助力企业Wbe3.0转型",
  },
]);
const goUrl = () => {
  router.push("/metaverse");
};

</script>

<template>
  <Top activeIndex="/" />
  <div class="search">
    <div class="video-background" id="nav">
      <video autoplay muted loop id="bg-video">
        <source :src="proxy?.$ipfsUrl + 'home/bgtop.mp4' " type="video/mp4" />
      </video>
    </div>
    <div class="searchText" id="nav">
      <div class="searchT1">MetaKina元宇宙</div>
      <div class="searchT2">
        搭建现实世界与虚拟世界的桥梁，提供一个即时想象和创造的沉浸式虚拟空间，创造任何人都能探索的去中心化社区世界。
      </div>
    </div>
  </div>
  <div style="height: 1080px"></div>
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
  <div class="title" style="margin-top: -200px">
    <div class="titleword">Kinachain公链介绍</div>
    <div class="redline"></div>
  </div>
  <div class="videoMetaKina" id="nav">
    <video :poster="proxy?.$ipfsUrl + 'home/videofm.png' " controls id="bg-video2">
      <source :src="proxy?.$ipfsUrl + 'home/videoMetaKina.mp4' " type="video/mp4" />
    </video>
  </div>
  <div class="title">
    <div class="titleword">MetaKina技术服务生态</div>
    <div class="redline"></div>
  </div>
  <div class="metaKina" ref="animatedDiv">
    <div
      class="metaKinabody animate"
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
    <div class="titleword">Kinachain公链技术优势</div>
    <div class="redline"></div>
  </div>
  <div class="kinachain" ref="animatedDiv2">
    <div class="kinachaiione">
      <div class="kinachaiionet">
        <div>新一代</div>
        <div style="color: #e62a2a">共识协议</div>
      </div>
      <div class="kinachaiioneb">
        该共识协议通过“异步”特性克服了恶意节点容错的挑战，即时序挑战。许多形式的拜占庭容错，假设在达成共识时存在消息延迟的最大值，但基纳链新一代共识协议消除了这种假设，允许网络的诚实节点保证公平、安全地就组交易的时间和顺序达成一致。
      </div>
    </div>
    <div class="kinachainbody animate2" v-for="(v, _) in threeList">
      <div style="font-size: 36px; margin-bottom: 16px">{{ v.t1 }}</div>
      <div style="font-size: 28px">{{ v.t2 }}</div>
    </div>
  </div>
  <div class="bottom">
    <div class="bottomt">
      <div>开启<text style="color: #e62a2a">元宇宙</text></div>
      <div>探索未知的虚拟世界</div>
    </div>
    <div @click="goUrl" class="bottomb">
      开启探索 <img src="https://plum-secure-meadowlark-923.mypinata.cloud/ipfs/QmVhCqjSFnw5Bvcjzmu2VCwnTMxU3fatZqeiHE2JZFaH5B/home/hong.png" />
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
  height: 855px;
}
.bottom {
  width: 100%;
  height: 382px;
  background: url("https://plum-secure-meadowlark-923.mypinata.cloud/ipfs/QmVhCqjSFnw5Bvcjzmu2VCwnTMxU3fatZqeiHE2JZFaH5B/home/bottombg.png") no-repeat;
  background-size: 100%;
  text-align: center;
  margin: 100px 0;
  position: relative;
}
.bottomt {
  font-size: 52px;
  padding: 106px 0 0 106px;
}
.bottomb {
  padding: 56px 0 0 106px;
  font-size: 32px;
  color: #e62a2a;
  cursor: pointer;
}
.bottom img {
  width: 46px;
  height: 36px;
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
  width: 976px;
  height: 268px;
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

.kinachainbody {
  width: 425px;
  height: 268px;
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
  width: 355px;
  height: 334px;
  background: #181920;
  border-radius: 8%;
  margin-bottom: 20px;
}
.animate {
  animation: slide-in-left 1.5s cubic-bezier(0.15, 0.46, 0.45, 0.94) both;
}
.animate2 {
  animation: slide-in-right 1.5s cubic-bezier(0.15, 0.46, 0.45, 0.94) both;
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
  background-repeat: no-repeat;
  background-size: 100%;
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
  margin-top: 12%;
}
.searchT1 {
  font-size: 80px;
}
.searchT2 {
  font-size: 26px;
}
</style>
