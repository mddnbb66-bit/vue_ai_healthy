<template>
        <PageHeader>
          <template #title>
            <h1>知识文章</h1>
          </template>
          <template #btn>
            <el-button type="primary">添加</el-button>
          </template>          
        </PageHeader>
        <TableSearch :formItem="formItem" @search="handleSearch"></TableSearch>
</template>
    
<script setup>
import PageHeader from '../components/PageHeader.vue';
import TableSearch from '../components/TableSearch.vue';

const formItem = [
    { comp: 'input', prop: 'title', label: '文章标题', placeholder: '请输入文章标题' },
    {
        comp: 'select', prop: 'categoryId', label: '分类', placeholder: '请选择分类', options: [{
            label: '心理健康基础',
            value: '1'
        },
        {
            label: '情绪管理',
            value: '2'
        }]
    }
]
const  handleSearch = (val) => {
    console.log('搜索条件', val);
}

</script>
    
<style>
    
</style>