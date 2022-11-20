import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
export const LoginForm = () => {
  const dispath = useDispatch();
  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispath(logIn({ email, password }));
    resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <label htmlFor="email">
            Email
            <Field type="email" name="email" />
          </label>
          <label htmlFor="password">
            Password
            <Field type="password" name="password" />
          </label>
          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </div>
  );
};
