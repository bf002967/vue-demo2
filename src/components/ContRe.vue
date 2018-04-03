<template>
<div>
   <div class="box">

      <div class="box-msg" v-if='clicked2'>
        <p class="num">C00023698</p><li>已签署</li>
        <p class="msg-title">全日制劳动合同全日制劳动合同全日制劳动合同</p>
        <p class="msg-time">2018-3-30 15:25:12</p>
        <img @click='clicked2=!clicked2' src="../assets/img/drawable-hdpi/下拉.png" alt="">
      </div>
      <div class="box-msg" v-if='!clicked2'>
        <p class="num">C00023698</p><li>已签署</li>
        <p class="msg-title">全日制劳动合同全日制劳动合同全日制劳动合同</p>
        <p class="msg-time">2018-3-30 15:25:12</p>
        <img @click='clicked2=!clicked2' src="../assets/img/drawable-hdpi/收回.png" alt="">
        <p class="num">C00023698</p><li class="lose">已失效</li>
        <p class="msg-title-lose">全日制劳动合同全日制劳动合同全日制劳动合同</p>
        <p class="msg-time lose-t">2018-3-30 15:25:12</p>
        <hr>
        <p class="num">C00023698</p><li class="lose">已失效</li>
        <p class="msg-title-lose">全日制劳动合同全日制劳动合同全日制劳动合同</p>
        <p class="msg-time lose-t">2018-3-30 15:25:12</p>
      </div>
   </div>
</div>
</template>

<script>
   import ContPerContent from '../components/ContPerContent.vue'

export default {
  name: 'ContractPerson',
  components:{
   ContPerContent,
  },
  data(){
    return{
      clicked1:true,
      clicked2:true,
      clicked3:true
    };
  }

};
</script>

<style scoped>
li{
  list-style: none;
  margin-top: -.6rem;
  margin-right: .5rem;
  float: right;
  color: #f1325f;
  font-size: .4rem;
}
hr{
  width: 92%;
  margin: 0 auto;
  height:1px;
  border:none;
  border-top:1px solid #ccc;
}
.lose{
  color: #666;
}
.lose-t{
  padding-bottom: .1rem;
}
.box{
  height: 20rem;

}
.box-msg{
   width: 9.5rem;
   margin: 0 auto;
   margin-top: .3rem;
   background-color: #ffffff;
   box-shadow: .1rem .1rem 1rem .1rem rgba(96, 192, 255, 0.35);
   border-radius: .2rem;
}
.box-msg p{
  text-align: left;
  margin-left: .4rem;
}
.num{
  padding-top: .3rem;
  color: #808080;
  font-size: .4rem;
}
.msg-title{
  width: 90%;
  color: #1491e2;
  font-size: .5rem;
}
.msg-title-lose{
  width: 90%;
  color: #666;
  font-size: .5rem;  
}
.msg-time{
  color: #808080;
  font-size: .37rem;
}
.box-msg img{
  width: 92%;
  margin-top: -.1rem;
}
</style>