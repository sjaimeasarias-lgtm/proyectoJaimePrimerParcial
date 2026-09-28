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
    <div className="container d-flex justify-content-center align-items-center min-vh-100 py-4">
      <div className="card p-4" style={{ width: '100%', maxWidth: '550px' }}>
        <h4 className="fw-bold mb-4 text-white">Mi Lista de Tareas</h4>
        <TodoForm onAdd={addTodo} />
        <TodoFilters filter={filter} setFilter={setFilter} />
        <TodoList todos={todos} filter={filter} onToggle={toggleTodo} onDelete={deleteTodo} />
      </div>
    </div>
  );
};

export default App;