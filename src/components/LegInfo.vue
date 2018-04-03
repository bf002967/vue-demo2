<template>
<div>
	<div class="bg-top">
	    <div class="topBox">
	        <mt-header title="企业认证">  
              <router-link to="/cor-info" slot="left">  
                <mt-button icon="back"></mt-button>  
              </router-link> 
            </mt-header>
            <div class="navBox">
            	<span>企业信息</span><span>></span>
            	<span class="active">法人信息</span><span class="act-icon">></span>
            	<span>授权人信息</span>
            </div>
    
	    </div>
    </div>
    <div class="bg-bottom">
    	<div class="legInfoBox">
		<div class="legInfo">
			<div>
				<mt-field label="法人姓名" placeholder="请输入法人名称" v-model="legName"></mt-field>
			</div>
			<div>
				<mt-field label="法人电话" placeholder="请输入法人电话" type="tel" v-model="legPhone"></mt-field>
			</div>
			<div>
				<mt-field label="身份证号" placeholder="请输入身份证号" v-model="legId"></mt-field>
			</div>
			<div class="innerbox">
				<el-upload class="upload-demo" action="" :auto-upload='false' :on-change='changeUpload1'>  
	            <el-button type="primary"><img :src="imgSrc1" /></el-button>
				</el-upload>
			    <p>身份证正面</p>
			</div>
			
			<div class="innerbox">
				<el-upload class="upload-demo" action="" :auto-upload='false' :on-change='changeUpload2'>  
	            <el-button type="primary"><img :src="imgSrc2" /></el-button>
				</el-upload>
			    <p>身份证反面</p>
			</div>
			
		</div>
		<router-link to="/aut-info" class="next">下一步</router-link>
	  </div>
    </div>
</div>	
</template>

<script>
	export default{
		data(){
			return{
				legName: "",
				legPhone: "",
				legId: "",
				imgSrc1: "../../static/img/carmera.png",
				imgSrc2: "../../static/img/carmera.png"
			}
		},
		methods:{
			changeUpload1: function(file, fileList) {  
              this.fileList = fileList;  
              this.$nextTick(  
                () => {  
                  let upload_list_li = document.getElementsByClassName('el-upload-list')[0].children;  
                   for (let i = 0; i < upload_list_li.length; i++) {  
                   this.imgSrc1 = fileList[i].url;   
                   }  
                });  
            },
            changeUpload2: function(file, fileList) {  
              this.fileList = fileList;  
              this.$nextTick(  
                () => {  
                  let upload_list_li = document.getElementsByClassName('el-upload-list')[1].children;  
                   for (let i = 0; i < upload_list_li.length; i++) {  
                   this.imgSrc2 = fileList[i].url;   
                   }  
                });  
            }  
		}
	}
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
.act-icon{
	color: #fff;
}
.innerbox{
	float: left;
	width: 50%;
}
.innerbox p{
	text-align: center;
}

	.legInfoBox{
		width: 100%;
		position: relative;
		margin-top: -1.1rem;
		.legInfo{
			width: 8.8rem;
			height: 6.73333333rem;
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
.legInfo div:nth-last-of-type(1),div:nth-last-of-type(2){
	border-bottom:0;
}
</style>

<style>
	.mint-cell{
		min-height: 1.1rem;
	}
	.mint-cell-wrapper{
		padding: 0 .29333333rem;
		font-size: .37333333rem;
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
	.el-button--primary{
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
	}
	.el-upload{
		width: 1.86666667rem;
		margin: .26666667rem auto;
		display: block;
	}
</style>