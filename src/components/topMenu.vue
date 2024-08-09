<script setup lang="ts">
import {onMounted, defineProps, defineEmits, getCurrentInstance, ref, onUnmounted} from "vue";
import { useI18n } from 'vue-i18n'
const instance = getCurrentInstance();
const proxy = instance?.proxy as any; // 使用类型断言和可选链操作符
import router from "../router";
import { ElMessage } from "element-plus";
const emit = defineEmits(["tabScroll","switchLanguage"]);
const props = defineProps({
  activeIndex: String,
});

const setRootFontSize = () => {
      const baseSize = 16; // 基础字体大小
      const scaleFactor = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
      document.documentElement.style.fontSize = `${baseSize * scaleFactor}px`;
    };
    onMounted(() => {
      window.addEventListener('resize', setRootFontSize);
      setRootFontSize();
    });
const handleSelect = (key: string, keyPath: any[]) => {
  if (keyPath[0] == 2) {
    setTimeout(() => {
    emit("tabScroll", key);
      
    }, 100);
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
const languages = ref([
  { code: "EN", name: "English - EN", path: "/EN" ,abb:'English'},
  { code: "JA", name: "日本語 - JA", path: "/JA" ,abb:'日本語'},
  { code: "KO", name: "한국어 - KO", path: "/KO" ,abb:'한국어'},
  { code: "ZH", name: "中文(简体) - ZH", path: "/" ,abb:'中文(简体)'},
]);

const { locale } = useI18n()
let localeZH;
switch (locale.value) {
  case "ZH":
    localeZH = "中文(简体)";
    break;
  case "EN":
    localeZH = "English";
    break;
  case "JA":
    localeZH = "日本語";
    break;
  case "KO":
    localeZH = "한국어";
    break;
  default:
    localeZH = "English";
}
const selectlan = ref(localeZH)
const switchLanguage = (v: any) => {
  locale.value = v.code
  selectlan.value = v.abb
  emit("switchLanguage");

};




    // 定义一个方法来更新屏幕宽度
    const updateScreenWidth = () => {
      console.log('h5');

      if(window.innerWidth > 601){  //pc
        window.location.reload();
        console.log('pc');
        
      }else{ //h5
        console.log('h5');
        window.location.reload();
      }
    };

    // 在组件挂载后添加窗口resize事件监听器
    onMounted(() => {
      window.addEventListener('resize', updateScreenWidth);
    });

    // 在组件卸载前移除窗口resize事件监听器
    onUnmounted(() => {
      window.removeEventListener('resize', updateScreenWidth);
    });

</script>

<template>
  <div class="sj">{{ $t("top.sj") }}</div>
  <nav class="navbar">
    <div class="logo"  @click="router.push('/')">
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
      <el-menu-item index="/">{{ $t("top.homepage") }}</el-menu-item>
      <el-sub-menu index="2">
        <template #title>{{ $t("top.xmuheji") }}</template>
        <el-menu-item index="nav">{{ $t("top.kialiulanqi") }}</el-menu-item>
        <el-menu-item index="nav2">{{ $t("top.sassxit") }}</el-menu-item>
        <el-menu-item index="nav3">{{ $t("top.xmhz") }}</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>{{ $t("top.KIAwk") }}</template>
        <el-menu-item index="/node">{{ $t("top.jdwk") }}</el-menu-item>
        <el-menu-item index="/collaborativeMining">{{ $t("top.hzwk") }}</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="4">
        <template #title>{{ $t("top.styy") }}</template>
        <el-menu-item
          index="https://kinachain-wgz98ps05b-8aa191d636c74035.testnets.rollbridge.app/"
          >{{ $t("top.klgj") }}</el-menu-item
        >
        <el-menu-item
          index="https://kinachain-wgz98ps05b-8aa191d636c74035.testnets.rollbridge.app/"
          >KinaSWAP</el-menu-item
        >
        <el-menu-item index="https://r200.kinachain.com/">{{ $t("top.mwcqianbao") }}</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="5">
        <template #title>{{ $t("top.xshikt") }}</template>
        <el-menu-item index="/stage">{{ $t("top.jdkt") }}</el-menu-item>
        <el-menu-item index="/task">{{ $t("top.rwkt") }}</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="6">
        <template #title>{{ $t("top.yuanyuzhou") }}</template>
        <el-menu-item index="/metaverse">{{ $t("top.yzstbj") }}</el-menu-item>
        <el-menu-item index="webseit">{{ $t("top.mwcshangc") }}</el-menu-item>
        <!-- <el-menu-item index="6-2">KIA元宇宙计划</el-menu-item> -->
        <!-- <el-menu-item index="6-3">元宇宙API接口</el-menu-item> -->
      </el-sub-menu>
      <el-sub-menu index="7">
        <template #title>{{ $t("top.more") }}</template>
        <el-menu-item index="whiteParper">{{ $t("top.baipishu") }}</el-menu-item>
        <el-menu-item index="/contactUS">{{ $t("top.lxwom") }}</el-menu-item>
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
      <button class="wallet-button">{{ $t("top.ljieqianbao") }}</button>
    <el-dropdown  class="dropdown" >
      <span class="el-dropdown-link">
        <div class="language">
          <img
            src="https://plum-secure-meadowlark-923.mypinata.cloud/ipfs/QmaUmVKZ3hV3vevTbWBrsk2V8GhUxmQizRJvncRYqEyXpP"
          />
          <div>{{selectlan}}</div>
        </div>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item v-for="v in languages" @click=switchLanguage(v)>{{
            v.name
          }}</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    </div>
   
  </nav>
</template>

<style scoped lang="scss">
.dropdown{
  width: 140px;
}
.sj {
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
.language {
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }

  div {
    font-size: 20px;
    color: #fff;
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
  padding: 20px 4%;
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
  margin: 0 20px;
}
</style>
