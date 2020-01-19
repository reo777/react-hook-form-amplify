import React from 'react';
import {Input, Button} from 'semantic-ui-react';
import {useForm, Controller} from 'react-hook-form';

import * as handlers from './handlers';

import './index.scss';

const defaultValues = {main: ''};

const Form = () => {
  const {handleSubmit, control, reset} = useForm({defaultValues});

  return (
    <div className="main">
      <h1>Form</h1>
      <div className="w__main">
        <form onSubmit={handleSubmit(handlers.submit)}>
          {/* SemanticUIReactはControlledコンポーネントを使用する為、Controllerでラップする */}
          <Controller
            as={<Input />}
            name="main"
            control={control}
            defaultValue=""
          />
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
