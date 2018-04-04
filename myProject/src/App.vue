<!--模板 html结构  index.html --> main.js-->App.vue-->
<template>
  <div id="app">
     <router-link to="/home">home</router-link>
     <router-link to="/HelloWorld">HelloWorld</router-link>
     <!-- <a href="/home">home</a>
     <a href="/HelloWorld">HelloWorld</a> -->
  </div>
</template>
<!--处理逻辑-->
<script>

export default {
  name: 'App',
  data(){
      return {
        
      }
  }
}
</script>

<!--样式-->
<style>

</style>
