export interface Todo {
  id: string;
  descripcion: string;
  status: boolean;
}

export type FilterType = 'Todas' | 'Pendientes' | 'Completadas';