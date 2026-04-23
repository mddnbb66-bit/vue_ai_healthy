//左上角的那个三框
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAdminStore = defineStore("admin",()=>{
  const contral = ref(false)

  const toggleContral = ()=>{
    contral.value = !contral.value
  }
  return{
    contral,
    toggleContral
  }
})