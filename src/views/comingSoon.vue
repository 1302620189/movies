<template>
  <div>
    <div class="con">
       <my-list v-for="(item,index) in come" :key='index' 
        :img="item.poster"
        :name='item.name'
        :grade ='item.grade'
        :nation ='item.nation'
       :runtime ='item.runtime'
        :id ='item.filmId'
        ></my-list>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  props: {},
  components: {},
  data() {
    return {
        come:[],
    };
  },
  computed: {},
  methods: {},
  created() {
      axios.get('/api/come').then((res)=>{
           this.come =res.data.data.films
      })
  },
  mounted() {}
};
</script>
<style scoped lang="">
.con{
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;

}
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