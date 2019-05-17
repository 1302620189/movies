<template>
    <div>
      <dl @click='goToDetail'>
   
        <dt>
          <img :src='img'>
        </dt>
        <dd>
          <h3>{{name}}</h3>
          <p class="pingfen">
            观众评分：
            <span>{{grade}}</span>
          </p>
          <span class="zhuyan">{{nation}}</span> | <span>{{runtime}}</span>
          <button class="goupiao">购票</button>
        </dd>
   
      </dl>
    </div>
</template>
<script>
export default {
    props:['img','name','grade','nation','runtime','id'],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
  goToDetail(){
          this.$router.push({name:'detail',params:{id:this.id}})
          console.log(this.id)
      }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
dl{
    width: 100%;
    height: 100px;
    display: flex;
    margin-top: 20px;
}
dl dt{
    width: 80px;
    height: 100%;
}
dl dt img{
    width: 100%;
    height: 100%;
}
dl dd{
    position: relative;
    flex: 1;
    margin-left: 10px;
}
dl dd .pingfen{
    margin: 5px 0;
}
.pingfen span{
    color: orange
}
.goupiao{
    position: absolute;
    left: 70%;
    top: 28%;
    width: 65px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    color: orangered;
    border: 1px solid orangered;
    background: #fff;
    border-radius: 5px;
    outline: none;
}
</style>