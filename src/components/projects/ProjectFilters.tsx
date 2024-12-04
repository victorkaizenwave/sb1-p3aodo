import React from 'react';

interface ProjectFiltersProps {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
}

export const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  currentFilter,
  onFilterChange,
}) => {
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'in-progress', label: 'In Progress' },
    { id: 'planning', label: 'Planning' },
    { id: 'completed', label: 'Completed' },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="sm:hidden">
        <select
          value={currentFilter}
          onChange={(e) => onFilterChange(e.target.value)}
          className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
        >
          {filters.map((filter) => (
            <option key={filter.id} value={filter.id}>
              {filter.label}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav className="flex space-x-4" aria-label="Project filters">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => onFilterChange(filter.id)}
              className={`${
                currentFilter === filter.id
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-500 hover:text-gray-700'
              } px-3 py-2 rounded-md text-sm font-medium`}
            >
              {filter.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};