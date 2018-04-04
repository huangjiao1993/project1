<template>
  <div class="hello">
      <div class="login">
          <p class="tit-p"><img src="../assets/user.png"></p>
          <div class="input-class" v-on:click="age--" v-on:keyup.enter=""  >
            <span >用户名</span>
            <input type="" name="" v-model="name">
          </div>
          <div class="input-class" v-on:click="age++">
            <span>密码</span>
            <input type="password" name="" v-model="pass">
          </div>
          <!-- v-bind:class="{changeColor:changeColor}"-->
          <div class="btn" ref="age" v-on:click="alert"  >
            <button type="button" @click.once="loginFn">登录</button>
          </div>
          <!--图片-->
          <div id="bag" v-bind:class="{vlogo:true,vbind:ended}">
             <div></div>
          </div>
          <!--进度情况-->
          <div id="bag-health">
              <div v-bind:style="{width:health+'%'}"></div>
          </div>
          <!--控制按钮-->
          <div  id="controls">
              <button v-on:click="punch">使劲敲</button>
              <button v-on:click="restart" >重新开始</button>
          </div>
          <div id="xyFn" ref="name" v-on:mousemove="updateXY()"  v-on:keyup.alt.enter="login" >
            {{x}},{{y}}
            <span  v-on:mousemove.stop="">stop moving </span>
          </div>
          <div > </div>
          <button v-on:click="error!=error">Toggle Error</button>
          <button v-on:click="success!=success">Toggle Error</button>
          <p v-if="error"  v-bind:style="{width:10+'%'}" >网络连接错误404</p>
          <p v-else-if="success" >网络连接成功200</p> 
          
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      name:"",
      pass:"",
      x:0,
      y:0,
      health:100,
      ended:false
    }
  },
  methods:{
    alert(){
      alert("======");
    },
    punch(){
        this.health-=10;
        if(this.health<=0){
        this.ended=true;
        }
    },
    restart(){
       this.health=10;
       this.ended=false;
    },
    updateXY(event){
           this.x=event.offsetX;
           this.y=event.offsetY;
    },
    loginFn(){
        //this.$api.post(,)
        let that = this;
        this.$api({
          method: 'post',
          url:'',
          data:{
            name: this.name,
            pass: this.pass
          }
        }).
        then(function (response) {
         this.name
          if(response.data.auth=="ok"){
            let code =  response.data.usercode;
            sessionStorage.setItem("usercode",code.name);
            sessionStorage.setItem("comcode",response.data.comcode);
            that.$router.push({path:"/home"})
          }
        })
        .catch(function (error) {
         
        });
    }
  }
}
</script>
<style scoped> 
   
     #bag{
       width:200px;
       height: 200px;
       margin:0 auto;
       background-size:80%;
     }
     .vlogo{
      background:url("../assets/user.png") center  no-repeat;
     }
    #bag-health{
      width:200px;
      border:2px #000 solid;
      margin:0 auto 20px auto;
    }
    #bag-health div{
        height:20px;
        background:crimson;
    }
     .xyFn{
       width:200px;
       height:200px;
     }
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

    #controls{
      width:200px;
      margin:0 auto;
    }
    #controls button{
      margin-left:20px;
    }
      .vbind{
      background:url("../assets/logo.png") center no-repeat;
     }

</style>

