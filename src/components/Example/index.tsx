import React from "react";
import { handlers, initialState } from "./logic";
import { ExamplePresenter } from "./presenter";
import { useEventReducer } from "../useEventReducer";

export const Example : React.FC<{}> = () => {
  const [state, emit] = useEventReducer(handlers, initialState);
  return <ExamplePresenter state={state} emit={emit} />
}

