import React from 'react';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './store';
import UserLogin from './components/UserLogin/UserLogin';
import './index.scss';
import Home from './components/Home/Home';
import RegisterForm from './components/RegisterForm/RegisterForm';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="d-flex justify-content-center">
          <div className="card d-flex w-75 p-3 mt-2">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<UserLogin />} />
              <Route path="/register" element={<RegisterForm />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
