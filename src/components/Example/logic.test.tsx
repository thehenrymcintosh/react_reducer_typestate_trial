import { handlers, ExampleState, ExampleEvents, ExampleEmitters } from "./logic";

const voidEmitters : ExampleEmitters = {
  ToggleKey: () => {}, 
  SearchSubmit: () => {},
}


test('example state machine test', () => {
  const intialState: ExampleState = { tags: { left: false, right: false }};
  const event : ExampleEvents["ToggleKey"] = {
    key: "left",
    to: true,
  }
  const expectedState: ExampleState = { tags: {left: true, right: false }};
  expect(handlers.ToggleKey(intialState, event, voidEmitters)).toEqual(expectedState)
});


