<template>
<div>
	<div class="bg-top">
	    <div class="topBox">
	        <mt-header title="企业认证">  
              <router-link to="/aut-info" slot="left">  
                <mt-button icon="back"></mt-button>  
              </router-link> 
            </mt-header>
    
	    </div>
    </div>
    <div class="bg-bottom">
    	<div class="InfoBox">
		<div class="Info">
            <div class="info-title" v-for='msg in infoMsg'><p>{{msg.name}}</p><span>{{msg.re}}&nbsp;></span></div>
		</div>
		<router-link to="/cor-info" class="next"><img src="../../static/img/plus-icon.png" height="50" width="50" alt=""></router-link>
	  </div>
    </div>
</div>	
</template>

<script>
	export default{
		data(){
			return{
				autName: "",
				autPhone: "",
				autId: "",
				imgSrc: "../../static/img/carmera.png",
				infoMsg:[
                   {
                   	name:'杭州复杂美科技有限公司',
                   	re:'已实名'
                   },
                   {
                   	name:'杭州阿里巴巴有限公司',
                   	re:'已实名'
                   },
                   {
                   	name:'蓝洞公司',
                   	re:'已实名'
                   }
				]
			}
		},
	}
</script>

<style scoped>
.bg-top{
   position: absolute;
   top: 0;
   width: 100%;
   height: 15%;	
   background: #60c0ff;
}
.bg-bottom{
   position: absolute;
   top: 15%;
   width: 100%;
   height: 85%;	
   background: #e8eff5;
}
.bg-bottom img{
	margin-top: -.6rem;
	background: #fff;
	border-radius: 50%;
	box-shadow: 0rem 0rem 1rem .05rem 
		rgba(96, 192, 255, 0.35);

}

.mint-header{
	height: 1.49333333rem;
	font-size: .45333333rem;
	background-color: #60c0ff;
}
.navBox{
	width: 8.8rem;
	height: 1.33333333rem;
	margin: .3rem auto 0;
	display: flex;
	justify-content: space-around;
	color: #d4eeff;
	font-size: .37333333rem;
	line-height: .93333333rem;
	span{
      margin-left: .3rem;
	}
	span.active{
		color: #fff;
		border-bottom: .05333333rem solid #fff;
		height: .93333333rem;
	}
}
.Info div:nth-of-type(1){
	margin-top: .7rem;
}
.info-title{
	width: 100%;
	height: 1rem;
	margin-top: .3rem;
}
.info-title p{
	margin-left: .3rem;
	font-size: .4rem;
	line-height: 1rem;
	float: left;
    color: #1491e2;
}
.info-title span{
	margin-right: .3rem;
	line-height: 1rem;
	float: right;
	color: #60c0ff;
}
	.InfoBox{
		width: 100%;
		position: relative;
		margin-top: -1.1rem;
		.Info{
			width: 8.8rem;
			height: 13.73333333rem;
			background-color: #fff;
			border-radius: .13333333rem;
			margin: 0 auto;
			overflow: hidden;
			box-shadow: 0px 3px 21px 5px rgba(96, 192, 255, 0.35);
		}
	}

</style>

<style>


</style>