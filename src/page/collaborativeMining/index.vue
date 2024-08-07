<script setup lang="ts">
import Top from "../../components/topMenu.vue";
import Bottom from "../../components/bottom.vue";
import Pledge from "../../page/collaborativeMining/components/pledge.vue";
import { ref, getCurrentInstance } from "vue";
import { useTransition } from "@vueuse/core";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const instance = getCurrentInstance();
const proxy = instance?.proxy as any; // 使用类型断言和可选链操作符
const activeTab = ref("ETH");
const activeTab2 = ref("NFT");
const source = ref(0);
const source2 = ref(0);
const outputValue = useTransition(source, {
  duration: 1500,
});
const outputValue2 = useTransition(source2, {
  duration: 1500,
});
source.value = 120000000;
source2.value = 45000;
</script>

<template>
  <Top activeIndex="/collaborativeMining" />
  <div class="container">
    <div class="tabs">
      <div
        class="tab"
        :class="{ active: activeTab === 'ETH' }"
        @click="activeTab = 'ETH'"
      >
        ETH
      </div>
      <div
        class="tab"
        :class="{ active: activeTab === 'BSC' }"
        @click="activeTab = 'BSC'"
      >
        BSC
      </div>
    </div>
    <div class="content">
      <div v-if="activeTab === 'ETH'" class="stat">
        <div class="content-s">
          <div class="number">
            <el-statistic
              :value-style="{
                fontSize: '60px',
                color: '#fff',
              }"
              :value="outputValue"
            />
          </div>
          <div class="description">{{ t("projectCPT.ethwkzrs") }}</div>
        </div>
        <div class="content-s">
          <div class="number">
            <el-statistic
              class="ekstatice"
              :value-style="{
                fontSize: '60px',
                color: '#fff',
              }"
              :value="outputValue2"
            />
          </div>
          <div class="description">{{ t("projectCPT.rycskiabi") }}</div>
        </div>
      </div>
      <div v-if="activeTab === 'BSC'" class="stat">
        <div class="content-s">
          <div class="number">
            <el-statistic
              :value-style="{
                fontSize: '60px',
                color: '#fff',
              }"
              :value="outputValue"
            />
          </div>
          <div class="description">{{ t("projectCPT.bscwkzrs") }}</div>
        </div>
        <div class="content-s">
          <div class="number">
            <el-statistic
              class="ekstatice"
              :value-style="{
                fontSize: '60px',
                color: '#fff',
              }"
              :value="outputValue2"
            />
          </div>
          <div class="description">{{ t("projectCPT.rycskiabi") }}</div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="tabs">
      <div
        class="tab2"
        :class="{ active: activeTab2 === 'NFT' }"
        @click="activeTab2 = 'NFT'"
      >
        NFT
      </div>
      <div
        class="tab2"
        :class="{ active: activeTab2 === t('projectCPT.daibi') }"
        @click="activeTab2 = t('projectCPT.daibi')"
      >
        {{ t("projectCPT.daibi") }}
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
      <div v-if="activeTab2 === 'NFT'" class="statc">
        <Pledge
          :imgurl="proxy?.$ipfsUrl + 'AUTOR.png'"
          v-for="(_, index) in [{}, {}, {}, {}, {}]"
          :key="index"
        />
      </div>
      <div v-if="activeTab2 === t('projectCPT.daibi')" class="statc">
        <Pledge
          :imgurl="proxy?.$ipfsUrl + 'ETH.png'"
          :circle="true"
          v-for="(_, index) in [{}, {}]"
          :key="index"
        />
      </div>
      <div v-if="activeTab2 === 'LP'" class="statc">
        <Pledge
          :imgurl="proxy?.$ipfsUrl + 'BTC.png'"
          :circle="true"
          v-for="(_, index) in [{}, {}, {}]"
          :key="index"
        />
      </div>
    </div>
  </div>
  <Bottom />
</template>

<style scoped>
.ekstatice {
  font-size: 60px;
  color: #fff;
}
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
  margin-top: 20px;
}
.content-s {
  width: 532px;
  height: 237px;
  background: url("https://plum-secure-meadowlark-923.mypinata.cloud/ipfs/QmVhCqjSFnw5Bvcjzmu2VCwnTMxU3fatZqeiHE2JZFaH5B/csimgbg.png")
    no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
