import { AxiosResponse } from 'axios';

import { http } from '~/api';
import { ITodo } from '~/types';

export const getTodos = async () => {
  const { data }: AxiosResponse<ITodo[]> = await http.get('/todos');
  return data;
};
