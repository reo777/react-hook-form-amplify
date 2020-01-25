import React from 'react';
import {Input, Button} from 'semantic-ui-react';
import {useForm, Controller} from 'react-hook-form';
import {Field, Formik} from 'formik';
import Amplify from 'aws-amplify';
import faker from 'faker';
import {authConfig} from './../../config/env';
import {withAuthenticator} from 'aws-amplify-react';
import * as handlers from './handlers';

import './index.scss';

const defaultValues = {main: ''};
const config = authConfig;
Amplify.configure(config);

const Form = () => {
  const {handleSubmit, control, reset, formState} = useForm({defaultValues});

  // const forms = [];
  // for (let index = 0; index < 1000; index++) {
  //   forms.push(faker.name.firstName());
  // }

  return (
    <div className="main">
      <h1>Form</h1>
      <div className="w__main">
        {/* React Hook Form */}
        <form onSubmit={handleSubmit(handlers.submit)}>
          {/* SemanticUIReactはControlledコンポーネントを使用する為、Controllerでラップする */}
          <div>
            <Controller
              as={<Input />}
              name={faker.name.firstName()}
              control={control}
              defaultValue=""
            />
          </div>

          <Button type="submit">Submit</Button>
          <button
            type="button"
            onClick={() => {
              reset(defaultValues);
            }}
          >
            Reset
          </button>
        </form>

        {/* Formik */}
        {/* {forms.map((form: any, index: number) => {
          return (
            <Formik
              key={index}
              onSubmit={handlers.submit}
              initialValues={{name: ''}}
            >
              {() => {
                return (
                  <div>
                    <Field component={Input} name={faker.name.firstName()} />
                  </div>
                );
              }}
            </Formik>
          );
        })}  */}
      </div>
    </div>
  );
};
export default withAuthenticator(Form);
