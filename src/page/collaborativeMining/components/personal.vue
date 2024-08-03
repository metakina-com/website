<template>
  <div class="cards2" >
    <div class="c-top" style="height: 228px;">
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
            <div style="font-size: 24px">自由猫#6706</div>
            <div style="font-size: 18px">
              这里展示自由猫#6706的描述，这里展示自由猫#6706的描述，这里展示自由猫#6706的描述
            </div>
          </div>
          <div class="social-icons">
            <img
              src="https://plum-secure-meadowlark-923.mypinata.cloud/ipfs/QmVhCqjSFnw5Bvcjzmu2VCwnTMxU3fatZqeiHE2JZFaH5B/telegram.png"
              class="icon"
              alt="Twitter"
            />
            <img src="https://plum-secure-meadowlark-923.mypinata.cloud/ipfs/QmVhCqjSFnw5Bvcjzmu2VCwnTMxU3fatZqeiHE2JZFaH5B/discord.png" class="icon" alt="Twitter" />
            <img
              src="https://plum-secure-meadowlark-923.mypinata.cloud/ipfs/QmVhCqjSFnw5Bvcjzmu2VCwnTMxU3fatZqeiHE2JZFaH5B/telegram.png"
              class="icon"
              alt="Twitter"
            />
          </div>
        </div>
      </div>
      <div class="cat-infor">
        <div class="wallet-info">
          <div class="wallet-amount">
            <div style="font-size: 36px">200</div>
            <div style="font-size: 18px; color: #999999">
              钱包可用数量（张）
            </div>
          </div>
          <el-button type="danger" class="btn btn-start" @click="begin">开始质押</el-button>
        </div>
        <div class="wallet-info">
          <div class="wallet-rate">
            <div style="font-size: 36px">10.00%</div>
            <div style="font-size: 18px; color: #999999">收益率</div>
          </div>
          <el-button color="#333" class="btn btn-remove" plain  @click="cancel"
            >解除质押</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits} from "vue";
const emit = defineEmits(['begin','cancel']);

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
.cards2 {
  padding: 20px;

}
.c-top {
  display: flex;
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
