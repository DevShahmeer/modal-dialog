import React from 'react';
import Modal from './Modal';
import { Provider } from 'react-redux';
import ModalContent from './ModalContent';
import {store} from './store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className='app'>
      <h1>Modal</h1>
      <ModalContent/>
      <Modal>
        <h1>Modal Context</h1>
        <p>This is the content of the App</p>
      </Modal>
      </div>
    </Provider>
  );
}

export default App;
