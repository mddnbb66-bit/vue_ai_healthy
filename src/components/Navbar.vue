<template>
        <div class="navbar">
                <div class="flex-box">
                  <el-button>
                    <el-icon><Expand/></el-icon>
                  </el-button>
                  <p class="page-title">页面标题</p>
                </div>
                <div class="flex-box">
                  <el-dropdown @command="handleCommand">
                    <div class="flex-box">
                      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcapng.png" />
                      <p class="user-name">admin</p>
                      <el-icon><ArrowDown /></el-icon>
                    </div>
                    <template #dropdown>
                      <el-dropdown-menu>
                        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                      </el-dropdown-menu>
                    </template>
                  </el-dropdown>
                </div>
        </div>
        
</template>
    
<script setup lang='ts'>
import { Expand } from '@element-plus/icons-vue';

const handleCommand = (command) => {
  console.log(command)
  if (command === 'logout') {
    // 处理退出登录逻辑
    console.log('退出登录');
  }
};

</script>
    
<style>

 .navbar {
      display: flex;
      height: 64px;
      align-items: center;
      justify-content: space-between;
      padding: 0px 15px;
      background-color: #fff;
      box-shadow: 0 1px 4px rgba(0,21,41,0.08);
      border-bottom: 1px solid #e5e7eb;
    .page-title {
      margin-left: 10px;
      font-size: 20px;
      font-weight: bold;
    };
    .flex-box {
    display: flex;
    align-items: center;
    justify-content: center;
  } 
    }

</style>