import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { type Todo } from '../assets/interfaces';
import { getTodos, saveTodos } from '../assets/services/localStorage';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>(getTodos());

  const update = (newTodos: Todo[]) => {
    setTodos(newTodos);
    saveTodos(newTodos);
  };

  const addTodo = (desc: string) => update([...todos, { id: uuidv4(), descripcion: desc, status: false }]);
  const toggleTodo = (id: string) => update(todos.map(t => t.id === id ? { ...t, status: !t.status } : t));
  const deleteTodo = (id: string) => update(todos.filter(t => t.id !== id));

  return { todos, addTodo, toggleTodo, deleteTodo };
};