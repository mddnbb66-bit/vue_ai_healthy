<template>
        <div class="navbar">
                <div class="flex-box">
                  <el-button @click = "handleCollapse" >
                    <el-icon><Expand/></el-icon>
                  </el-button>
                  <p class="page-title">页面标题</p>
                </div>
                <div class="flex-box">
                  <el-dropdown @command="handleCommand">
                    <div class="flex-box">
                      <el-avatar :src="avatarUrl"  class="man"/>
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
import { ArrowDown, Expand } from '@element-plus/icons-vue';
import { useAdminStore } from '../stores/admin';
const avatarUrl = new URL('../assets/images/man.jpg', import.meta.url).href

const handleCommand = (command: string) => {
  console.log(command)
  if (command === 'logout') {
    // 处理退出登录逻辑
    console.log('退出登录');
  }
};
const useAdmin = useAdminStore()
const handleCollapse = ()=>{
  useAdmin.toggleContral()
  console.log(useAdmin.contral)
}
</script>
    
<style lang="scss" scoped>

 .navbar {
      display: flex;
      width: 100%;
      height: 64px;
      align-items: center;
      justify-content: space-between;
      padding: 0px 15px;
      box-sizing: border-box;
      background-color: #fff;
      box-shadow: 0 1px 4px rgba(0,21,41,0.08);
      border-bottom: 1px solid #e5e7eb;

    .page-title {
      margin-left: 10px;
      font-size: 20px;
      font-weight: bold;
    }

    .flex-box {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .man {
      margin-right: 10px;
    }
    }

</style>