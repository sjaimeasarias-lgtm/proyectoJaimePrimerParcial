import { useState, type FC } from 'react';
import type { FilterType } from './assets/interfaces';
import { useTodos } from './hooks/useTodos';
import { TodoForm } from './components/TodoForm';
import { TodoFilters } from './components/TodoFilters';
import { TodoList } from './components/TodoList';
import './index.css';

const App: FC = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
  const [filter, setFilter] = useState<FilterType>('Todas');

  return (
    <div className="container my-5" style={{ maxWidth: '700px' }}>
      <div className="card shadow-lg p-4">
        <h4 className="fw-bold mb-4">✅ Mi Lista de Tareas</h4>
        <TodoForm onAdd={addTodo} />
        <TodoFilters filter={filter} setFilter={setFilter} />
        <TodoList todos={todos} filter={filter} onToggle={toggleTodo} onDelete={deleteTodo} />
      </div>
    </div>
  );
};

export default App;