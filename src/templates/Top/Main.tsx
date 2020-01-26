import React, {useState} from 'react';
import {Input, Button} from 'semantic-ui-react';
import {useForm, Controller} from 'react-hook-form';
import {Field, Formik} from 'formik';
import {Auth} from 'aws-amplify';
import faker from 'faker';

import {Animated} from 'react-animated-css';

import * as handlers from './handlers';

import './index.scss';

const defaultValues = {main: ''};

const Form = () => {
  const {handleSubmit, control, reset, formState} = useForm({defaultValues});

  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="main">
      <Animated
        animationIn="rollIn"
        animationOut="rotateOutUpRight"
        animationInDuration={500}
        animationOutDuration={2400}
        isVisible={isVisible}
      >
        <h2>Form</h2>
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
            <button
              type="button"
              onClick={() => {
                Auth.signOut();
              }}
            >
              signOut
            </button>
          </form>
        </div>
      </Animated>
      <Button
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        toggle
      </Button>
    </div>
  );
};
export default Form;
