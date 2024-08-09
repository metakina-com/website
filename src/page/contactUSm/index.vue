<script setup lang="ts">
import Top from "../../components/topMenum.vue";
import Bottom from "../../components/bottomm.vue";
import { ElMessage } from "element-plus";

import { ref, getCurrentInstance } from "vue";
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const instance = getCurrentInstance();
const proxy = instance?.proxy as any; // 使用类型断言和可选链操作符
const input = ref("");
const search = (e: any) => {
  if (e) {
  }
};
const getOneList = () => [
  {
    img: proxy?.$ipfsUrl + "contactUS/lbone.png",
    title: t("contactUS.yyzgzs"),
    title2: t("contactUS.sjejiwebcl"),
  },
  {
    img: proxy?.$ipfsUrl + "contactUS/lbtwo.png",
    title: t("contactUS.ipppai"),
    title2: t("contactUS.xzhidaoruhe"),
  },
  {
    img: proxy?.$ipfsUrl + "contactUS/lbthree.png",
    title: t("contactUS.duligongzuo"),
    title2: t("contactUS.youxigzs"),
  },
]
const getTwoList = () => [
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
const getThreeList = () => [
  {
    imgurl: proxy?.$ipfsUrl + "contactUS/cooone.png",
    t1: t("contactUS.ficyjj"),
  },
  {
    imgurl: proxy?.$ipfsUrl + "contactUS/cootwo.png",
    t1: t("contactUS.yyueyumeiti"),
  },
  {
    imgurl: proxy?.$ipfsUrl + "contactUS/coothree.png",
    t1: t("contactUS.yishuyubowug"),
  },
  {
    imgurl: proxy?.$ipfsUrl + "contactUS/coofour.png",
    t1: t("contactUS.yiyugyundong"),
  },
  {
    imgurl: proxy?.$ipfsUrl + "contactUS/coonine.png",
    t1: t("contactUS.shisfushi"),
  },
  {
    imgurl: proxy?.$ipfsUrl + "contactUS/cooeight.png",
    t1: t("contactUS.saiche"),
  },
  {
    imgurl: proxy?.$ipfsUrl + "contactUS/cooseven.png",
    t1: t("contactUS.dianwan"),
  },
  {
    imgurl: proxy?.$ipfsUrl + "contactUS/coosix.png",
    t1: t("contactUS.ficyjj"),
  },
  {
    imgurl: proxy?.$ipfsUrl + "contactUS/coofive.png",
    t1: t("contactUS.shehuiyuyuehui"),
  },
  {
    imgurl: proxy?.$ipfsUrl + "contactUS/coox.png",
    t1: t("contactUS.zzhuanyehud"),
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
const gourl = async (url: string) => {
  if (url) {
    window.open(url);
  } else {
    await navigator.clipboard.writeText("MetaverseKIA@gmail.com");
    ElMessage({
      message: t("metaverse.youxiangfuzhicg"),
      type: "success",
    });
  }
};
</script>

<template>
  <Top activeIndex="/"  @switchLanguage="switchLanguage"/>
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
          {{ t("contactUS.hunyrhrjr") }}
        </div>
      </div>
    </div>
  </div>
  <div class="fengefu"></div>

  <div class="title">
    <div class="titleword">{{ t("contactUS.cweihehb") }}</div>
    <div class="redline"></div>
  </div>
  <div class="carouselBox">
    <div class="carousel">
      <div class="el-car-item" v-for="item in oneList">
        <div class="divSrc">
          <img class="img" :src="item.img" />
          <div class="title661">
            {{ item.title }}
          </div>
          <div class="title662">
            {{ item.title2 }}
          </div>
          <div class="us">
            {{ t("contactUS.jiarwom") }}
            <img
              src="https://plum-secure-meadowlark-923.mypinata.cloud/ipfs/QmVhCqjSFnw5Bvcjzmu2VCwnTMxU3fatZqeiHE2JZFaH5B/home/hong.png"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="title why">
    <div class="titleword">{{ t("contactUS.wsmywomh") }}</div>
    <div class="redline"></div>
  </div>
  <div class="metaKina cooperation">
    <div class="t2">
      {{ t("contactUS.cjshiytu") }}
    </div>
    <div class="icontextBody">
      <div class="icontext" v-for="v in threeList">
        <img :src="v.imgurl" alt="" srcset="" />
        <div>{{ v.t1 }}</div>
      </div>
    </div>
  </div>

  <div class="title why">
    <div class="titleword">{{ t("contactUS.ywmbcll") }}</div>
    <div class="redline"></div>
  </div>
  <div class="metaKina">
    <div class="metaKinatext">
      {{ t("contactUS.jzxxw") }}
    </div>
    <div class="metaKinabody">
      <el-input
        class="searchInput"
        v-model="input"
        placeholder="电子邮件地址"
        @change="search"
      />
      <el-button type="danger" class="btn">{{ t("metaverse.dingyue") }}</el-button>
    </div>
    <div class="tbyhui" >
      {{ t("contactUS.tjxxjibs") }}
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
.tbyhui {
  font-size: 20px;
  color: #f9f9f9;
  position: relative;
  // left: -210px;
}
.why {
  padding-bottom: 40px;
}
.fengefu {
  height: 300px;
}
.metaKinatext {
  font-size: 20px;
  color: #f9f9f9;
}
.lbbg {
  /* width: 80%; */
  margin: 0 auto;
}
.us {
  font-size: 24px;
  margin-top: 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.us img {
  width: 27.6px;
  height: 21.6px;
  margin-left: 10px;
  transition: transform 0.3s ease-in-out;
}
// .divSrc:hover .us img {
//   transform: translateX(25px);
// }
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
    margin: 0 auto;

    .el-car-item {
      width: 100%;
      height: 420px;
      display: flex;
      .divSrc {
        height: 520px;
        // margin-right: 46px;
        transition: transform 0.3s;
        .img {
          width: 100%;
          transition: transform 0.3s ease-in-out;
        }
        .title661 {
          font-size: 24px;
          margin: 10px 0;
          color: #fff;
        }
        .title662 {
          color: #fff;
          font-size: 20px;
        }
      }
      // .divSrc:hover .img {
      //   transform: scale(1.1);
      // }
    }
  }
  .el-car-item {
    width: 100%;
    display: flex;

    .img {
   
      // margin-right: 20px;
      cursor: pointer;
    }
  }
}
.metaKinaicon {
  margin: 50px 0 50px 0;
}
.metaKinaicon img {
  width: 40px;
  height: 40px;
  margin-right: 16px;
  cursor: pointer;
}
.btn {
  border: none;
  width: 80px;
  height: 45px;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  background-color: #e62a2a !important;
  margin-left: 10px;
}
.bottom {
  width: 100%;
  height: 382px;
  background: url("https://plum-secure-meadowlark-923.mypinata.cloud/ipfs/QmVhCqjSFnw5Bvcjzmu2VCwnTMxU3fatZqeiHE2JZFaH5B/bottombg.png")
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
  padding: 0 5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
}
.cooperation {
  .t2 {
    font-size: 22px;
    color: #f9f9f9;
    text-align: center;
    position: relative;
    top: -80px;
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
        width: 60px;
        height: 60px;
        transition: transform 0.3s ease-in-out;
      }
      div {
        font-size: 16px;
        transition: color 0.3s ease-in-out;
      }
    }
    // .icontext:hover img {
    //   transform: scale(1.3);
    // }

    // .icontext:hover div {
    //   color: #e62a2a; /* 你可以根据需要修改颜色 */
    // }
  }
}
.metaKinabody {
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
  width: 100%;
}
.searchInput {
  width: 100%;
  height: 45px;
  font-size: 20px;
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
  padding: 80px 0;
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
  background: url("https://plum-secure-meadowlark-923.mypinata.cloud/ipfs/QmVhCqjSFnw5Bvcjzmu2VCwnTMxU3fatZqeiHE2JZFaH5B/contactUS/topbg.png")
    no-repeat;
  background-size: 200%;
  position: absolute;
  top: 0;
  height: 400px;
  left: 0;
  width: 100%;
  z-index: -1;
  overflow: hidden;
  background-position: 50% 0 ;
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
  height: 400px;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 1;
}
.searchText {
  text-align: center;
  width: 90%;
  margin: 0 auto;
  margin-top: 22%;
}
.searchT1 {
  img {
    width:395px;
    height: 92px;
  }
}
.searchT2 {
  font-size: 20px;
}
</style>
