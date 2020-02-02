import React, {useState} from 'react';
import {Switch, Button, Input} from 'antd';
import {useForm, Controller} from 'react-hook-form';
import {Auth} from 'aws-amplify';
import faker from 'faker';

import {Animated} from 'react-animated-css';

import * as handlers from './handlers';

import './index.scss';

const defaultValues = {main: ''};

const Main = () => {
  const {handleSubmit, control, reset} = useForm({defaultValues});

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

            <Button shape="round">Submit</Button>
            <Button
              type="dashed"
              shape="round"
              onClick={() => {
                reset(defaultValues);
              }}
            >
              Reset
            </Button>
            <Button
              onClick={() => {
                Auth.signOut();
              }}
            >
              signOut
            </Button>
          </form>
        </div>
      </Animated>

      <Switch
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      />
    </div>
  );
};
export default Main;
