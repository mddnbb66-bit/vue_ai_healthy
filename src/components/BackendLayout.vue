<template>
  <div class="backend-layout">
    <el-container class="main-context">
      <Sidebar />
      <el-container class="content-context">
        <el-header class="layout-header">
          <Navbar />
        </el-header>
        <el-main class="layout-main">
          <div class="content-container">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
    
<script setup >
import Sidebar from './Sidebar.vue';
import Navbar from './Navbar.vue';

</script>
    
<style lang="scss" scoped>
.backend-layout {
  height: 100vh;
}

.main-context {
  height: 100%;
  overflow: hidden;
}

.content-context {
  height: 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.layout-header {
  height: 64px !important;
  padding: 0;
}

.layout-main {
  flex: 1;
  min-height: 0;
  padding: 16px;
  overflow: auto;
  box-sizing: border-box;
}

.content-container {
  min-height: 100%;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0,21,41,0.08);
  padding: 16px;
  box-sizing: border-box;
}
</style>