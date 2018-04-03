<template>
<div>
  <div class="my-content">
  	<div class="my-box-content">
        <div class="user-msg">
        	<div class="msg-t"></div>
        	<div class="msg-box">
        		<img src="../assets/img/drawable-hdpi/我的-头像.png" alt="">
        		<h2>用户名</h2>
        		<p class="tel">15888888888</p>
        		<div class="shiming"><p>已实名</p></div>
        		<div class="id-tab"><p>切换身份</p> <img src="../assets/img/drawable-hdpi/切换身份.png" alt=""></div>
        	</div>
        </div>
        <div class="user-box">
        	<div class="user-box-m">
        		<img src="../assets/img/drawable-hdpi/个人认证.png" alt="">
        		<p>个人认证</p>
        	</div>
        	<router-link to="cor-info">
              <div class="user-box-m">
        		<img src="../assets/img/drawable-hdpi/企业认证.png" alt="">
        		<p>企业认证</p>
        	  </div>
            </router-link>
        	<div class="user-box-m">
        		<img src="../assets/img/drawable-hdpi/我的签名.png" alt="">
        		<p>我的签名</p>
        	</div>
        	<div class="user-box-m">
        		<img src="../assets/img/drawable-hdpi/安全设置.png" alt="">
        		<p>安全设置</p>
        	</div>
        </div>
  	</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'MyTab',

};
</script>

<style scoped>
*{
	margin: 0px;
	padding: 0px;
}
.my-content{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
	background-color: #60c0ff;
}
.my-box-content{
	margin:0 auto;
    width: 9.7rem;
    height: 16rem;
}
.user-msg{
    width: 9.7rem;
    height: 7rem;
}
.user-box{
	width: 9.7rem;
	height: 10rem;
}
.user-box-m{
	float: left;
	margin-top: .3rem;
	margin-left: .32rem;
	border-radius: .3rem;
	width: 45%;
	height: 42%;
	background: #fff;
}
.user-box-m img{
	padding-top: .25rem;
	width: 75%;
}
.user-box-m p{
	font-size: .4rem;
	font-family: FZLTHJW--GB1-0;
	color: #666;
	margin-top: -0.4rem;
}
.msg-t{
	width: 100%;
	height: 2.3rem;
}
.msg-box{
	margin:0 auto;
	width: 9.0rem;
	height: 4.5rem;
	border-radius: .2rem;
	background: #fff;
}
.msg-box img{
	width: 2rem;
	margin-top: -1rem;
}
.msg-box h2{
    font-size: .5rem;
}
.tel{
    font-size: .4rem;
    color: #808080;
}
.shiming{
	margin: 0 auto;
	width: 2rem;
    background-color: #60c0ff;
    border-radius: 1rem;
}
.shiming p{
	color: #fff;
	font-size: .4rem;
	line-height: .7rem;

}
.id-tab{
    margin-top: .4rem;
	font-size: .4rem;
    color: #60c0ff;
}
.id-tab p{
    margin-left: .8rem;
    display: inline-block;
    font-size: .4rem;
    color: #60c0ff;    
}
.id-tab img{
    position: relative;
    left: -.2rem;
    top: .2rem;
    width: .7rem;
}
</style>