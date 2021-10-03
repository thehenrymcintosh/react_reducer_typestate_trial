import React from 'react';
import { ExamplePresenter } from "./presenter";
import { State, Dispatch } from "./logic";
import { render, screen } from '@testing-library/react';

test('example presenter check', () => {
  const state: State = { tags: {left: true, right: false }};
  const dispatch: Dispatch = (eventType, payload) => { throw new Error("Unimplemented!")}

  render(<ExamplePresenter state={state} dispatch={dispatch} />);
  const leftCheckbox = screen.getByTestId("left");
  const rightCheckbox = screen.getByTestId("right");
  expect(leftCheckbox).toBeChecked();
  expect(rightCheckbox).not.toBeChecked();
});


