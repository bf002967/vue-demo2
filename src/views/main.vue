<template>
	<div id="app">

		
<!--     <div class="page-tab-container">
		    <mt-tab-container v-model="active" style="height: 100%">
            <mt-tab-container-item id="mt-home">
              <m-home/>           
            </mt-tab-container-item>
            <mt-tab-container-item id="mt-contract">
              <contract/>     
            </mt-tab-container-item>
            <mt-tab-container-item id="mt-linkman">
              <linkman/>
            </mt-tab-container-item>
            <mt-tab-container-item id="mt-tab">
              <my-tab/>
            </mt-tab-container-item>
        </mt-tab-container>
    </div> -->
    <router-view></router-view>
		<mt-tabbar v-model="selected" style="position: fixed;" :swipeable='true' value="m-home">
           <mt-tab-item id="m-home" >
              	<img v-if="selected == 'm-home'" slot="icon" src="../assets/img/drawable-hdpi/首页-选中.png">
              	<img v-else slot="icon" src="../assets/img/drawable-hdpi/首页-未选.png">
                <p>首页</p>       
           </mt-tab-item>
           <mt-tab-item id="contract" >
              <img v-if="selected == 'contract'" slot="icon" src="../assets/img/drawable-hdpi/合同-选中.png">
              <img v-else slot="icon" src="../assets/img/drawable-hdpi/合同-未选.png">
              <p>合同</p>
           </mt-tab-item>
           <mt-tab-item id="linkman" >
              <img v-if="selected != 'linkman'" slot="icon" src="../assets/img/drawable-hdpi/联系人-未选.png">
              <img v-else slot="icon" src="../assets/img/drawable-hdpi/联系人-选中.png">
              <p>联系人</p>
           </mt-tab-item>
           <mt-tab-item id="my-tab" >
              <img v-if="selected != 'my-tab'" slot="icon" src="../assets/img/drawable-hdpi/我-未选.png">
              <img v-else slot="icon" src="../assets/img/drawable-hdpi/我-选中.png">
              <p>我的</p>
           </mt-tab-item>
    </mt-tabbar>
	</div>

</template>
<script>

	import mHome from "../components/Home.vue"
	import Contract from "../components/Contract.vue"
	import Linkman from "../components/Linkman.vue"
	import MyTab from "../components/MyTab.vue"
	 export default{
       name: 'app',  
         data() {  
           return {  
           	 selected:'m-home',
             active: 'mt-home',
             pick:''  
           };  
         }  ,
	 	components:{
         
             mHome,
             Contract,
             Linkman,
             MyTab
	 	},
	 	methods:{
          toggle:function(){
            this.pick = !this.pick;
            console.log('11');
          }
	 	},
        watch: {
          selected: function (val, oldVal) {
              // 这里就可以通过 val 的值变更来确定
                switch(val){
                  case 'm-home':
                    this.$router.push({
                        path:'/home'
                    });
                    break;
                  case 'contract':
                    this.$router.push({
                      path: '/contract'
                    });
                    break;
                  case 'linkman':
                    this.$router.push({
                      path:'/link-man'
                    });
                    break;
                  case 'my-tab':
                    this.$router.push({
                      path:'/my-tab'
                    });
                    break;
                }
              // console.log(val)
          }
        }

	 }

</script>

<style scoped>

#app,.page-tab-container,.mt-tab-container-wrap,.mt-tab-container-item{
	height: 100%;
}

p{
	color: #a2a2a2;
}
.is-selected{
  background-color: #fff !important;
}
.is-selected p{
  color: #60c0ff !important;
}
</style>