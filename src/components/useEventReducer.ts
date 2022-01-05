import { useCallback, useMemo, useReducer } from "react";

export type Handlers<State, Events> = {
  [Key in keyof Events]: (state: State, payload: Events[Key], emitters: Emitters<Events>) => State
}

type Action<E, K extends keyof E> = {eventType: K, payload: E[K], emitters: Emitters<E>}

interface Reducer<S, E> {
  <K extends keyof E>(state: S, action: Action<E, K>): S
}
type Emitter<Payload> = Payload extends undefined ? (payload?: undefined) => void : (payload: Payload) => void;

export type Emitters<E> = {
  [K in keyof E] : Emitter<E[K]>;
}

export function useEventReducer<State, Events>(handlers: Handlers<State, Events>, initial: State): [State, Emitters<Events>] {
  type Event = keyof Events;

  const reducer: Reducer<State, Events> = useCallback((state, {eventType, payload, emitters}) => {
    return handlers[eventType](state, payload, emitters); 
  },[handlers]);
  
  const [state, dispatch] = useReducer(reducer, initial);
 
  const emitters = useMemo(() => {
    const localEmitterRef = Object
      .keys(handlers)
      .reduce((emitBuilder, _eventType) => {
        const eventType = _eventType as Event;
        emitBuilder[eventType] = ((payload: Events[Event]) => dispatch({eventType, payload, emitters: localEmitterRef})) as Emitter<Events[Event]>;
        return emitBuilder;
      }, {} as Emitters<Events> )
    return localEmitterRef;
  }
  , [handlers]);

  return [state, emitters]
}
