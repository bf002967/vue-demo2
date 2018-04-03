<template>
<div>
	<div class="bg-top">
	    <div class="topBox">
	        <mt-header title="企业认证">  
              <router-link to="/my-tab" slot="left">  
                <mt-button icon="back"></mt-button>  
              </router-link> 
            </mt-header>
            <div class="navBox">
            	<span class="active">企业信息</span><span class="act-icon">></span>
            	<span>法人信息</span><span>></span>
            	<span>授权人信息</span>
            </div>
    
	    </div>
    </div>
    <div class="bg-bottom">
      <div class="corInfoBox">
		<div class="corInfo">
			<div>
				<mt-field label="企业名称" placeholder="请输入企业名称" v-model="corName"></mt-field>
			</div>
			<div>
				<mt-field label="企业电话" placeholder="请输入企业电话" type="tel" v-model="corPhone"></mt-field>
			</div>
			<div>
				<mt-field label="企业地址" placeholder="请输入企业地址" v-model="corAddress"></mt-field>
			</div>
			<div>
				<mt-field label="营业执照" placeholder="请输入营业执照" type="tel" v-model="corPermit"></mt-field>
			</div>
			<div>
				<el-upload class="upload-demo" action="" :auto-upload='false' :on-change='changeUpload'>  
	        <el-button type="primary"><img :src="imgSrc" /></el-button>
				</el-upload>
			</div>
			<p>上传营业执照</p>
		</div>
		<router-link to="/leg-info" class="next">下一步</router-link>
	  </div>
    </div>
</div>	
</template>

<script>
	export default{
		data(){
			return{
				corName: "",
				corPhone: "",
				corAddress: "",
				corPermit: "",
				imgSrc: "../../static/img/carmera.png"
			}
		},
		methods:{
			changeUpload: function(file, fileList) {  
        this.fileList = fileList;  
        this.$nextTick(  
          () => {  
            let upload_list_li = document.getElementsByClassName('el-upload-list')[0].children;  
            for (let i = 0; i < upload_list_li.length; i++) {  
              this.imgSrc = fileList[i].url;   
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


	.corInfoBox{
		width: 100%;
		position: relative;
		margin-top: -1.1rem;
		.corInfo{
			width: 8.8rem;
			height: 7.73333333rem;
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
			>div:nth-last-of-type(1){
				border-bottom:0;
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
.corInfo div{
    border-bottom: .03rem solid #e8eff5;
}
.corInfo div:nth-last-of-type(1){
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
	.mint-field-core{
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