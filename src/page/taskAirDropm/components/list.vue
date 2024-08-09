<template>
  <div class="cards " >
    <div class="c-top" >
      <div class="card-header">
        <img
          src="https://plum-secure-meadowlark-923.mypinata.cloud/ipfs/QmVhCqjSFnw5Bvcjzmu2VCwnTMxU3fatZqeiHE2JZFaH5B/BNB.png"
          alt="Cat Image"
          class="cat-image"
        />
        <div class="cat-info">
          <div>
            <div class="cat-infot" >{{t("stageAirDrop.tuiteguanzhu")}}</div>
          </div>
        </div>
      </div>
      <div class="cat-infor">
        <div class="wallet-info">
       
          <el-button type="danger" class="btn btn-start">{{props.btnLName}}</el-button>
        </div>
        <div class="wallet-info">
          
          <el-button color="#333" class="btn btn-remove" plain
            >{{t("stageAirDrop.heshi")}}</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps} from "vue";
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const props = defineProps({
  btnLName: String,
});
</script>
<style scoped>
.cards {
  /* padding: 20px; */
background-color:rgb(24, 25, 32);;
margin-bottom: 20px;
}
.c-top {
  display: flex;
}
.cat-infot{
  font-size: 18px;
}
.card-header {
  display: flex;
  margin: 20px;
  color: #ffffff;
  padding-right: 25px;
  width: 60%;
  align-items: center;
}

.cat-image {
  width: 38px;
  height: 38px;
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
  justify-content: center;
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
  width: 80px;
  height: 35px;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  margin-right: 20px;
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
