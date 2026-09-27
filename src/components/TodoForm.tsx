import React, { useState } from 'react';

interface Props { onAdd: (descripcion: string) => void; }

export const TodoForm: React.FC<Props> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text.trim());
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Nueva tarea..." />
      <button type="submit">Agregar</button>
    </form>
  );
};