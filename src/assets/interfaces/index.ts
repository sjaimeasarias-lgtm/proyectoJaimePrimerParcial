export interface Todo {
  id: string;
  descripcion: string;
  status: boolean;
}

export type FilterType = 'todas' | 'pendientes' | 'completadas';