// import { ContactForms } from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
// import { Box, Title, Heading } from './App.styled';
// import { useEffect } from 'react';
// import { selectIsLoading, selectError } from 'redux/selectors';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from 'redux/operations';

import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layaut/Layout';
const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContastsPage = lazy(() => import('../pages/Contacts'));
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContastsPage />} />
      </Route>
    </Routes>
  );
};
