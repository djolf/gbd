import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import renderer from 'react-test-renderer';
import rootReducer from "./reducers";
import { createStore } from "redux";

const store = createStore(rootReducer);

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <App />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});