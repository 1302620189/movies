<template>
  <div>
    <div class="con">
        <my-list v-for="(item,index) in hot" :key='index' 
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
  props: [],
  components: {},
  data() {
    return {
        hot:[]
    };
  },
  computed: {},
  methods: {
    
  },
  created() {
      axios.get('/api/hot').then((res)=>{
           this.hot =res.data.data.films
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

</style>