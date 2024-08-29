import { ref } from 'vue';
import { api } from '@/api';
import type { Method } from 'axios';

export function useFetch(
  url: string,
  method: Method,
  body?: any
) {
  const data = ref<any>(null);
  const error = ref<any>(false);
  const isLoading = ref(false);

  const fetchData = async () => {
    isLoading.value = true;
    error.value = null;

    const options = {
      method,
      url,
      data: body
    };

    try {
      const response = await api(url, options);
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
    refetch: fetchData
  };
}
