import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  client: string;
  progress: number;
  dueDate: string;
}

interface ProjectsWidgetProps {
  projects: Project[];
}

export const ProjectsWidget: React.FC<ProjectsWidgetProps> = ({ projects }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-gray-900">Active Projects</h2>
        <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center">
          View All <ArrowRight className="h-4 w-4 ml-1" />
        </button>
      </div>
      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-sm font-medium text-gray-900">{project.name}</h3>
                <p className="text-xs text-gray-500">Client: {project.client}</p>
              </div>
              <span className="text-xs text-gray-500">Due: {project.dueDate}</span>
            </div>
            <div className="mt-2">
              <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};