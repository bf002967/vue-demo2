<template>
<div>
   <div class="box">
        <img src="../assets/img/drawable-hdpi/联系人-头像.png" alt="">
      <div class="box-msg">
            <span>未实名</span>
           <div class="tel">1853333333</div>
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
   color: red;
}

.tel{
   position: relative;
   float: left;
   left: -1.2rem;
   top: .7rem;
   color: #888;
   font-size: .4rem;
}
</style>