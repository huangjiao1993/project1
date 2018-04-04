<template>
    <header>
       <h1>
         {{message}}
       </h1>
    </header>
</template>

<script>
export default {
  name: 'header',
  props:['message'],
  data () {
    return {
     tittle222:"huangjiao ni hao  "
    }
  },
  method:{
    
  },
  beforeCreate:function(){
    alert('组件实例化之前执行的函数');
  },
  // created：function(){
  //   alert('组件实例化完毕但是页面还未显示完毕');
  // },
  beforeMount:function(){
     alert('组件挂在前，页面还没有展示，虚拟Dom已经配置');
  },
  mounted:function(){
     alert('页面显示');
  },
  beforeUpdate:function(){
     alert('组件挂在前，页面还没有展示，虚拟Dom已经配置');
  },
  updated:function(){
     alert('组件更新，此方法执行后，页面显示');
  },
  beforeDestroy:function(){
     alert('组件销毁前');
  },
  destroyed:function(){
     alert('组件销毁后');
  }
  
  

}
</script>


<style scoped>
header{
    background: chocolate;
    padding: 10px;
}
h1{
  color:222;
  text-align: center
}
</style>
