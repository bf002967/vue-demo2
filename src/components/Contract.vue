<template>
<div class="bg">
   <div class="bg-top">
      <div class="c-search">
         <div class="search-box">
            <span><img src="../assets/img/drawable-hdpi/搜索.png" alt=""></span>
            <input type="text" placeholder="合同名称或合同编号">
         </div>
      </div>
        <div class="c-tab">
           <!-- navbar -->  
           <mt-navbar class="page-part" v-model="selected">  
             <div class="c-tab-w"><mt-tab-item id="1"><div class="c-tab-title">个人</div></mt-tab-item></div>  
             <div class="c-tab-w"><mt-tab-item id="2"><div class="c-tab-title">待签署</div></mt-tab-item></div>
             <div class="c-tab-w"><mt-tab-item id="3"><div class="c-tab-title">已签署</div></mt-tab-item></div>
             <div class="c-tab-w"><mt-tab-item id="4"><div class="c-tab-title">待修改</div></mt-tab-item></div>
             <div class="c-tab-w"><mt-tab-item id="5"><div class="c-tab-title">已生效</div></mt-tab-item></div>
             <div class="c-tab-w"><mt-tab-item id="6"><div class="c-tab-title">已失效</div></mt-tab-item></div>   
           </mt-navbar>  
        </div>
    </div>

   <div class="bg-bottom">
      <div class="bottom-container">
         <!-- tabcontainer -->  
           <mt-tab-container v-model="selected">  
             <mt-tab-container-item id="1">  
                <contract-person/>
             </mt-tab-container-item>  
             <mt-tab-container-item id="2">  
                <cont-un/>
             </mt-tab-container-item>  
             <mt-tab-container-item id="3">  
                <cont-re/>
             </mt-tab-container-item>  
             <mt-tab-container-item id="4">  

             </mt-tab-container-item>  
             <mt-tab-container-item id="5">  

             </mt-tab-container-item>  
             <mt-tab-container-item id="6">  

             </mt-tab-container-item>  
           </mt-tab-container>
        </div>   
   </div>
   
</div>
</template>

<script>
import ContRe from '../components/ContRe.vue'
import ContUn from '../components/ContUn.vue'
import ContractPerson from '../components/ContractPerson.vue'
export default {
  name: 'Contract',
  data() {  
    return {  
      selected: '1'  
    };  
  },
  components:{
    ContUn,
    ContRe,
    ContractPerson
  }
};
</script>

<style scoped>
*::-webkit-input-placeholder { 
font-size: .4rem;
color: #fff; 
} 
*:-moz-placeholder { 
font-size: .4rem;
color: #fff; 
} 
*:-ms-input-placeholder { 
/* IE10+ */ 
font-size: .4rem;
color: #fff; 
} 
input{
   background-color: #60c0ff;
   color: #fff;
   font-size: .4rem;
}
.bg{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow-y: scroll;
}
.bg-top{
   position: absolute;
   top: 0;
   width: 100%;
   height: 26%;   
   background: #60c0ff;
}
.bg-bottom{
   position: absolute;
   height: 20rem;
   top: 26%;
    left: 0;
    right: 0;
    bottom: 0;  
   background: #e8eff5;
   
}

.mt-navbar{
   background: #60c0ff;
}
.mint-tab-item{
   height:1.1rem; 
   color: #E0E0E0 !important;
}
.mint-navbar{
   background-color: #60c0ff !important;
}
.c-tab-w{
   margin: 0 auto;
}
.w1{
   margin-left: 2.5rem;
}
.w2{
   margin-right: 2.5rem;
}
.is-selected{
   color: #fff !important;
   border-bottom: 3px solid #fff !important;
}
.c-tab-title{
   font-size: .35rem;
}
.bottom-container{
   margin-top: -1.3rem;
}
.c-search{
   width: 100%;
   height: 1.6rem;
}
.search-box{
   width: 90%;
   height: 80%;
   margin:0 auto;
   position: relative;
   top: .2rem;
   border: .05rem solid #fff;
   border-radius: 1rem;
}
.search-box span{
   margin-top: .1rem;
   margin-left: .2rem;
   float: left;
}
.search-box img{
   width: 1rem;
}
.search-box input{
   border: none;
   float: left;
   margin-left: .2rem;
   margin-top: .2rem;
   width: 7rem;
   height: .8rem;
}
</style>