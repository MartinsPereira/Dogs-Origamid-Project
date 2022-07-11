import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import LoginCreate from './LoginCreate';
import { UserContext } from '../../UserContext';
import styles from './Login.module.css';
import NotFound from '../NotFound';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="/perdeu" element={<LoginPasswordLost />} />
          <Route path="/" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;