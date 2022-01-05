import React from "react";
import { useLogic } from "./logic";
import { ExamplePresenter } from "./presenter";

export const Example : React.FC<{}> = () => {
  const [state, emit] = useLogic();
  return <ExamplePresenter state={state} emit={emit} />
}

