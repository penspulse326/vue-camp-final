import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const nickname = ref('');
  
  function resetUser() {
    nickname.value = '';
  }

  return { nickname, resetUser }
})
