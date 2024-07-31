<script setup lang="ts">
import Top from "../../components/topMenu.vue";
import Bottom from "../../components/bottom.vue";
import Pledge from "../../page/collaborativeMining/components/pledge.vue";
import Login from "../../page/collaborativeMining/components/login.vue";
import p2 from "../../assets/images/ETH.png";
import p3 from "../../assets/images/BTC.png";
import { ref } from "vue";

const activeTab2 = ref("代币");
</script>

<template>
  <Top activeIndex='/node'/>
  <Login/>
  <div class="container">
    <div class="tabs">
      <div
        class="tab2 active"
      >
        节点挖矿
      </div>
    </div>
    <Pledge :imgurl="p2" :circle="true" v-for="(_, index) in [ {}]" :key="index"/>
  </div>
  <div class="container">
    <div class="tabs">
    
      <div
        class="tab2"
        :class="{ active: activeTab2 === '代币' }"
        @click="activeTab2 = '代币'"
      >
        代币
      </div>
      <div
        class="tab2"
        :class="{ active: activeTab2 === 'LP' }"
        @click="activeTab2 = 'LP'"
      >
        LP
      </div>
    </div>
    <div class="">
      <div v-if="activeTab2 === '代币'" class="statc">
        <Pledge :imgurl="p2" :circle="true" v-for="(_, index) in [{}, {}, {}, {}, {}]" :key="index"/>
      </div>
      <div v-if="activeTab2 === 'LP'" class="statc">
        <Pledge :imgurl="p3" :circle="true" v-for="(_, index) in [{}, {}]" :key="index" />
      </div>
    </div>
    <!-- <div
      class="contentc w-80c Person"
      v-for="(_, index) in [{}, {}]"
      :key="index"
    >
      <Person :imgurl="p1" />
    </div> -->
  </div>
  <Bottom />
</template>

<style scoped>
.container {
  padding: 20px 0;
}

.tabs {
  display: flex;
  margin-left: 10%;
  font-size: 36px;
}

.tab {
  cursor: pointer;
  color: #fff;
  margin-right: 40px;
}
.tab2 {
  cursor: pointer;
  color: #fff;
  padding: 10px 20px;
}
.tab2.active {
  color: red;
}
.tab.active {
  border-bottom: 2px solid red;
}

.content {
  display: flex;
  justify-content: space-around;
  padding: 100px 0;
  background-color: rgb(24, 25, 32);
  margin-top: 20px;
}
.contentc {
  background-color: rgb(24, 25, 32);
  margin-top: 20px;
  border-radius: 16px;
}
.stat {
  text-align: center;
  display: flex;
  width: 80%;
  justify-content: space-around;
}
.statc {
  /* background: #1D1D1D; */
}
.number {
  font-size: 60px;
  margin-bottom: 10px;
  color: white;
}

.description {
  font-size: 24px;
  color: #999;
}
.Person:hover {
  background-color: #434343;
}
</style>
