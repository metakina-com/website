<template>
  <div class="cards2" >
    <div class="c-top" >
      <div class="card-header">
        <img
          v-if="circle"
          :src="props.imgurl"
          alt="Cat Image"
          class="cat-image-circle"
        />
        <img
          v-else
          :src="props.imgurl"
          alt="Cat Image"
          class="cat-image"
        />
        <div class="cat-info">
          <div>
            <div class="cat-info1"  >{{t("collaborativeMining.ziyoumao")}}</div>
            <div class="cat-info2" >
              {{t("collaborativeMining.zanshineir")}}
            </div>
          </div>
          <div class="social-icons">
            <img
            :src="proxy?.$ipfsUrl + 'home/byyhree.png'"
              class="icon"
              alt="Twitter"
            />
            <img 
            :src="proxy?.$ipfsUrl + 'discord.png'"
            class="icon" alt="discord" />
            <img
            :src="proxy?.$ipfsUrl + 'telegram.png'"
              class="icon"
              alt="telegram"
            />
          </div>
        </div>
      </div>
      <div class="cat-infor">
        <div class="wallet-info">
          <div class="wallet-amount">
            <div class="wallet-amount1">200</div>
            <div class="wallet-amount2">
              {{t("collaborativeMining.qbkyshul")}}
            </div>
          </div>
          <el-button type="danger" class="btn btn-start" @click="begin">{{t("collaborativeMining.kszy")}}</el-button>
        </div>
        <div class="wallet-info">
          <div class="wallet-rate">
            <div class="wallet-rate1">10.00%</div>
            <div class="wallet-rate2">{{t("collaborativeMining.sylv")}}</div>
          </div>
          <el-button color="#333" class="btn btn-remove" plain  @click="cancel"
            >{{t("collaborativeMining.jiechuzhiya")}}</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits, getCurrentInstance} from "vue";
const emit = defineEmits(['begin','cancel']);
import { useI18n } from 'vue-i18n';
const instance = getCurrentInstance();
const proxy = instance?.proxy as any; // 使用类型断言和可选链操作符
const { t } = useI18n();
const props = defineProps({
    imgurl: String,
    circle: Boolean
});
const begin = () => {
  emit('begin')
}
const cancel = () => {
  emit('cancel')
}
</script>
<style scoped>
.cat-info1{
  font-size: 24px;
}
.cat-info2{
  font-size: 18px;
}
.wallet-amount1{
  font-size: 36px;
}
.wallet-amount2{
  font-size: 18px;
  color: #999999;
}
.wallet-rate1{
  font-size: 36px;
}
.wallet-rate2{
  font-size: 18px;
  color: #999999;
}
.cards2 {
  padding: 20px;

}
.c-top {
  display: flex;
  height: 228px;
}
.card-header {
  display: flex;
  margin: 20px;
  border-right: 1px solid #333;
  color: #ffffff;
  padding-right: 25px;
  width: 60%;
}

.cat-image {
  width: 140px;
  height: 187px;
  margin-right: 20px;
  border-radius: 20px;
}
.cat-image-circle {
  width: 140px;
  height: 140px;
  margin-right: 20px;
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
  width: 40px;
  height: 40px;
}

.card-content {
  padding: 20px;
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
  width: 420px;
  height: 40px;
  background: #434343 !important;
  border-radius: 8px;
}
.btn {
  border: none;
  width: 180px;
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
}

.btn-remove {
  color: #e62a2a;
  border: 1px solid #e62a2a;
  background-color: rgb(24, 25, 32) !important;
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
