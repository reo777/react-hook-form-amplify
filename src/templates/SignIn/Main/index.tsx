import React, {useState} from 'react';
import {Checkbox, TextField, Button, Banner} from '@shopify/polaris';
import {useForm, Controller, ErrorMessage} from 'react-hook-form';
import * as yup from 'yup';

import * as handlers from './handlers';
import paths from './../../../config/paths';

import './index.scss';

const defaultValues = {email: '', password: '', userName: ''};
const SignupSchema = yup.object().shape({
  email: yup.string().required('必須入力です'),
  userName: yup.string().required('必須入力です'),
});

const SignIn = (props: any) => {
  const {handleSubmit, control, formState, errors, setValue} = useForm({
    defaultValues,
    validationSchema: SignupSchema,
  });

  return (
    <div className="a__signup">
      <h1>Sign In</h1>
      <form
        onSubmit={handleSubmit(value =>
          handlers.signIn(value, setValue, props.history)
        )}
      >
        <div>
          <Controller
            as={<TextField label="UseName" onChange={() => {}} />}
            name="userName"
            control={control}
          />
          <p>
            <ErrorMessage errors={errors} name="userName" />
          </p>
        </div>
        <div>
          <Controller
            as={<TextField label="Email" onChange={() => {}} />}
            name="email"
            control={control}
          />
          <p>
            <ErrorMessage errors={errors} name="email" />
          </p>
        </div>

        <Button
          primary
          submit
          loading={formState.isSubmitting}
          disabled={formState.isSubmitting}
        >
          SIGN IN
        </Button>
        <Button
          loading={formState.isSubmitting}
          disabled={formState.isSubmitting}
          onClick={() => props.history.push(paths.SignUp.main)}
        >
          SIGN UP
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
