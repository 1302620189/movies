<template>
  <div class="wrap">
    <div class="main">
        <div class="swiper-container banner">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in imgList" :key="index">
                    <img :src='item.img' alt="">
                </div>
            </div>
        </div>
        <div class="main-tab">
            <p :class="{'active':flag==true}" @click="addclick">正在热映</p>
            <p :class="{'active':flag==false}" @click="addclick1">即将上映</p>
        </div>
        <router-view/>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
 import Swiper from 'swiper'
 import 'swiper/dist/css/swiper.min.css'
export default {
  props: {},
  components: {},
  data() {
    return {
        flag:true,
      imgList: [
        {
          img:
            "https://static.maizuo.com/v5/upload/24857c7966713e98da78fa7f1f087109.jpg?x-oss-process=image/quality,Q_70"
        },
        {
          img:
            "https://static.maizuo.com/v5/upload/be394a45f76f1069470bdcb2a47f2522.jpg?x-oss-process=image/quality,Q_70"
        },
        {
          img:
            "https://static.maizuo.com/v5/upload/ca64d46d45474fb9ee2fa2732d48eef4.jpg?x-oss-process=image/quality,Q_70"
        },
        {
          img:
            "https://static.maizuo.com/v5/upload/343cc36fb985885d6e34be79b217fc50.jpg?x-oss-process=image/quality,Q_70"
        }
      ]
    };
  },
  computed: {},
  methods: {
      addclick(){
        this.$router.push({name:'hotShowing'})
        this.flag = true
      },
      addclick1(){
        this.$router.push({name:'comingSoon'})
        this.flag =!this.flag
      }
  },
  created() {
      this.$nextTick(()=>{
  new Swiper(".banner",{
          autoplay:true,
          loop:true
        });
      })
     
  },
  mounted() {}
};
</script>
<style scoped lang="">
.banner{
width: 100%;
height: 180px;
}
.banner img{
    width: 100%;
height: 100%;
}
.main-tab{
    width: 100%;
    height: 49px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.main-tab p{
    width: 56px;
    height: 100%;
    font-size: 14px;
    line-height: 49px;
}
.active{
    color: salmon;
     border-bottom: 2px solid salmon;
}
</style>