<template>
<div>
   <div class="box">
   	  <img src="../assets/img/drawable-hdpi/联系人-头像.png" alt="">
      <div class="box-msg">
      	   <span>齐天大圣</span><div class="ident"><p>已实名</p></div>
           <div class="tel">18588888888</div>
      </div>
   </div>
</div>
</template>

<script>

export default {
  name: 'LinkPerContent',

};
</script>

<style scoped>
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
    float: left;
    margin-left: .3rem;
    padding-top: 3%;
}
.box-msg span{
	font-family: FZLTHJW--GB1-0;
	font-size: .4rem;
	float: left;
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
.ident p{
	color: #fff;
}
.tel{
	position: relative;
	float: left;
	left: -3.1rem;
	top: .7rem;
	color: #888;
    font-size: .4rem;
}
</style>