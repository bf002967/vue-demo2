<template>

      <!-- vue-commit -->
<div class="bg">
    <div class="box" v-for='msg in msgList'>
      <el-button type="text" @click="open4(msg.name)">
      <img src="../assets/img/drawable-hdpi/联系人-头像.png" alt="">
      <div class="box-msg">
           <div class="msg-title">
           <span>{{msg.name}}</span>
           <div v-if='msg.val==true' class="ident"><p>已实名</p></div>
           <div v-if='msg.val==false' class="unident"><p>未实名</p></div>
           </div>
           <div class="tel">{{msg.tel}}</div>
      </div>
      </el-button>
    </div>
   
</div>
</template>

<script>

export default {
  name: 'LinkmanPerson',
  // props：['ssss'],

  data(){
    return{
      msgList:[
          {
            name:'齐天大圣',
            val:true,
            tel:'18566668888'
          },
          {
            name:'李逍遥',
            val:true,
            tel:'18566668888'
          },
          {
            name:'李白',
            val:false,
            tel:'18566668888'
          },
          {
            name:'猪刚鬣',
            val:false,
            tel:'123456'
          },
          {
            name:'98-kar',
            val:true,
            tel:'18555555555'
          },
          // vuex
          // bus
          // before-router-enter
          // before-router-leave
      ]
    }
  },
  methods:{

    open4(val) {
        const h = this.$createElement;
        this.$msgbox({
          title: '',
          message: h('p', null, [
            h('span', null, '与“'+val+'”签订合同')
          ]),
          showCancelButton: true,
          confirmButtonText: '模板合同',
          cancelButtonText: '上传合同',
        })
      }    
  },


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
  margin-top: -.05rem;
  float: left;
  width: 1.3rem;
  height: .5rem;
  background-color: #60c0ff;
  border-radius: .2rem;
}
.msg-title{
  width: 100%;
  height: .8rem;
}
.unident{

  margin-left: .2rem;
  margin-top: -.05rem;
  float: left;
  width: 1.3rem;
  height: .5rem;
  background-color: #ff7575;
  border-radius: .2rem;
}
.ident p,.unident p{
  margin-top: .05rem;
  font-size: .35rem;
  color: #fff;
}
.tel{
  display: block;
  color: #888;
  font-size: .37rem;
  float: left;
}

</style>
<style>
.el-message-box{
  width: 8.5rem;
  height: 4rem;
}
.el-message-box__header{
  height: 1rem;
}
.el-message-box__content{
  font-size: .4rem;
  color: #1491e2;
  position: relative;
  top: -10%;
  text-align: center;
}
.el-message-box__btns{
  width: 8.5rem;
  text-align: center;

}
.el-button--text{
  padding: 0;
  float: left;
}
.el-button--default{
  width: 3.5rem !important;
  height: 1.1rem !important;
  background: #60c0ff !important;
  color: #fff;
  border: none !important;
  font-size: .4rem;
  border-radius: 2rem !important;
}

</style>