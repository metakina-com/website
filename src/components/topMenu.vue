<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import router from "../router";
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
  }else if (keyPath[0] == 4) {
    window.open(key);
  } else {
    router.push(key);
  } 
  console.log(key, keyPath[0]);
};
</script>

<template>
  <nav class="navbar">
    <div class="logo">
      <img src="../assets/images/logo.png" alt="Logo" />
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
        <el-menu-item index="https://kinachain-wgz98ps05b-8aa191d636c74035.testnets.rollbridge.app/">跨链工具</el-menu-item>
        <el-menu-item index="https://kinachain-wgz98ps05b-8aa191d636c74035.testnets.rollbridge.app/">KinaSWAP</el-menu-item>
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
        <el-menu-item index="/">联系我们</el-menu-item>
        <el-menu-item index="/">合作伙伴</el-menu-item>
      </el-sub-menu>
    </el-menu>
    <div class="social-icons">
      <a href="#"><img src="../assets/images/telegram.png" alt="Twitter" /></a>
      <a href="#"><img src="../assets/images/discord.png" alt="Discord" /></a>
      <a href="#"><img src="../assets/images/telegram.png" alt="Telegram" /></a>
      <a href="#"><img src="../assets/images/info.png" alt="Info" /></a>
    </div>
    <button class="wallet-button">{{ $t("top.ljieqianbao") }}</button>
  </nav>
</template>

<style scoped>
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
