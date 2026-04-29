<template>
    <div class="container">
      <div class="title">
        <div class="back-home">
          <el-icon><back/></el-icon>
          <span>返回首页</span>
        </div>
        <div class="form-title">
          <h2>登录您的账户</h2>
          <p>请输入您的登录信息</p>
        </div>
      </div>
      <div class="form-container">
        <el-form
          ref="from"
          :model="formData"
          label-position="top"
          :rules = "rules"
          >
          <el-form-item label="用户名或者邮箱" prop="username">
            <el-input v-model="formData.username" placeholder="请输入用户名" size="large"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="formData.password" placeholder="请输入密码" show-password size="large"></el-input>
          </el-form-item>
          <el-button type="primary" size="large" @click="handleSubmit(from)" class="btn">登录账户</el-button>
        </el-form>
        <div class="footer">
          <p>还没有账户？ <router-link to="/auth/register">立即注册</router-link></p>
        </div>
      </div>
    </div>
</template>
  
<script setup lang='ts'>
import { ref } from 'vue';
const formData = ref({
  username: '1',
  password: '1'
})
const from = ref(null)
const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' }
  ]
}
//登录逻辑
const handleSubmit = async (formEl:any) =>{
  if(!formEl) return
  await formEl.validate((valid:any,fileds:any)=>{
    // valid代表效验状态，fildes代表效验的表单项
    if(valid){
      //开始调接口
      console.log('验证成功')
    }else{
      console.log('验证失败',fileds)
    }
  })

}
</script>
  
<style>
  .container {
    width: 384px;
    .title {
      .back-home {
        margin-bottom: 60px;
      }
      .form-title {
        text-align: center;
        h2 {
          font-size: 36px;
          margin-bottom: 10px;
        }
        p {
          font-size: 18px;
          color: #6b7280;
        }
      }
    }
  }
  .btn {
    margin-top: 40px;
    width: 100%;
  }
  .footer {
    margin-top: 20px;
    text-align: center;
    p {
      font-size: 14px;
      color: #6b7280;
      a {
        color: #409eff;
      }
    }
  }
</style>