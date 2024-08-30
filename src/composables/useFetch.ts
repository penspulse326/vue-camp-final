import { ref } from 'vue';

export function useFetch() {
  const data = ref<any>(null);
  const error = ref<any>(false);
  const isLoading = ref(false);

  const refetch = async (callback: () => Promise<any>) => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await callback();
      data.value = response.data;
    } catch (err: any) {
      error.value = err.response || 'An error occurred';
    } finally {
      isLoading.value = false;
    }
  };

  return {
    data,
    error,
    isLoading,
    refetch
  };
}
