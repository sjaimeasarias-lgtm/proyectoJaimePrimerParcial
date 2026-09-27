import { type FC } from 'react';
import type { Todo } from '../assets/interfaces';

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem: FC<Props> = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="list-group-item d-flex align-items-center gap-3 py-3 px-0 border-bottom">
      <input type="checkbox" className="form-check-input mt-0" checked={todo.status} onChange={() => onToggle(todo.id)} />
      <span className={`flex-grow-1 ${todo.status ? 'text-decoration-line-through text-muted' : ''}`}>
        {todo.descripcion}
      </span>
      <span className={`badge rounded-pill ${todo.status ? 'bg-success bg-opacity-10 text-success' : 'bg-secondary bg-opacity-10 text-secondary'}`}>
        {todo.status ? 'Completada' : 'Pendiente'}
      </span>
      <div className="d-flex gap-2">
        <button onClick={() => onToggle(todo.id)} className="btn btn-sm btn-outline-success">✔</button>
        <button onClick={() => onDelete(todo.id)} className="btn btn-sm btn-outline-danger">🗑</button>
      </div>
    </div>
  );
};