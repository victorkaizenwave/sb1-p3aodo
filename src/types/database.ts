import { UserRole } from './auth';

export interface DatabaseRecord {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
}

export interface Client extends DatabaseRecord {
  name: string;
  industry: string;
  status: 'active' | 'inactive';
  contactPerson: string;
  email: string;
  phone: string;
  avatar: string;
  projects: string[]; // Project IDs
  teamMembers: string[]; // User IDs
  brandResources: BrandResource[];
}

export interface Project extends DatabaseRecord {
  name: string;
  description: string;
  status: 'planning' | 'in-progress' | 'review' | 'completed';
  progress: number;
  startDate: Date;
  dueDate: Date;
  clientId: string;
  teamMembers: string[]; // User IDs
  tasks: string[]; // Task IDs
  budget: number;
  type: 'standard' | 'social-media' | 'marketing' | 'custom';
}

export interface Task extends DatabaseRecord {
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  dueDate: Date;
  assignedTo: string; // User ID
  projectId: string;
  clientId: string;
}

export interface User extends DatabaseRecord {
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
  clients: string[]; // Client IDs
  projects: string[]; // Project IDs
  tasks: string[]; // Task IDs
}

export interface Communication extends DatabaseRecord {
  type: 'message' | 'email' | 'call';
  sender: string; // User ID
  recipients: string[]; // User IDs
  content: string;
  attachments?: string[];
  clientId?: string;
  projectId?: string;
}

export interface BrandResource extends DatabaseRecord {
  name: string;
  type: 'logo' | 'guideline' | 'template' | 'asset';
  url: string;
  fileType: string;
  size: string;
  clientId: string;
}

export interface Transaction extends DatabaseRecord {
  type: 'payment' | 'invoice' | 'expense';
  amount: number;
  status: 'pending' | 'completed' | 'cancelled';
  date: Date;
  description: string;
  clientId: string;
  projectId?: string;
}