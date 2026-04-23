<template>
    <div class="page-header">
      <div class="page-title">
        <slot name="title">默认内容</slot>
      </div>
      <div class="action-btn">
        <slot name='btn'></slot>
      </div>
    </div>
</template>
  
<script setup lang='ts'>
  
</script>
  
<style scoped lang='scss'>
.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;

  .page-title {
    font-size: 24px;
    font-weight: 700;
    color: #111827;
    line-height: 1.2;

    :deep(h1) {
      margin: 0;
      font-size: 32px;
      font-weight: 700;
      color: #111827;
      line-height: 1.2;
    }
  }

  .action-btn {
    display: flex;
    align-items: center;
    gap: 8px;
  }
}
</style>