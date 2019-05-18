/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum SourceOfItems {
  DIRECT = "DIRECT",
  LOCAL = "LOCAL",
  OTHER = "OTHER",
}

export interface GetProjectInput {
  id: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface SignupInput {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  group: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
