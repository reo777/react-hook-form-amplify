import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';

import enhance from './enhancer';
import * as routing from './routing';
import * as hooks from './hooks';

const Routes: React.FC<any> = props => {
  const [loading, setLoading] = useState(true);
  const [isAuthed, setIsAuthed] = useState(false);

  hooks.useMount(setLoading, setIsAuthed);

  if (loading) {
    return null;
  }

  if (!isAuthed) {
    return (
      <div>
        <Switch>
          {routing.before.map((route: AppRoute) => {
            return (
              <Route
                component={route.component}
                exact={route.exact}
                key={route.path}
                path={route.path}
              />
            );
          })}
        </Switch>
      </div>
    );
  }

  return (
    <div>
      <Switch>
        {routing.after.map((route: AppRoute) => {
          return (
            <Route
              component={route.component}
              exact={route.exact}
              key={route.path}
              path={route.path}
            />
          );
        })}
      </Switch>
    </div>
  );
};

export default enhance((props: any) => <Routes {...props} />);
