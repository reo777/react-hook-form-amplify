import React from 'react';
import {Auth} from 'aws-amplify';

export const signUp = (value: any, setValue: any) => {
  try {
    Auth.confirmSignUp(value.name, value.code);
    setValue('name', '');
    setValue('code', '');
  } catch (err) {
    console.error(err);
  }
};
