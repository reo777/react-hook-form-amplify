import React from 'react';
import {Auth} from 'aws-amplify';

export const signUp = (
  value: any,
  setIsShowBanner: React.Dispatch<React.SetStateAction<boolean>>,
  setValue: any
) => {
  try {
    Auth.signUp({
      username: value.userName,
      password: value.password,
      attributes: {
        email: value.email,
      },
    });
    setValue('email', '');
    setValue('password', '');
    setValue('userName', '');
    setIsShowBanner(true);
  } catch (error) {
    console.error(error);
  }
};
