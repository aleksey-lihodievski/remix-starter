import { http } from '~/api';

export const addTodo = (title: string) => {
  return http.post('/todos/add', { title });
};
