import React from 'react';

interface Project {
  name: string;
  progress: number;
  status: string;
  team: string[];
}

interface ProjectProgressProps {
  projects: Project[];
}

export const ProjectProgress: React.FC<ProjectProgressProps> = ({ projects }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Active Projects</h2>
      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.name} className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-sm font-medium text-gray-900">{project.name}</h3>
                <p className="text-sm text-gray-500">Team: {project.team.join(', ')}</p>
              </div>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                {project.status}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${project.progress}%` }}
              />
            </div>
            <div className="mt-1 text-right text-xs text-gray-500">
              {project.progress}% Complete
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};