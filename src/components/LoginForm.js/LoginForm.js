import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Forma, Input, Btn, Label } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(logIn({ email, password }));
    resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
      >
        <Forma autoComplete="off">
          <Label htmlFor="email">
            Email
            <Input type="email" name="email" />
          </Label>
          <Label htmlFor="password">
            Password
            <Input type="password" name="password" />
          </Label>
          <Btn type="submit">Log In</Btn>
        </Forma>
      </Formik>
    </div>
  );
};
