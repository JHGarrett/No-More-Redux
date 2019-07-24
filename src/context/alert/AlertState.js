import React, { useReducer } from 'react';
import AlertContext from './AlertContext';
import AlertReducer from './AlertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = props => {
  const initalState = null;

  const [state, dispatch] = useReducer(AlertReducer, initalState);

  //set alert
  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type },
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  };

  // remove alert

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}>
      {props.children}
    </AlertContext.Provider>
  );
};
export default AlertState;
