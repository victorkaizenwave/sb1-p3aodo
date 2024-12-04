import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle, AlertCircle } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  description: string;
  status: string;
  progress: number;
  dueDate: string;
  client: string;
}

interface ProjectsListProps {
  projects: Project[];
  selectedProjectId: string | null;
  onProjectSelect: (id: string) => void;
}

export const ProjectsList: React.FC<ProjectsListProps> = ({
  projects,
  selectedProjectId,
  onProjectSelect,
}) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'in-progress':
        return <Clock className="h-5 w-5 text-blue-500" />;
      case 'planning':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="divide-y divide-gray-200">
        {projects.map((project) => (
          <motion.button
            key={project.id}
            whileHover={{ backgroundColor: 'rgba(243, 244, 246, 0.5)' }}
            onClick={() => onProjectSelect(project.id)}
            className={`w-full text-left p-4 transition-colors ${
              selectedProjectId === project.id ? 'bg-blue-50' : ''
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                  {getStatusIcon(project.status)}
                  <h3 className="text-sm font-medium text-gray-900 truncate">
                    {project.name}
                  </h3>
                </div>
                <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-2 flex items-center space-x-4">
                  <span className="text-xs text-gray-500">Due: {project.dueDate}</span>
                  <span className="text-xs text-gray-500">Client: {project.client}</span>
                </div>
              </div>
              <div className="ml-4 flex-shrink-0">
                <div className="mt-1">
                  <div className="flex items-center">
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                    <span className="ml-2 text-xs text-gray-500">
                      {project.progress}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};