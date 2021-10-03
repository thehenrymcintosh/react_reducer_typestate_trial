import React from 'react';
import { handlers, State, Events } from "./logic";

test('example state machine test', () => {
  const intialState: State = { tags: { left: false, right: false }};
  const event : Events["ToggleKey"] = {
    key: "left",
    to: true,
  }
  const expectedState: State = { tags: {left: true, right: false }};
  expect(handlers.ToggleKey(intialState, event)).toEqual(expectedState)
});


