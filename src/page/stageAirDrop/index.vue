<script setup lang="ts">
import Top from "@/components/topMenu.vue";
import Bottom from "@/components/bottom.vue";
import List from "./components/list.vue";
import GetList from "./components/getList.vue";

import { ref, onMounted } from "vue";


</script>

<template>
  <Top activeIndex="/stage" />
  <div class="explain">
    <div class="content">
      <text class="t1">Kina官方阶段性</text>
      <text class="t2">空投KIA</text>
    </div>
    <div style="font-size: 18px; width: 50%">
      这里是Kina官方阶段性空投KIA的具体这里是Kina官方阶段性空投KIA的具体这里是Kina官方阶段性空投KIA的具体这里是Kina官方阶段性空投KIA的具体这里是Kina官方阶段性空投KIA的具体这里是Kina官方阶段性空投KIA的具体这里是Kina官方阶段性空投KIA的具体
    </div>
  </div>
  <List
    :listData="[
      {
        id: 1,
        title: '第一阶段',
        quantity: 1000,
        received: 200,
        date: '2024/08/10 12:00:00',
        status: '领取',
      },
      {
        id: 2,
        title: '第二阶段',
        quantity: 900,
        received: 500,
        date: '2024/10/10 12:00:00',
        status: '已领取',
      },
      {
        id: 3,
        title: '第三阶段',
        quantity: 800,
        received: 800,
        date: '2024/12/10 12:00:00',
        status: '待领取',
      },
      {
        id: 1,
        title: '第一阶段',
        quantity: 1000,
        received: 200,
        date: '2024/08/10 12:00:00',
        status: '领取',
      },
      {
        id: 2,
        title: '第二阶段',
        quantity: 900,
        received: 500,
        date: '2024/10/10 12:00:00',
        status: '已领取',
      },
      {
        id: 3,
        title: '第三阶段',
        quantity: 800,
        received: 800,
        date: '2024/12/10 12:00:00',
        status: '待领取',
      },
      {
        id: 1,
        title: '第一阶段',
        quantity: 1000,
        received: 200,
        date: '2024/08/10 12:00:00',
        status: '领取',
      },
      {
        id: 2,
        title: '第二阶段',
        quantity: 900,
        received: 500,
        date: '2024/10/10 12:00:00',
        status: '已领取',
      },
      {
        id: 3,
        title: '第三阶段',
        quantity: 800,
        received: 800,
        date: '2024/12/10 12:00:00',
        status: '待领取',
      },
    ]"
  />
   <GetList  :listData="[
    
      {
        id: 3,
        title: '第三阶段',
        date: '2024/12/10 12:00:00',
        num: 0.256,
        address: '0x5b8ACF7E2672C4d7D665A661A574a811224394a27',
      },
      {
        id: 3,
        title: '第三阶段',
        date: '2024/12/10 12:00:00',
        num: 0.256,
        address: '0x5b8ACF7E2672C4d7D665A661A574a811224394a27',
      },
    ]"/>
  <Bottom />
</template>

<style scoped>
.scroll-container {
  height: 90%;
  overflow: hidden;
  position: relative;
  margin-top: 24px;
}

.scroll-list {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  animation: scroll 10s linear infinite;
  font-size: 17px;
}
.scroll-list div {
  margin-bottom: 24px;
  color: #46a362;
}
@keyframes scroll {
  0% {
    top: 0;
  }
  100% {
    top: -100%;
  }
}
.rg {
  border: 1px solid #323232;
  border-radius: 16px;
  width: 30%;
  position: relative;
  padding: 30px;
  height: 600px;
  font-size: 24px;
}
.fuliimage {
  width: 383px;
  height: 322px;
  position: absolute;
  right: 90px;
  bottom: 30px;
}
.raffle {
  width: 80%;
  margin: 0 auto;
  position: relative;
  margin-bottom: 80px;
  display: flex;
  justify-content: space-between;
}
.lf {
  background-color: rgb(24, 25, 32);
  border-radius: 16px;
  width: 60%;
  position: relative;
  padding: 30px;
  height: 600px;
}
.explain {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  width: 100%;
  height: 282px;
  background-color: rgb(24, 25, 32);
  flex-direction: column;
  margin-bottom: 60px;
}
.btn {
  border: none;
  width: 180px;
  height: 40px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  position: relative;
  left: 50%;
  margin: 30px 0 80px 0;
}
.btn-withdraw {
  background-color: #46a362;
  color: #fff;
  margin-left: 10px;
}
.content {
  margin-bottom: 20px;
}
.t1 {
  color: #e62a2a;
  font-size: 52px;
}
.t2 {
  font-size: 52px;
}
</style>
