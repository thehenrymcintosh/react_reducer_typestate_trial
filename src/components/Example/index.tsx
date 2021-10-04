import React from "react";
import { handlers, initialState } from "./logic";
import { ExamplePresenter } from "./presenter";
import {useStateMachine } from "../useStateMachine";

export const Example : React.FC<{}> = () => {
  const [state, dispatch] = useStateMachine(handlers, initialState);
  return <ExamplePresenter state={state} dispatch={dispatch} />
}

