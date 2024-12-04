import React, { useState } from 'react';
import { ProjectsList } from './ProjectsList';
import { ProjectDetails } from './ProjectDetails';
import { ProjectFilters } from './ProjectFilters';
import { NewProjectModal } from './NewProjectModal';
import { ProjectSubmissions } from './ProjectSubmissions';
import { Plus } from 'lucide-react';

export const ProjectsDashboard: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [isNewProjectModalOpen, setIsNewProjectModalOpen] = useState(false);

  const projects = [
    {
      id: '1',
      name: 'Social Media Campaign',
      description: 'Comprehensive social media campaign across multiple platforms',
      status: 'in-progress',
      progress: 75,
      dueDate: '2024-03-15',
      client: 'Bright Future Marketing',
      team: [
        {
          id: '1',
          name: 'Sarah Miller',
          role: 'Campaign Manager',
          avatar: 'https://images.unsplash.com/photo-1550525811-e5869dd03032'
        },
        {
          id: '2',
          name: 'John Davis',
          role: 'Content Creator',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
        }
      ],
      tasks: [
        { id: '1', title: 'Create content calendar', completed: true },
        { id: '2', title: 'Design social media templates', completed: true },
        { id: '3', title: 'Schedule posts', completed: false }
      ],
      timeline: [
        { date: '2024-02-01', event: 'Project kickoff' },
        { date: '2024-02-15', event: 'Content strategy approved' },
        { date: '2024-03-01', event: 'First phase launch' }
      ]
    }
  ];

  const submissions = [
    {
      id: '1',
      name: 'Social Media Campaign',
      description: 'Instagram and Facebook campaign for Q2',
      status: 'approved' as const,
      submittedAt: new Date('2024-01-15'),
      feedback: 'Approved! We will start working on this next week.'
    },
    {
      id: '2',
      name: 'Email Marketing Strategy',
      description: 'Develop comprehensive email marketing plan',
      status: 'pending' as const,
      submittedAt: new Date('2024-02-01')
    }
  ];

  const handleNewProject = (projectData: any) => {
    console.log('New project:', projectData);
    setIsNewProjectModalOpen(false);
  };

  const selectedProject = projects.find(p => p.id === selectedProjectId);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
        <button
          onClick={() => setIsNewProjectModalOpen(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Plus className="h-5 w-5 mr-2" />
          New Project
        </button>
      </div>

      <ProjectFilters currentFilter={filter} onFilterChange={setFilter} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <ProjectsList
            projects={projects}
            selectedProjectId={selectedProjectId}
            onProjectSelect={setSelectedProjectId}
          />
          <ProjectSubmissions submissions={submissions} />
        </div>
        {selectedProject && (
          <ProjectDetails project={selectedProject} />
        )}
      </div>

      <NewProjectModal
        isOpen={isNewProjectModalOpen}
        onClose={() => setIsNewProjectModalOpen(false)}
        onSubmit={handleNewProject}
      />
    </div>
  );
};