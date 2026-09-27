import React, { useState } from 'react';
import type { FilterType } from './assets/interfaces';
import { useTodos } from './hooks/useTodos';
import { TodoForm } from './components/TodoForm';
import { TodoFilters } from './components/TodoFilters';
import { TodoList } from './components/TodoList';
import './index.css';

const App: React.FC = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
  const [filter, setFilter] = useState<FilterType>('todas');

  return (
    <div className="app-container">
      <h1>Mi Lista de Tareas</h1>
      <TodoForm onAdd={addTodo} />
      <TodoFilters filter={filter} setFilter={setFilter} />
      <TodoList todos={todos} filter={filter} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
};

export default App;