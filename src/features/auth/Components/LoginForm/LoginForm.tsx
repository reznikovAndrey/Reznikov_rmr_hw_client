import axios, { AxiosError } from 'axios';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './LoginForm.module.scss';

import { requestService, ServerError } from '../../../../infrastructure/RequestService';
import { routingService } from '../../../../infrastructure/RoutingService';
import { Button } from '../../../../ui-library/Components';
import { FormValues } from '../../auth.entities';
import { useAuth } from '../../Hooks';
import { formValidationSchema } from '../../Validation';

const LoginForm: React.FC = () => {
  const { setLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [authError, setAuthError] = useState<string | undefined>('');

  const formik = useFormik({
    initialValues: {
      email: '',
      phone: '',
      password: '',
    },
    validationSchema: formValidationSchema,
    validateOnChange: false,
    onSubmit: (values: FormValues) =>
      requestService
        .post(routingService.login(), values)
        .then(() => {
          setLoggedIn(true);
          navigate(routingService.content(), { replace: true });
        })
        .catch((err: AxiosError<ServerError> | Error) => {
          if (axios.isAxiosError(err)) {
            setAuthError(err.response?.data.message);
          } else {
            throw new Error('Unhandled error', err);
          }
        }),
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.loginForm} autoComplete="on" noValidate>
      <h1>Login</h1>

      <div className={styles.field}>
        <input
          id="email"
          placeholder="Email"
          required
          aria-label="email"
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <span className={styles.formError}>{formik.errors.email}</span>
      </div>

      <div className={styles.field}>
        <input
          id="phone"
          placeholder="Phone"
          required
          aria-label="phone"
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
        <span className={styles.formError}>{formik.errors.phone}</span>
      </div>

      <div className={styles.field}>
        <input
          id="password"
          placeholder="Password"
          required
          aria-label="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <span className={styles.formError}>{authError || formik.errors.password}</span>
      </div>

      <Button type="submit" text="Go to kitty" disabled={formik.isSubmitting} />
    </form>
  );
};

export default LoginForm;
