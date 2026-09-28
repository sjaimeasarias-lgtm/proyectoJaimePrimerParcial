import { type FC } from 'react';
import type { Todo } from '../assets/interfaces';

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem: FC<Props> = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="d-flex align-items-center gap-3 p-3 mb-2 bg-light rounded-3 shadow-sm">
      <input type="checkbox" className="form-check-input mt-0" checked={todo.status} onChange={() => onToggle(todo.id)} />
      <span className={`flex-grow-1 ${todo.status ? 'text-decoration-line-through text-muted' : ''}`}>
        {todo.descripcion}
      </span>
      <span className={`badge rounded-pill ${todo.status ? 'bg-success bg-opacity-25 text-success' : 'bg-secondary bg-opacity-25 text-secondary'}`}>
        {todo.status ? 'Completada' : 'Pendiente'}
      </span>
      <div className="d-flex gap-2">
        <button onClick={() => onToggle(todo.id)} className="btn btn-sm btn-outline-success border-0">✔</button>
        <button onClick={() => onDelete(todo.id)} className="btn btn-sm btn-outline-danger border-0">🗑</button>
      </div>
    </div>
  );
};