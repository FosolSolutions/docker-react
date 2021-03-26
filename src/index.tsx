import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/store';

import './index.css';

const Test = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <div>test</div>
      </Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<Test />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
