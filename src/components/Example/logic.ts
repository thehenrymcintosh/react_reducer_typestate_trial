import { Handlers, Dispatcher} from "../useStateMachine";

export type State = {
  tags: Record<string,boolean>,
}

export const initialState: State = {
  tags: {
    left: false,
    right: false,
  },
}

export type Events = {
  ToggleKey: { key: string, to: boolean },
  SearchSubmit: { foo: "bar" },
}

export type Dispatch = Dispatcher<Events>

const handleToggleKey = (state: State, payload: Events["ToggleKey"]) => {
  const newState = {...state};
  newState.tags[payload.key] = payload.to;
  return newState;
}

export const handlers: Handlers<State, Events> = {
  ToggleKey: handleToggleKey,
  SearchSubmit: (state, action) => state,
}

