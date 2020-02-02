import React, {useState} from 'react';
import {Checkbox, TextField, Button, Banner} from '@shopify/polaris';
import {useForm, Controller, ErrorMessage} from 'react-hook-form';
import * as yup from 'yup';

import * as handlers from './handlers';
import paths from './../../../config/paths';

import './index.scss';

const defaultValues = {email: '', password: '', userName: ''};
const SignupSchema = yup.object().shape({
  name: yup.string().required('必須入力です'),
  code: yup.string().required('必須入力です'),
});

const Confirm = (props: any) => {
  const {handleSubmit, control, formState, errors, setValue} = useForm({
    defaultValues,
    validationSchema: SignupSchema,
  });

  return (
    <div className="a__signup">
      <h1>Confirm</h1>
      <form onSubmit={handleSubmit(value => handlers.signUp(value, setValue))}>
        <div>
          <Controller
            as={<TextField label="NAME" onChange={() => {}} />}
            name="name"
            control={control}
          />
          <p>
            <ErrorMessage errors={errors} name="name" />
          </p>
        </div>
        <div>
          <Controller
            as={<TextField label="CODE" onChange={() => {}} />}
            name="code"
            control={control}
          />
          <p>
            <ErrorMessage errors={errors} name="code" />
          </p>
        </div>

        <Button
          primary
          submit
          loading={formState.isSubmitting}
          disabled={formState.isSubmitting}
        >
          SEND
        </Button>
        <Button
          loading={formState.isSubmitting}
          disabled={formState.isSubmitting}
          onClick={() => props.history.push(paths.SignIn.main)}
        >
          SIGN IN
        </Button>
      </form>
    </div>
  );
};

export default Confirm;
