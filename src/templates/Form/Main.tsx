import React from 'react';
import {Input, Button} from 'semantic-ui-react';
import {useForm, Controller} from 'react-hook-form';
import faker from 'faker';

import * as handlers from './handlers';

import './index.scss';

const defaultValues = {main: ''};

const Form = () => {
  const {handleSubmit, control, reset} = useForm({defaultValues});

  const forms = [];
  for (let index = 0; index < 1000; index++) {
    forms.push(faker.name.firstName());
  }

  return (
    <div className="main">
      <h1>Form</h1>
      <div className="w__main">
        <form onSubmit={handleSubmit(handlers.submit)}>
          {/* SemanticUIReactはControlledコンポーネントを使用する為、Controllerでラップする */}
          {forms.map((form: any, index: number) => {
            return (
              <div key={index}>
                <Controller
                  as={<Input />}
                  name={faker.name.firstName()}
                  control={control}
                  defaultValue=""
                />
              </div>
            );
          })}
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
      </div>
    </div>
  );
};
export default Form;
