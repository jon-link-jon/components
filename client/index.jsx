import React        from 'react';
import ReactDOM     from 'react-dom';
import { Provider } from 'react-redux';

function App() {
  console.logD('DEBUG: L0 :index ');
  return null;
}

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App></App>
    </React.StrictMode>
  </Provider>

  , document.getElementById('app'));
