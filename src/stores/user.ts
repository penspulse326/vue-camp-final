import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const nickname = ref('');
  
  function setNickname(value: string) {
    nickname.value = value;
  }

  function resetUser() {
    nickname.value = '';
  }

  return { nickname, setNickname ,resetUser }
})
