import { useReducer } from "react";

import AlertsContext from "./alertsContext";

import AlertsReducer from './alertsReducers'

import { SET_ALERT, REMOVE_ALERT } from '../types'



export default function AlertsState(props) {
    const initalState = null;

    const [state, dispatch] = useReducer(AlertsReducer, initalState)

    const setAlert = (message, type) => {
        dispatch({
            type: SET_ALERT,
            payload: {
                message,
                type
            }
        })

        setTimeout(()=> dispatch({type: REMOVE_ALERT}), 5000)
    }


    return <AlertsContext.Provider value={{
        alert: state, 
        setAlert

    }}>
      
        {props.children}
  </AlertsContext.Provider>;
}
