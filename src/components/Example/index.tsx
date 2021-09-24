import React, { useReducer } from "react";

type State = {
  tags: Record<string,boolean>,
}

const initialState = {
  tags: {},
}

enum Actions {
  ToggleKey,
  SearchSubmit,
}

type Action = 
  {
    type: Actions.ToggleKey,
    payload: { key: string, to: boolean },
  } | 
  {
    type: Actions.SearchSubmit,
    payload: { foo: "bar" }
  };

type ActionFromUnion<T extends Actions> = Extract<Action, { type: T }>;
type Handler<T extends Actions> = (state: State, action: ActionFromUnion<T> ) => State;

const handleToggleKey: Handler<Actions.ToggleKey> = (state, action) => {
  const newState = {...state};
  const { payload } = action;
  newState.tags[payload.key] = payload.to;
  return newState;
}

type Handlers = {
  [key in Actions]: Handler<key>
}

const handlers: Handlers = {
  [Actions.ToggleKey]: handleToggleKey,
  [Actions.SearchSubmit]: (state, action) => state
}

const reducer = (state: State, action: Action ) : State => {
  return handlers[action.type](state, action as any); // dirty as any hack because i'm losing patience
}

export const Example : React.FC<{}> = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function onChange(key: string) {
    return function(e: React.ChangeEvent<HTMLInputElement>) {
      dispatch({type: Actions.ToggleKey, payload: { key, to: e.target.checked }});
    }
  };

  return <div>
    {
      ["left", "right"]
        .map((el) => 
          <label key={el}>
            {el} <input type="checkbox" checked={!!state.tags[el]} onChange={ onChange(el) }/>
          </label>
        )
    }
  </div>
}

