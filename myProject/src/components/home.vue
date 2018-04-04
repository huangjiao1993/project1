<template>
  <div class="home">
    <p>Do you like me? {{childWords}}</p>
    <aaa   v-bind:message="message" @childsay="childsay"></aaa>
    <Users v-bind:userName="userName"></Users>
    <bbbb  v-bind:message="message"></bbbb>
  </div>
</template>
//局部注册组件
import Users from './components/Users'
import aaa from './components/Header'
import bbbb from './components/Footer'
<script>
export default {
  name: 'home',
   data(){
      return {
        message:"这是我的第一个message项目 传递给我的孩子",
        userName:'我要传递给user组件',
        childWords: ""
      }
  },
  components:{
   "Users":Users,
   "aaa" :aaa,
   "bbbb" :bbbb
  }, 
  methods:{
   childsay: function (msg){
    this.childWords = msg
  }
  },
  created(){
    this.$http.get("jsonplaceholder.typicode.com/users").then((data)=>{
      this.users=data.body;
    })
  }
}
</script>
<style scoped>
    
</style>

