export enum UserGroup {
  admin = 'admin',
  driver = 'driver',
  solver = 'solver'
}

export type UserGroupMap = { [userGroup in UserGroup]?: boolean };
