import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css'
import { ToastContainer } from 'react-toastify'
import { Router } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import Routes from './routes'
import history from './services/history'

import { store, persistor } from './store'

import './App.css'

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes/>
          <ToastContainer autoClose={3000}/>
        </Router>
      </PersistGate>
    </Provider>
    

  );
}

export default App;