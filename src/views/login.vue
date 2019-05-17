<template>
     <div class="wrap"><!-- 登录 -->
        <div class="main">
              <div class="box">
          <input type="text" placeholder="请输入用户名" v-model="user">
          <input type="passwork" placeholder="请输入密码" v-model="psw">
          <button @click="denglu(user,psw)">登陆</button>
    </div>
        </div>
      <my-footer>
      </my-footer>
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
            user:'',
            psw:'',

        }
    },
    computed:{

    },
    methods:{
     denglu(user,psw){
         if(user=='cuiou' && psw=='123'){
            window.localStorage.setItem('userId','1234')
            this.$router.push({name:'film'})
         }else{
             alert('您还没有注册过')
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
.box{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin: 150px 0 0 0;
}
input{
    width: 80%;
    height: 40px; 
    border-radius: 5px;
    border: 1px solid #ccc;
    margin: 10px auto;
}
button{
    width: 80%;
    height: 40px;
    border: 0;
    text-align: center;
    line-height: 40px;
    margin: 10px auto;
     border-radius: 5px;
    background: orange;
    font-size: 16px;
    color: #fff;
}
</style>