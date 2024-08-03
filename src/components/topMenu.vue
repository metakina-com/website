<script setup lang="ts">
import { defineProps, defineEmits, getCurrentInstance } from "vue";

const instance = getCurrentInstance();
const proxy = instance?.proxy as any; // 使用类型断言和可选链操作符
import router from "../router";
import { ElMessage } from "element-plus";
const emit = defineEmits(["tabScroll"]);
const props = defineProps({
  activeIndex: String,
});
const handleSelect = (key: string, keyPath: any[]) => {
  if (keyPath[0] == 2) {
    emit("tabScroll", key);
    router.push("projectCPT?nav=" + key);
  } else if (key === "webseit") {
    window.open("https://www.metaworldglobal.net/");
  } else if (key === "whiteParper") {
    window.open("https://metaversekia.gitbook.io/metaversekia/");
  } else if (keyPath[0] == 4) {
    window.open(key);
  } else {
    router.push(key);
  }
  console.log(key, keyPath[0]);
};
const copy = async () => {
  await navigator.clipboard.writeText("MetaverseKIA@gmail.com");
  ElMessage({
    message: "邮箱复制成功！！！",
    type: "success",
  });
};
const gourl = (url: string) => {
  window.open(url);
};
</script>

<template>
  <div class="sj">网站功能正在升级中。。。预计九月份升级完毕，敬请期待。</div>
  <nav class="navbar">
    <div class="logo">
      <img :src="proxy?.$ipfsUrl + 'logo.png'" alt="Logo" />
    </div>
    <el-menu
      popper-class="poppertop"
      :default-active="props.activeIndex"
      background-color="#0b1013"
      text-color="#fff"
      :border="false"
      active-text-color="red"
      class="el-menu"
      :ellipsis="false"
      @select="handleSelect"
      mode="horizontal"
    >
      <el-menu-item index="/">首页</el-menu-item>
      <el-sub-menu index="2">
        <template #title>项目合集</template>
        <el-menu-item index="nav">KIA区块浏览器</el-menu-item>
        <el-menu-item index="nav2">元话SAAS系统</el-menu-item>
        <el-menu-item index="nav3">项目合作</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>KIA挖矿</template>
        <el-menu-item index="/node">节点挖矿</el-menu-item>
        <el-menu-item index="/collaborativeMining">合作挖矿</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="4">
        <template #title>生态应用</template>
        <el-menu-item
          index="https://kinachain-wgz98ps05b-8aa191d636c74035.testnets.rollbridge.app/"
          >跨链工具</el-menu-item
        >
        <el-menu-item
          index="https://kinachain-wgz98ps05b-8aa191d636c74035.testnets.rollbridge.app/"
          >KinaSWAP</el-menu-item
        >
        <el-menu-item index="https://r200.kinachain.com/">MWC钱包</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="5">
        <template #title>限时空投</template>
        <el-menu-item index="/stage">阶段空投</el-menu-item>
        <el-menu-item index="/task">任务空投</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="6">
        <template #title>元宇宙</template>
        <el-menu-item index="/metaverse">宇宙生态布局</el-menu-item>
        <el-menu-item index="webseit">MWC商城</el-menu-item>
        <!-- <el-menu-item index="6-2">KIA元宇宙计划</el-menu-item> -->
        <!-- <el-menu-item index="6-3">元宇宙API接口</el-menu-item> -->
      </el-sub-menu>
      <el-sub-menu index="7">
        <template #title>更多</template>
        <el-menu-item index="whiteParper">白皮书</el-menu-item>
        <el-menu-item index="/contactUS">联系我们</el-menu-item>
        <!-- <el-menu-item index="/">合作伙伴</el-menu-item> -->
      </el-sub-menu>
    </el-menu>
    <div class="social-icons">
      <div @click="gourl('https://x.com/MetaverseKIA')" class="gourl">
        <img :src="proxy?.$ipfsUrl + 'home/byyhree.png'" />
      </div>
      <div @click="gourl('https://discord.gg/HQxkyZM6kw')" class="gourl">
        <img :src="proxy?.$ipfsUrl + '/discord.png'" />
      </div>
      <div @click="gourl('https://t.me/MetaverseKIApublic')" class="gourl">
        <img :src="proxy?.$ipfsUrl + '/telegram.png'" />
      </div>
      <div
        @click="gourl('https://www.youtube.com/@MetaverseKIA')"
        class="gourl"
      >
        <img :src="proxy?.$ipfsUrl + 'home/btfive.png'" />
      </div>
      <div @click="copy" class="gourl">
        <img :src="proxy?.$ipfsUrl + 'home/bttwo.png'" />
      </div>
    </div>
    <button class="wallet-button">{{ $t("top.ljieqianbao") }}</button>
    <div class="language">
        <img src="https://plum-secure-meadowlark-923.mypinata.cloud/ipfs/QmaUmVKZ3hV3vevTbWBrsk2V8GhUxmQizRJvncRYqEyXpP" />
        <div>简体中文</div>
      </div>
  </nav>
</template>

<style scoped lang="scss">
.sj{
  position: absolute;
    top: 0;
    width: 100%;
    height: 26px;
    background-color: #409eff;
    z-index: 99999;
    text-align: center;
    font-size: 15px;
    line-height: 26px;


}
.language{
  display: flex;
  align-items: center;
  cursor: pointer;
  img{
    width: 32px;
    height: 32px;
    margin-right: 10px;
  } 

  div{
    font-size: 20px;
  }
}
.gourl {
  cursor: pointer;
  padding: 0 5px;
}
.el-menu {
  background-color: rgba(0, 0, 0, 0) !important;
  color: #fff;
  border: none !important;
  width: 820px;
}
.el-sub-menu__title:hover {
  background-color: red !important;
}
.el-popper {
  border: none !important; /* 示例：更改 popper 边框颜色 */
}

.el-popper .el-menu-item:hover {
  background-color: #fff !important ;
  color: #000 !important;
  border: none;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10%;
  background-color: rgba(0, 0, 0, 0.5);
  position: sticky;
  top: 0;
  z-index: 999;
  /* width: 80%; */
  /* margin: 0 auto; */
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 40px;
  margin-right: 10px;
}

.nav-links {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  font-size: 20px;
}

.nav-links li {
  margin: 0 25px;
}

.nav-links a {
  text-decoration: none;
  color: #fff;
  font-size: 16px;
}

.social-icons {
  display: flex;
  align-items: center;
}

.social-icons a {
  margin: 0 5px;
}

.social-icons img {
  height: 30px;
}

.wallet-button {
  background-color: #f0f0f0;
  color: #000;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
}
</style>
