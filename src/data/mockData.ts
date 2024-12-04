import { Client, Project, Task, Communication, Transaction } from '../types/database';

export const mockClients: Client[] = [
  {
    id: '1',
    name: 'Bright Future Marketing',
    industry: 'Marketing Agency',
    status: 'active',
    contactPerson: 'Sarah Wilson',
    email: 'sarah@brightfuture.com',
    phone: '(555) 123-4567',
    avatar: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    projects: ['1', '2'],
    teamMembers: ['1', '2'],
    brandResources: [],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-02-15'),
    createdBy: '1'
  },
  // Add more mock clients...
];

export const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Q1 Marketing Campaign',
    description: 'Comprehensive marketing campaign for Q1 2024',
    status: 'in-progress',
    progress: 75,
    startDate: new Date('2024-01-15'),
    dueDate: new Date('2024-03-31'),
    clientId: '1',
    teamMembers: ['1', '2'],
    tasks: ['1', '2'],
    budget: 25000,
    type: 'marketing',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-02-15'),
    createdBy: '1'
  },
  // Add more mock projects...
];

// Add more mock data for tasks, communications, and transactions...