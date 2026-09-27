import React from 'react';
import type { Todo } from '../assets/interfaces';

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem: React.FC<Props> = ({ todo, onToggle, onDelete }) => {
  return (
    <div className={`todo-item ${todo.status ? 'completed' : ''}`}>
      <input type="checkbox" checked={todo.status} onChange={() => onToggle(todo.id)} />
      <span className="desc">{todo.descripcion}</span>
      <span className={`badge ${todo.status ? 'success' : 'pending'}`}>
        {todo.status ? 'Completada' : 'Pendiente'}
      </span>
      <div className="actions">
        <button onClick={() => onToggle(todo.id)} className="btn-check">✔</button>
        <button onClick={() => onDelete(todo.id)} className="btn-delete">🗑</button>
      </div>
    </div>
  );
};