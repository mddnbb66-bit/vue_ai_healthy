<template>
  <el-form :model="formData" ref="reSetform">
    <el-row :gutter="24">
      <template v-for="item in formItemAttrs" :key="item.prop">
        <el-col v-bind="item.col">
          <el-form-item :label="item.label" :prop="item.prop">
            <component
              :is="isComp(item.comp)"
              v-model="formData[item.prop]"
              :placeholder="item.placeholder"
            >
              <template v-if="item.comp === 'select'">
                <el-option label="全部" value=""></el-option>
                <el-option
                  v-for="option in item.options"
                  :key="option.value"
                  :label="option.label"
                  :value="option.value"
                />
              </template>
            </component>
          </el-form-item>
        </el-col>
      </template>
    </el-row>

    <el-button type="primary" @click="handelSearch">搜索</el-button>
    <el-button @click="handelReset(reSetform)">重置</el-button>
  </el-form>
</template>
  
<script setup>
import { computed, reactive, toRefs,ref } from 'vue';

const formData = reactive({})
const props = defineProps({
  formItem: {
    type: Array,
    default: () => []
  }
})
const { formItem } = toRefs(props)

const isComp = (comp) => {
  return {
    input: 'el-input',
    select: 'el-select'
  }[comp]
}
// emit 子传父
const emit = defineEmits(['search'])
// 搜索逻辑
const handelSearch = () => {
  emit('search', formData)
}
// 重置逻辑
const reSetform = ref(null)
const handelReset = (formEl) => {
  formEl.resetFields()

emit('search', formData)
}

//处理响应式
const formItemAttrs = computed(()=>{
  const { formItem } = props
  formItem.forEach(item=>{
    item.col = { xs: 24, sm: 12, md: 8, lg: 6, xl: 6 }
  })
  return formItem
})
</script>
  
<style>
  
</style>