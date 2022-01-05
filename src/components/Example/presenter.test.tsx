import React from 'react';
import { ExamplePresenter } from "./presenter";
import { ExampleState, ExampleEmitters } from "./logic";
import { render, screen } from '@testing-library/react';

const voidEmitters : ExampleEmitters = {
  ToggleKey: () => {}, 
  SearchSubmit: () => {},
}

test('example presenter check', () => {
  const state: ExampleState = { tags: {left: true, right: false }};

  render(<ExamplePresenter state={state} emit={voidEmitters} />);
  const leftCheckbox = screen.getByTestId("left");
  const rightCheckbox = screen.getByTestId("right");
  expect(leftCheckbox).toBeChecked();
  expect(rightCheckbox).not.toBeChecked();
});


