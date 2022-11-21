import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { register } from 'redux/auth/operations';
import { Forma, Input, Btn, Label } from './RegisterForm.styled';
export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
      >
        <Forma autoComplete="off">
          <Label htmlFor="name">
            Username
            <Input type="name" name="name" />
          </Label>
          <Label htmlFor="email">
            Email
            <Input type="email" name="email" />
          </Label>
          <Label htmlFor="password">
            Password
            <Input type="password" name="password" />
          </Label>
          <Btn type="submit">Register</Btn>
        </Forma>
      </Formik>
    </div>
  );
};
