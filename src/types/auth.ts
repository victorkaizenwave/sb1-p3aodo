export type UserRole = 'client' | 'team-member' | 'executive';

export interface User {
  id: string;
  name: string;
  role: UserRole;
  email: string;
  avatar?: string;
}