import {useStateMachine, Handlers as SMHandlers, Emitters as SMEmitters} from "../useStateMachine";

export type State = {
  tags: Record<string,boolean>,
}

const initialState = {
  tags: {
    left: false,
    right: false,
  },
}

export type Events = {
  ToggleKey: { key: string, to: boolean },
  SearchSubmit: { foo: "bar" }
  SelectedDate: Date,
}

export type Emitters = SMEmitters<Events>
type Handlers = SMHandlers<State, Events>

const handleToggleKey : Handlers["ToggleKey"] = (state, payload, emitters) => {
  const newState = {...state};
  newState.tags[payload.key] = payload.to;
  return newState;
}

export const handlers: Handlers = {
  ToggleKey: handleToggleKey,
  SearchSubmit: (state, action) => state,
  SelectedDate: (state, action) => state,
}

export const useLogic = () => {
  return useStateMachine(handlers, initialState);
}

