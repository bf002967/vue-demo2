<template>
  <div class="h-content">
  	<p class="h-title">区块链合同</p>
    <div class="homeBox">
       <router-link to='/' v-for='list in lists' :key='list.id'>
          <img :src='list.src' alt="">
            {{list.name}}
       </router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: 'mHome',
  data(){
    return{
      lists:[
          {
            id: "1",
            name: "上传合同",
            src: "../../static/img/上传合同.png"
          },
          {
            id: "2",
            name: "模板创建",
            src: "../../static/img/模板创建.png"
          },
          {
            id: "3",
            name: "草稿箱(0)",
            src: "../../static/img/草稿箱.png"
          },
          {
            id: "4",
            name: "待修改(0)",
            src: "../../static/img/待修改.png"
          },
          {
            id: "5",
            name: "待签署(0)",
            src: "../../static/img/待签署.png"
          },
          {
            id: "6",
            name: "已签署(0)",
            src: "../../static/img/已签署.png"
          },
          {
            id: "7",
            name: "已生效(0)",
            src: "../../static/img/已生效.png"
          },
          {
            id: "8",
            name: "已失效(0)",
            src: "../../static/img/已失效.png"
          },
      ]
    }
  }
};
</script>

<style scoped>
*{
	margin: 0px;
	padding: 0px;
}

.h-content{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
	background-color: #60c0ff;

}
.h-title{
  padding: .4rem;
	font-family: FZLTHJW--GB1-0;
	font-size: .5rem;
	color: #ffffff;
}
/*.box-content{
	margin:0 auto;
	border-radius: .3rem;
    width: 9rem;
    height: 14.3rem;
	background: #fff;
}
.box-content-m{
	width: 50%;
	height: 25%;
    border: .03rem solid #F0F0F0;
	float: left;
}
.m1{
	border-top-left-radius: .3rem;
}
.m2{
	border-top-right-radius: .3rem;
}
.m3{
	border-bottom-left-radius: .3rem;
}
.m4{
	border-bottom-right-radius: .3rem;
}
.m-box{
	margin: 0 auto;
	width: 80%;
	height: 100%;
}
.m-box img{
	padding-top: .2rem;
	width: 65%;
}
.m-box p{
	font-size: .4rem;
	color: #666;
	margin-top: -0.15rem;
}*/

/*vue-css*/
.homeBox{
    width: 8.8rem;
    height: 13.36333333rem;
    margin: 0 auto;
    background: #ccc;
    border-radius: .33333333rem;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    flex-wrap:wrap;
    a{
      width: 4.39333333rem;
      height: 3.324rem;
      display: block;
      background-color: #fff;
      color: #666;
      font-size: .37333333rem;
      img{
        display: block;
        margin: .52666667rem auto 0;
        width: 1.8rem;
      }
    }
}
</style>