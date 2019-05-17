<template>
    <div class="foot">
        <router-link to="/film" tag="dl">
          <dt>
              <i class="iconfont icon-shouye"></i>
          </dt>
          <dd>电影</dd>
        </router-link>
          <router-link to="/cinema" tag="dl">
         <dt>
              <i class="iconfont icon-shouqi-01"></i>
          </dt>
          <dd>影院</dd>
        </router-link>
      <router-link to="/preference" tag="dl">
         <dt>
              <i class="iconfont icon-gouwuche"></i>
          </dt>
          <dd>特惠</dd>
        </router-link>
      <dl>
  <dt @click="clickwode">
              <i class="iconfont icon-wode"></i>
          </dt>
          <dd>我的</dd>
      </dl>
        
       
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
   clickwode(){
     if (window.localStorage.getItem('userId')) {
     this.$router.push({name:'wode'})
     }else{
        this.$router.push({name:'login'})
     }
   }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.foot{
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #fff
}
.foot dl dt i{
    font-size: 26px;
}
dd{
    margin-left: -2px
}
</style>