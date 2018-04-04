<template>
  <footer class="footer">
       <h1>
         {{tittle}}
       </h1>
  </footer>
</template>

<script>
export default {
  name: 'footer',
  props:['message'],
  data () {
    return {
     tittle:"我是最小面的"
    }
  }
}
</script>


<style scoped>
footer{
    background: chocolate;
    padding: 10px;
}
h1{
  color:222;
  text-align: center
}
</style>
