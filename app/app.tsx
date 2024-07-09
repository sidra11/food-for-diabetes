import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import Page from './index'; // Ensure Page component is exported correctly

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  );
};

export default App;