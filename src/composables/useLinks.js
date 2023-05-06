import { ref } from 'vue';

export  function useLinks() {
  const links = ref([
    {
      name: 'Главная',
      to: '/',
    },
    {
      name: 'Решения dbco',
      to: '/resource',
    },
    {
      name: 'Ресурсы',
      to: '/res',
    },
    {
      name: 'Мой кабинет',
      to: '/register',
    },
  ]);

  return {
    links,
  };
}