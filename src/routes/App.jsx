import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@styles/global.scss';
import Layout from '@containers/Layout';
import Login from '@templates/Login';
import PasswordRecovery from '@templates/PasswordRecovery';
import Home from '@templates/Home';
import Checkout from '@pages/checkout';
import CreateAccount from '@templates/CreateAccount';
import MyAccount from '@templates/MyAccount';
import NewPasword from '@templates/NewPassword';
import Orders from '@templates/Orders';
import SendEmail from '@templates/SendEmail';
import NotFound from '@pages/404';
import InternalServerError from '@pages/500';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/password-recovery" element={<PasswordRecovery />} />
            <Route exact path="/my-account" element={<MyAccount />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/create-account" element={<CreateAccount />} />
            <Route exact path="/new-password" element={<NewPasword />} />
            <Route exact path="/orders" element={<Orders />} />
            <Route exact path="/send-email" element={<SendEmail />} />
            <Route path="*" element={<NotFound />} />
            <Route exact path="/500" element={<InternalServerError />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
