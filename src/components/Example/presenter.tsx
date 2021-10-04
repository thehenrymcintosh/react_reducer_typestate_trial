import React from "react";
import {State, Dispatch} from "./logic";

export type Props = {
  state: State,
  dispatch: Dispatch,
}

export const ExamplePresenter : React.FC<Props> = ({state, dispatch}) => {

  function onChange(key: string) {
    return function(e: React.ChangeEvent<HTMLInputElement>) {
      dispatch("ToggleKey", {key, to: !state.tags[key]})
    }
  };

  return <div>
    {
      Object.keys(state.tags)
        .map((el) => 
          <label key={el}>
            {el} 
            <input  type="checkbox" 
                    data-testid={el}
                    checked={!!state.tags[el]} 
                    onChange={ onChange(el) }/>
          </label>
        )
    }
  </div>
}

