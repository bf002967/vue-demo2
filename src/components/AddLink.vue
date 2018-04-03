<template>
<div>
	<div class="bg-top">
	    <div class="topBox">
	        <mt-header title="添加联系人">  
              <router-link to="/link-man" slot="left">  
                <mt-button icon="back"></mt-button>  
              </router-link> 
            </mt-header>
    
	    </div>
    </div>
    <div class="bg-bottom">
    	<form class="legInfoBox" @submit.prevent="submit">
		    <div class="legInfo">
			  <div>
				<mt-field label="姓名" placeholder="请输入真实姓名或公司名称" v-model="msgList.name"></mt-field>
			  </div>
			  <div>
				<mt-field label="账号" placeholder="请输入联系人账号" type="tel" v-model="msgList.tel"></mt-field>
			  </div>
			  <div>
				<mt-field label="分类" placeholder="请选择联系人类别" v-model="msgList.type"></mt-field>
			  </div>			
		    </div>
		    <router-link to="/link-man" class="next" @click="sendmsg">
		    	<input type="submit" value="提交" to="/link-man" class="next">
		    </router-link>
	    </form>
    </div>
</div>	
</template>

<script>
	export default{
		data(){
			return{
			  msgList:{
                name:'',
                tel:'',
                type:''
              }
			}
		},
		methods:{
			// submit:function(){
			// 	var formData = JSON.stringify(this.user);
			// 	console.log(formData);
			// 	this.$http.post('/linkman-person', formData).then((response) => {
			// 		console.log('22');

   //              }, (response) => {
           
   //              });
			// }
			sendmsg(){
				this.$router.push({
					path:'/linman-person',
					name:'lkm',
					params:{
						name:'name',
						dataObj:this.msgList.name
					}
				})
			}
		}
	}
</script>

<style scoped>
input{
	background: none;
	border: none;
	color: #fff;
}
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
.legInfoBox{
		width: 100%;
		position: relative;
		margin-top: -1.1rem;
		.legInfo{
			width: 8.8rem;
			height: 3.53333333rem;
			background-color: #fff;
			border-radius: .13333333rem;
			margin: 0 auto;
			overflow: hidden;
			box-shadow: 0px 3px 21px 5px rgba(96, 192, 255, 0.35);
			>div{
				span{
					color: #333;
					font-size: .37333333rem;
					padding: 0 .29333333rem;
					line-height: 1.2rem;
					display: inline-block;
					margin-right: .46666667rem;
				}
			}

			p{
				color: #333;
				font-size: .37333333rem;
			}
		}
		.next{
			width: 8.8rem;
			height: 1.06666667rem;
			display: block;
			margin: 1.33333333rem auto 0;
			background-color: #60c0ff;
			box-shadow: 0px .04rem .28rem .06666667rem rgba(96, 192, 255, 0.35);
			border-radius: .53333333rem;
			line-height: 1.06666667rem;
			color: #fff;
			font-size: .4rem;
		}
	}
.legInfo div{
    border-bottom: .03rem solid #e8eff5;
}
.legInfo div:nth-last-of-type(1){
	border-bottom:0;
}

</style>

<style>
	.mint-cell{
		min-height: 1.17rem;

	}
/*	.mint-cell-wrapper{
		padding: .29333333rem;
		font-size: .37333333rem;
	}*/
	.mint-cell-value{
		font-size: .31rem;
		margin-left: 1rem;
	}
	.mint-field .mint-cell-title{
		width: auto;
		margin-right: .46666667rem;
	}
	.mint-field-lege{
		color: #808080;
		font-size: .32rem;
		height: 0.8rem;
	}
/*	.el-button--primary{
		width: 1.86666667rem;
		height: 1.86666667rem;
		border-radius: .13333333rem;
		background-color: #fff;
		padding: 0;
		text-align: center;
		border: .02666667rem solid #60c0ff;
		img{
			width: .9rem;
		}
	}*/

</style>