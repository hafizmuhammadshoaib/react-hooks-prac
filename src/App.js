import React from 'react';
import './App.css';
import HookCounter from './HookCounter';
import HookMouse from './HookMouse';
import MouseContainer from './MouseContainer';
import IntervalHookCounter from './IntervalHookCounter';
import DataFetching from './DataFetching';
import UseReducerHook from './UseReducerHook';
import { store } from './store/index';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      {/* <HookCounter /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalHookCounter /> */}
      <Provider store={store}>
        <DataFetching />
      </Provider>
      {/* <UseReducerHook /> */}
    </div>
  );
}

export default App;
