import { type FC } from 'react';
import { type FilterType } from '../assets/interfaces';

interface Props {
  filter: FilterType;
  setFilter: (f: FilterType) => void;
}

export const TodoFilters: FC<Props> = ({ filter, setFilter }) => {
  const tabs: FilterType[] = ['Todas', 'Pendientes', 'Completadas'];

  return (
    <div className="d-flex gap-2 mb-4">
      {tabs.map((t) => (
        <button 
          key={t} 
          onClick={() => setFilter(t)} 
          className={`btn btn-sm rounded-pill px-3 ${filter === t ? 'btn-gradient' : 'btn-outline-custom'}`}
        >
          {t}
        </button>
      ))}
    </div>
  );
};