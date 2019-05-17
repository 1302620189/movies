<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
import font from './fonts/iconfont.css'
export default {
  name: 'App'
}
</script>

<style>
*{
  list-style: none;
  margin: 0;
  padding: 0;
}
body,html{
  width:100%;
  height: 100%;
}
#app {
  width:100%;
  height: 100%;

}
.wrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  
}
.main{
    width: 100%;
    flex: 1;
}
</style>
