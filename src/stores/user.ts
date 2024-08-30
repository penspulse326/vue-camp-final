import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const nickname = ref('');
  const token = ref('');
  
  function resetUser() {
    nickname.value = '';
    token.value = '';
  }

  return { nickname, token, resetUser }
})
