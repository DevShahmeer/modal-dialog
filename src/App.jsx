import React from 'react';
import Modal from './Modal';
import ModalContent from './ModalContent';
import { ModalProvider } from './ModalContext';

import './App.css';

function App() {
  return (
    <ModalProvider>
      <div className="app">
        <h1>Modal</h1>
        <ModalContent />
        <Modal>
          <h2>Modal Content</h2>
          <p>This is the content of the modal.</p>
        </Modal>
      </div>
    </ModalProvider>
  );
}

export default App;
