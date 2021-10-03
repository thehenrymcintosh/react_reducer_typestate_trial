import { useReducer } from "react";

export type Handlers<State, Events> = {
  [Key in keyof Events]: (state: State, payload: Events[Key]) => State
}

type Action<E, K extends keyof E> = {eventType: K, payload: E[K]}

interface Reducer<S, E> {
  <K extends keyof E>(state: S, action: Action<E, K>): S
}
export interface Dispatcher<E> {
  <K extends keyof E>(eventType: K, payload: E[K]): void
}

export function useStateMachine<State, Events>(handlers: Handlers<State, Events>, initial: State): [State, Dispatcher<Events>] {
  const reducer: Reducer<State, Events> = (state, {eventType, payload}) => {
    return handlers[eventType](state, payload); 
  }
  const [state, dispatch] = useReducer(reducer, initial);
  const handler: Dispatcher<Events> = (eventType, payload) => {
    dispatch({eventType, payload})
  };
  return [state, handler]
}
