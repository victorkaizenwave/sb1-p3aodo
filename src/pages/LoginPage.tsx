import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, Users, Crown } from 'lucide-react';
import { RoleWidget } from '../components/auth/RoleWidget';
import { WelcomeHeader } from '../components/auth/WelcomeHeader';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const roles = [
    {
      icon: Briefcase,
      title: 'Client Portal',
      description: 'Access your projects and analytics',
      path: '/client'
    },
    {
      icon: Users,
      title: 'Team Member Dashboard',
      description: 'Manage tasks and collaborate',
      path: '/team'
    },
    {
      icon: Crown,
      title: 'Executive Dashboard',
      description: 'Overview of all operations',
      path: '/executive'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 sm:py-20">
          <WelcomeHeader />
          
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {roles.map((role) => (
                <RoleWidget
                  key={role.title}
                  icon={role.icon}
                  title={role.title}
                  description={role.description}
                  onClick={() => navigate(role.path)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};