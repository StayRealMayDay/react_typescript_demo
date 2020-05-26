import React from 'react';
import './App.less';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';
import Test from './modules/test'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
        <Route path={'/ss'}>
            <Test/>
            {/* <Button type={"dashed"}>ssss</Button> */}
          </Route>
          <Route path={'/'}>
            <h1>sss</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
