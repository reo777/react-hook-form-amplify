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
  password: yup.string().required('必須入力です'),
  userName: yup.string().required('必須入力です'),
});

const SignUp = (props: any) => {
  console.log(props);

  // const [isChecked, setIsChecked] = useState(false);
  const {handleSubmit, control, formState, errors, setValue} = useForm({
    defaultValues,
    validationSchema: SignupSchema,
  });

  const [isShowBanner, setIsShowBanner] = useState(false);

  return (
    <div className="a__signup">
      <h1>Sign Up</h1>
      <form
        onSubmit={handleSubmit(value =>
          handlers.signUp(value, setIsShowBanner, setValue)
        )}
      >
        <div>
          <Controller
            as={<TextField label="UseName" onChange={() => {}} />}
            name="userName"
            control={control}
          />
          <p>
            <ErrorMessage errors={errors} name="email" />
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
        <div>
          <Controller
            as={
              <TextField label="Password" onChange={() => {}} type="password" />
            }
            name="password"
            control={control}
          />
          <p>
            <ErrorMessage errors={errors} name="password" />
          </p>
        </div>

        <Button
          primary
          submit
          loading={formState.isSubmitting}
          disabled={formState.isSubmitting}
        >
          SIGN UP
        </Button>
        <Button
          loading={formState.isSubmitting}
          disabled={formState.isSubmitting}
          onClick={() => props.history.push(paths.SignIn.main)}
        >
          SIGN IN
        </Button>
      </form>
      {isShowBanner && (
        <Banner
          title="メールを送信しました"
          status="success"
          onDismiss={() => setIsShowBanner(false)}
        />
      )}
    </div>
  );
};

export default SignUp;
