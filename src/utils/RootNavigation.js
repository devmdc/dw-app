import React from 'react';
import {CommonActions} from '@react-navigation/routers';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function navigateToVacancies() {
  const resetAction = CommonActions.reset({
    index: 0,
    routes: [{name: 'Main'}],
  });

  navigationRef.current?.dispatch(resetAction);
}

export function navigateToLogin() {
  const resetAction = CommonActions.reset({
    index: 0,
    routes: [
      {
        name: 'Auth',
        state: {
          routes: [{name: 'Login'}],
        },
      },
    ],
  });

  navigationRef.current?.dispatch(resetAction);
}
