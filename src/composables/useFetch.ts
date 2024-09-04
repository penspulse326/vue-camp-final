import { ref } from 'vue';

export function useFetch() {
  const data = ref<any>(null);
  const error = ref<any>(null);
  const isLoading = ref(false);

  const refetch = async (callback: () => Promise<any>, effects = () => {}) => {
    if (!callback || isLoading.value) {
      return;
    }

    isLoading.value = true;
    error.value = null;

    try {
      const response = await callback();
      data.value = response.data;
    } catch (err: any) {
      error.value = err.response || 'An error occurred';
    } finally {
      isLoading.value = false;

      effects();
    }
  };

  return {
    data,
    error,
    isLoading,
    refetch,
  };
}
