import React from 'react';
import { Calendar, Users, CheckSquare, Clock } from 'lucide-react';
import { format } from 'date-fns';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface TimelineEvent {
  date: string;
  event: string;
}

interface Project {
  id: string;
  name: string;
  description: string;
  status: string;
  progress: number;
  dueDate: string;
  team: TeamMember[];
  tasks: Task[];
  timeline: TimelineEvent[];
}

interface ProjectDetailsProps {
  project: Project;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
          <span className={`px-3 py-1 text-sm font-medium rounded-full ${
            project.status === 'completed' ? 'bg-green-100 text-green-800' :
            project.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
            'bg-yellow-100 text-yellow-800'
          }`}>
            {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
          </span>
        </div>

        <p className="text-gray-600 mb-6">{project.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Team Members */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-gray-900 font-medium">
              <Users className="h-5 w-5" />
              <h4>Team Members</h4>
            </div>
            <div className="space-y-3">
              {project.team.map((member) => (
                <div key={member.id} className="flex items-center space-x-3">
                  <img
                    src={`${member.avatar}?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80`}
                    alt={member.name}
                    className="h-8 w-8 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{member.name}</p>
                    <p className="text-xs text-gray-500">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tasks */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-gray-900 font-medium">
              <CheckSquare className="h-5 w-5" />
              <h4>Tasks</h4>
            </div>
            <div className="space-y-2">
              {project.tasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50"
                >
                  <input
                    type="checkbox"
                    checked={task.completed}
                    readOnly
                    className="h-4 w-4 text-blue-600 rounded border-gray-300"
                  />
                  <span className={task.completed ? 'text-gray-500 line-through' : 'text-gray-900'}>
                    {task.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-8">
          <div className="flex items-center space-x-2 text-gray-900 font-medium mb-4">
            <Clock className="h-5 w-5" />
            <h4>Timeline</h4>
          </div>
          <div className="relative">
            <div className="absolute top-0 left-4 h-full w-0.5 bg-gray-200" />
            <div className="space-y-6">
              {project.timeline.map((event, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="absolute left-4 -ml-2 h-4 w-4 rounded-full bg-blue-600" />
                  <div className="ml-8">
                    <p className="text-sm font-medium text-gray-900">{event.event}</p>
                    <p className="text-sm text-gray-500">
                      {format(new Date(event.date), 'MMM d, yyyy')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};