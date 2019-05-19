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
  category?: ProjectCategory;
  characteristics?: ProjectCharacteristic[];
  estimatedCost: number;
  personalMessage: string;
}

export interface GetProjectFeedPayload {
  projects: Project[];
  category?: ProjectCategory;
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
