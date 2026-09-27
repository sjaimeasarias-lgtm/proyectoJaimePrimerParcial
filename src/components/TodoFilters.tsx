import React from 'react';
import { type FilterType } from '../assets/interfaces';

interface Props {
  filter: FilterType;
  setFilter: (f: FilterType) => void;
}

export const TodoFilters: React.FC<Props> = ({ filter, setFilter }) => {
  const tabs: FilterType[] = ['todas', 'pendientes', 'completadas'];

  return (
    <div className="filters-container">
      <div className="tabs">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={filter === t ? 'active' : ''}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};