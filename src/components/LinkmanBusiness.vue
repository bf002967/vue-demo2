<template>
<div class="bg">
   <div class="box" v-for='msg in msgList'>
<!--       <LinkPerContentUn/>
      <LinkPerContent/>
      <LinkPerContent/>
      <LinkPerContentUn/>
      <LinkPerContent/>
      <LinkPerContent/> -->

      <!-- vue-commit -->

      <img src="../assets/img/drawable-hdpi/联系人-头像.png" alt="">
      <div class="box-msg">
           <div class="msg-title">
           <span>{{msg.name}}</span>
           <div v-if='msg.val==true' class="ident"><p>已实名</p></div>
           <div v-if='msg.val==false' class="unident"><p>未实名</p></div>
           </div>
           <div class="tel">18588888888</div>
      </div>
   </div>
</div>
</template>

<script>

export default {
  name: 'LinkmanBusiness',

  data(){
    return{
      msgList:[
          {
            name:'复杂美科技',
            val:true,
            tel:'18566668888'
          },
          {
            name:'阿里巴巴',
            val:true,
            tel:'18566668888'
          },
          {
            name:'蓝洞',
            val:false,
            tel:'18566668888'
          },
          {
            name:'BlueHole',
            val:false,
            tel:'123456'
          },
          {
            name:'AKM',
            val:true,
            tel:'18555555555'
          },

      ]
    }
  }

};
</script>

<style scoped>
.bg{
  height: 20rem;
}
.box{
   height: 1.7rem;
   width: 9.5rem;
   margin: 0 auto;
   margin-top: .3rem;
   background-color: #ffffff;
   box-shadow: .1rem .1rem 1rem .1rem rgba(96, 192, 255, 0.35);
   border-radius: .2rem;
}
.box img{
  width: 1.3rem;
  margin: .2rem;
  float: left;
}
.box-msg{
    width: 7.5rem;
    height: 100%;
    margin-left: .3rem;
    padding-top: 3%;
}
.box-msg span{
  float: left;
  font-family: FZLTHJW--GB1-0;
  font-size: .4rem;
  color: #1491e2;
}
.ident{
  margin-left: .2rem;
  margin-top: .05rem;
  float: left;
  width: 1.3rem;
  background-color: #60c0ff;
  border-radius: .2rem;
}
.msg-title{
  width: 100%;
  height: .8rem;
}
.unident{

  margin-left: .2rem;
  margin-top: .05rem;
  float: left;
  width: 1.3rem;
  background-color: #ff7575;
  border-radius: .2rem;
}
.ident p,.unident p{
  color: #fff;
}
.tel{
  display: block;
  color: #888;
  font-size: .4rem;
  float: left;
}

</style>