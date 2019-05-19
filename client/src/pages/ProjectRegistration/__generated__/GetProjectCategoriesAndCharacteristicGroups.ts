/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProjectCategoriesAndCharacteristicGroups
// ====================================================

export interface GetProjectCategoriesAndCharacteristicGroups_projectCategories {
  __typename: "ProjectCategory";
  id: string;
  name: string;
}

export interface GetProjectCategoriesAndCharacteristicGroups_projectCharacteristicGroups_items {
  __typename: "ProjectCharacteristic";
  id: string;
  name: string;
}

export interface GetProjectCategoriesAndCharacteristicGroups_projectCharacteristicGroups {
  __typename: "ProjectCharacteristicGroup";
  id: string;
  name: string;
  items: GetProjectCategoriesAndCharacteristicGroups_projectCharacteristicGroups_items[];
}

export interface GetProjectCategoriesAndCharacteristicGroups {
  projectCategories: GetProjectCategoriesAndCharacteristicGroups_projectCategories[];
  projectCharacteristicGroups: GetProjectCategoriesAndCharacteristicGroups_projectCharacteristicGroups[];
}
