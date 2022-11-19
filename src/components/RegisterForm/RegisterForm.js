import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { register } from 'redux/auth/operations';
export const RegisterForm = () => {
  const dispath = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispath(register(values));
    resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <label htmlFor="name">
            Username
            <Field type="name" name="name" />
          </label>
          <label htmlFor="email">
            Email
            <Field type="email" name="email" />
          </label>
          <label htmlFor="password">
            Password
            <Field type="password" name="password" />
          </label>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};
