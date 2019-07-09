export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  displayName?: string;
  userGroup: string;
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
  amountOfKidsHelped: number;
  whyIsThisImportant: string;
  meaningToTheKids: string;
  microNeed: string;
  numberOfItems: number;
  sourceOfItems: SourceOfItems;
  estimatedCost: number;
  personalMessage: string;
  state: ProjectState;

  category?: ProjectCategory;
  characteristics?: ProjectCharacteristic[];
}

export interface ProjectFeed {
  projects: Project[];
}

export interface ProjectCategory {
  id: string;
  name: string;
}

export interface GetProjectPayload {
  project: Project;
}

export interface ProjectCharacteristicGroup {
  id: string;
  name: string;
}

export interface ProjectCharacteristic {
  id: string;
  name: string;
  group?: ProjectCharacteristicGroup;
}

type SourceOfItems = 'LOCAL' | 'DIRECT' | 'OTHER';
type ProjectState = 'PENDING' | 'APPROVED' | 'SOLVING' | 'COMPLETED';
