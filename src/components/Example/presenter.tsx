import React from "react";
import {ExampleState, ExampleEmitters} from "./logic";

export type Props = {
  state: ExampleState,
  emit: ExampleEmitters,
}

export const ExamplePresenter : React.FC<Props> = ({state, emit}) => {

  function onChange(key: string) {
    return function(e: React.ChangeEvent<HTMLInputElement>) {
      emit.ToggleKey({key, to: !state.tags[key]})
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

