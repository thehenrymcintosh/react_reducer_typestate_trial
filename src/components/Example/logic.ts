import { Handlers, Emitters } from "../useEventReducer";

export type ExampleState = {
  tags: Record<string,boolean>,
}

export const initialState: ExampleState = {
  tags: {
    left: false,
    right: false,
  },
}

export type ExampleEvents = {
  ToggleKey: { key: string, to: boolean },
  SearchSubmit: { foo: "bar" },
}

export type ExampleEmitters = Emitters<ExampleEvents>;

export type ExampleHandlers = Handlers<ExampleState, ExampleEvents>;


const handleToggleKey : ExampleHandlers["ToggleKey"] = (state, payload, emitters) => {
  const newState = {...state};
  newState.tags[payload.key] = payload.to;
  return newState;
}

export const handlers: ExampleHandlers = {
  ToggleKey: handleToggleKey,
  SearchSubmit: (state, action) => state,
}

