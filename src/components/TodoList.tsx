import React from 'react';
import type { Todo, FilterType } from '../assets/interfaces';
import { TodoItem } from '../components/TodoItem';

interface Props {
  todos: Todo[];
  filter: FilterType;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoList: React.FC<Props> = ({ todos, filter, onToggle, onDelete }) => {
  const filtered = todos.filter(t => filter === 'Todas' || (filter === 'Pendientes' ? !t.status : t.status));

  return (
    <div className="list-group list-group-flush">
      {filtered.map(todo => <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />)}
    </div>
  );
};