import { ref } from 'vue';
import { defineStore } from 'pinia';

interface UserState {
  nickname: string;
}

const defaultUser: UserState = {
  nickname: '',
}

export const useUserStore = defineStore('user', () => {
  // state
  const userInfo = ref<UserState>(defaultUser);

  // action
  function setNickname(value: string) {
    userInfo.value.nickname = value;
  }

  function resetUser() {
    userInfo.value = defaultUser;
  }

  return { userInfo, setNickname, resetUser };
});
