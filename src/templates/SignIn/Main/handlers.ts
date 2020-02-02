import React from 'react';
import {Auth} from 'aws-amplify';

import paths from './../../../config/paths';

export const signIn = (value: any, setValue: any, history: any) => {
  try {
    Auth.signIn({
      username: value.userName,
      password: value.password,
    });
    setValue('email', '');
    setValue('password', '');
    history.push(paths.Top.main);
  } catch (error) {
    console.error(error);
  }
};
