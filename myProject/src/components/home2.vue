<template>
  <div class="hello">
      <div class="login">
          <p class="tit-p"><img src="../assets/user.png"> <span class="span">归属机构：{{comcode}}</span><span class="span">用户名：{{name}}</span></p>
          <p> <p class="content">欢迎光临考试系统...</p></p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'home2',
  data () {
    return {
      name:sessionStorage.getItem("usercode"),
      comcode:sessionStorage.getItem("comcode")
    }
  },
  methods:{ 
   
  }
}
</script>
<style scoped>
    .login{
      width: 500px;
      height: 350px;
      border: 1px solid #ccc;
      position: absolute;
      box-sizing: border-box;
      top:50%;
      left:50%;
      margin:-200px 0 0 -250px;
      border-radius: 4px;
      background: #eeeeee17;

    }
    .tit-p{
      height: 50px;
      line-height: 50px;
      text-indent: 20px;
      border-bottom: 1px solid #ccc;
      background: #eeeeee17;
    }
    .input-class{
      height: 100px;
      border-bottom: 1px solid #ccc;
      background: #eeeeee17;
      line-height: 100px;
    }
    .input-class input{
      width: 300px;
      height: 36px;
    }
    .input-class span{
      display: inline-block;
      width: 100px;
      text-align: right;
      margin-right: 10px;
    }
    .btn{
      text-align: center;
    }
    .btn button{
      width: 150px;
      height: 40px;
      margin-top: 20px;
      border-radius: 5px;
      border: 1px solid #ccc;
      outline: none;
      font-size: 16px;
      cursor: pointer;
      background-color: #fff;
    }
    .span{
      float: right;
      margin-right: 10px;
    }
    .content{
      line-height: 300px;
      text-align: center;
    }
</style>

