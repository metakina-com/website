<template>
  <div class="cards">
    <person :imgurl="props.imgurl" :circle="circle" @begin="begin" @cancel="cancel"/>
    <div class="card-content" v-show="isShow">
      <!-- <div class="imgricon">
        <img src="https://pub-7f3d82f53363484c8d4f6a346d92560a.r2.dev/img/wakuang.png" class="icon2" alt="wakuang" />
      </div> -->
      <div class="cr">
        <div class="stake-amount">
          <div v-if="isCancel" for="stake" class="isCancel">
            <text>{{ t("collaborativeMining.jchushul")}}</text>
            <text class="stake-amounttext">{{t("collaborativeMining.ziduokejiehcu")}}</text>
          </div>
          <div v-else for="stake">{{ t("collaborativeMining.zhiyashul")}}</div>
          <div style="display: flex;
    flex-wrap: nowrap;">
            <el-input
              v-model="input"
              class="elinput"
              :placeholder="isCancel?t('collaborativeMining.qshuru1yaojiehcu'):t('collaborativeMining.qchuru1yaozhiya')"
            />
            <el-button
              color="#333"
              class="btn btn-remove"
              >MAX</el-button
            >
            <el-button type="danger" class="btn btn-start"
              >{{ t('collaborativeMining.quereng') }}</el-button
            >
          </div>
        </div>
        <div class="output-amount">
          <div>
            <div for="output">{{ t('collaborativeMining.ningyichan') }}</div>
          </div>
          <div>
            <el-input v-model="input" class="elinput" readonly />
            <el-button type="success" class="btn btn-withdraw">{{ t('collaborativeMining.tiqu') }}</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Person from "./personal.vue";
import { ref, defineProps} from "vue";
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
//质押销毁
const isShow = ref(false);
const isCancel = ref(false);

const props = defineProps({
    imgurl: String,
    circle: Boolean
});
//开始质押
const begin = () => {
  isShow.value = !isShow.value
  if( !isShow.value && isCancel.value ){
    isShow.value =  true
  }
  isCancel.value = false
}
//解除质押
const cancel = () => {
  if( !isShow.value ){
    isShow.value =  true
  }
  isCancel.value = true
}
const input = ref("");
</script>
<style scoped>
.cards {
  padding: 10px;
  margin-top: 20px;
  background-color: rgb(24, 25, 32);
  border-radius: 16px;
  width: 90%;
  margin: 20px auto;
}
.c-top {
  display: flex;
}
.card-header {
  display: flex;
  /* margin: 20px; */
  /* border-right: 1px solid #333; */
  color: #ffffff;
  padding-right: 25px;
  /* width: 80%; */
}

.cat-image {
  width: 140px;
  height: 187px;
  margin-right: 20px;
  border-radius: 20px;
}
.cat-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.cat-infor {
  display: flex;
  flex: 1;
  justify-content: space-evenly;
}
.cat-info h2 {
  margin: 0;
}
.isCancel{
  /* width: 420px; */
    display: flex;
    justify-content: space-between;
}
.cat-info p {
  margin: 5px 0;
}

.social-icons {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.icon {
  cursor: pointer;
  width: 20px;
  height: 20px;
}

.card-content {
  padding: 10px;
  display: flex;
  align-items: center;
}
.imgricon {
  width: 45%;
  padding-right: 60px;
}
.wallet-info {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  margin-bottom: 20px;
}

.wallet-amount,
.wallet-rate {
  text-align: center;
}
.elinput {
  width: 50%;
  height: 40px;
  background: #434343 !important;
  border-radius: 8px;
}
.btn {
  border: none;
  width: 80px;
  height: 40px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  display: inline-block;
}

.cr {
  flex: 1;
}
.icon2 {
  width: 174px;
  height: 172px;
  float: right;
}
.btn-start {
  background-color: red;
  color: #fff;
  width: 80px;
}

.btn-remove {
  width: 80px; 
  margin: 0 10px;
  color: #e62a2a;
  border: 1px solid #e62a2a;
  background-color: rgb(24, 25, 32) !important;
}

.stake-amounttext {
  color: #999999;
  font-size: 18px;
}
.stake-amount {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.stake-amount label {
  flex: 1;
}

.stake-amount input {
  flex: 2;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #333;
  border-radius: 5px;
  background-color: #222;
  color: #fff;
}

.output-amount {
  display: flex;
  flex-direction: column;
}

.output-amount label {
  flex: 1;
}

.output-amount input {
  flex: 2;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #333;
  border-radius: 5px;
  background-color: #222;
  color: #fff;
}

.btn-max,
.btn-confirm,
.btn-withdraw {
  background-color: #46a362;
  color: #fff;
  margin-left: 10px;  
}
</style>
