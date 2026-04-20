<template>
      <div class="backend-layout">
    <el-container>
      <sidebar/>
      <el-container>
        <Navbar/>
        <router-view></router-view>
      </el-container>
    </el-container>
  </div>
</template>
    
<script setup >
import sidebar from './Sidebar.vue';
import Navbar from './Navbar.vue';

</script>
    
<style lang="scss" scoped>
.backend-layout {
    height: 100vh
}
</style>