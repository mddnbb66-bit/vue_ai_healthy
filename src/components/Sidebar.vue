<template>
        <el-aside :width="useAdmin.contral ? '264px' : '64px'"  >
            <el-menu 
        default-active="2"
        class="mian-menu"
        @open="handleOpen"
        @close="handleClose"
        :collapse="!useAdmin.contral"
        :collapse-transition="false"
      >
        <div class="brand" >
          <el-image :src="imageURL" class = 'brand-img'></el-image>
          <div class="info-card" v-show="useAdmin.contral">
            <h1 class="brand-title">ai心理健康助手</h1>
            <p class="brand-subtitle">管理后台</p>
          </div>
        </div>
        <el-menu-item @click="select" v-for="item in router.options.routes[0].children"  :key="item.path" :index="item.path">
          <el-icon><component :is="item.meta.icon"/></el-icon>
          <span>{{ item.meta.title }}</span>
        </el-menu-item>

      </el-menu>
        </el-aside>
</template>
    
<script setup lang='ts'>
import { useAdminStore } from '../stores/admin';
import { useRouter } from 'vue-router';
const router = useRouter()
const imageURL = new URL('@/assets/images/机器人.png',import.meta.url).href
//跳转逻辑
const select = (val)=>{
  const currenPath = val.index
  console.log(currenPath)
  const beasePath = router.options.routes[0].path
  console.log(router.options.routes[0].path)
  console.log(`${beasePath}/${currenPath}`)
  router.push(`${beasePath}/${currenPath}`)
}
console.log(`router`,router)
//收起和展开逻辑
const useAdmin = useAdminStore()
</script>
    
<style lang="scss" scoped>
.mian-menu{
  height: 100%;
    .brand {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      background-color: #fff;
      border-bottom: 1px solid #e5e7eb;
    }
    .brand-img {
      margin-right: 10px;
      width: 50px;
    }
    .info-card {
    .brand-title {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 5px;
        color: #1f2937;
    }

    .brand-subtitle {
        font-size: 14px;
        color: #6b7280;
    }
}
}

</style>