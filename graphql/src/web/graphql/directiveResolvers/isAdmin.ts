import { DirectiveResolverFn } from 'graphql-tools';
import { ResolverContext } from 'src/types';
import { throwAuthenticationError } from '../errors';

const isAdmin: DirectiveResolverFn<any, ResolverContext> = (
  next,
  src,
  args,
  { viewer }
) => {
  if (!viewer || !JSON.parse(viewer.userGroup).admin) {
    return throwAuthenticationError(
      'Only the admin has permission to view this content'
    );
  }

  return next();
};

export default isAdmin;
