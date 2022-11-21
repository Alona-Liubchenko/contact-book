// import { ContactForms } from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
// import { Box, Title, Heading } from './App.styled';
// import { useEffect } from 'react';
// import { selectIsLoading, selectError } from 'redux/selectors';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from 'redux/operations';

import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { Layout } from './Layaut/Layout';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContastsPage = lazy(() => import('../pages/Contacts'));
export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContastsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
