<template>
  <div class="backend-layout">
    <el-container class="main-context">
      <Sidebar />
      <el-container class="content-context">
        <el-header class="layout-header">
          <Navbar />
        </el-header>
        <el-main class="layout-main">
          <router-view></router-view>
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
  padding: 16px;
  overflow: auto;
}
</style>