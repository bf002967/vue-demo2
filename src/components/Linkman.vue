<template>
<div>
	<div class="bg-top">
		<div class="link-title">
			<p>联系人</p>
      <router-link to="/add-link">
        <img src="../assets/img/drawable-hdpi/加号.png" alt=""> 
      </router-link> 
		</div>
        <div class="link-tab">
           <!-- navbar -->  
           <mt-navbar class="page-part" v-model="selected">  
             <div class="link-tab-w w1"><mt-tab-item id="1"><div class="link-tab-title">个人</div></mt-tab-item></div>  
             <div class="link-tab-w w2"><mt-tab-item id="2"><div class="link-tab-title">企业</div></mt-tab-item></div>   
           </mt-navbar>  
        </div>
    </div>

	<div class="bg-bottom">
		<div class="bottom-container">
		   <!-- tabcontainer -->
           <mt-tab-container v-model="selected">  
             <mt-tab-container-item id="1">  
                <linkman-person/>
             </mt-tab-container-item>  
             <mt-tab-container-item id="2">  
                <linkman-business/>
             </mt-tab-container-item>  
           </mt-tab-container>
        </div>   
	</div>
	
</div>
</template>

<script>
	import LinkmanPerson from '../components/LinkmanPerson.vue'
	import LinkmanBusiness from '../components/LinkmanBusiness.vue'
export default {
  name: 'Linkman',
  data() {  
    return {  
      selected: '1'  
    };  
  },
  components:{
  	LinkmanPerson,
  	LinkmanBusiness
  }
};
</script>

<style scoped>
.bg-top{
   position: absolute;
   top: 0;
   width: 100%;
   height: 26%;	
   background: #60c0ff;
}
.bg-bottom{
   position: absolute;
   top: 26%;
   width: 100%;
   height: 74%;	
   background: #e8eff5;
}
.link-title{
	width: 100%;
	height: 1.4rem;
}
.link-title p{
	padding-top: .3rem;
	color: #fff;
	font-size: .6rem;
}
.link-title img{
	margin-top: -.9rem;
	margin-right: .4rem;
	width: .9rem;
	float: right;
}
.mt-navbar{
	background: #60c0ff;
}
.mint-tab-item{
    color: #E0E0E0 !important;
}
.mint-navbar{
	background-color: #60c0ff;
}
.link-tab-w{
	width: 1rem;
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
.link-tab-title{
	font-size: .5rem;
}
.bottom-container{
	margin-top: -1.3rem;
}
</style>