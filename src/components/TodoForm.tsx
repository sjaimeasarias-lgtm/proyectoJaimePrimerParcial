import React, { useState, type FC } from 'react';

interface Props { onAdd: (descripcion: string) => void; }

export const TodoForm: FC<Props> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text.trim());
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2 mb-4">
      <input className="form-control" value={text} onChange={(e) => setText(e.target.value)} placeholder="Nueva tarea..." />
      <button type="submit" className="btn btn-gradient px-4">Agregar</button>
    </form>
  );
};