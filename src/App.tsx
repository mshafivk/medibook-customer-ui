import React from 'react';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './store';
import UserLogin from './components/UserLogin/UserLogin';
import './index.scss';
import Home from './components/Home/Home';
import RegisterForm from './components/RegisterForm/RegisterForm';
import Layout from './components/Layout/Layout';
import RequireAuth from './auth/RequireAuth';
import PublicPage from './components/PublicPage/PublicPage';
import { AuthProvider } from './auth/AuthContext';
import Booking from './components/Booking/Booking';

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <div className="d-flex justify-content-center">
          <div className="card d-flex w-75">
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<PublicPage />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/login" element={<UserLogin />} />
                <Route
                  path="/home"
                  element={
                    <RequireAuth>
                      <Home />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/book-token"
                  element={
                    <RequireAuth>
                      <Booking />
                    </RequireAuth>
                  }
                />
              </Route>
            </Routes>
          </div>
        </div>
      </AuthProvider>
    </Provider>
  );
}

export default App;
