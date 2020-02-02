import Amplify, {Auth} from 'aws-amplify';

export const getUser = async () => {
  const user = await Auth.currentAuthenticatedUser({
    bypassCache: false,
  });

  return user;
};
