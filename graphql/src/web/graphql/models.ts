export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  displayName?: string;
}

export interface SignupPayload {
  user: User;
}

export interface LoginPayload {
  user: User;
}

export interface CreateProjectPayload {
  project: Project;
}

export interface Project {
  id: string;
  title: string;
}

export interface GetProjectFeedPayload {
  projects: Project[];
  category?: ProjectCategory;
}

export interface ProjectCategory {
  id: string;
  name: string;
}
