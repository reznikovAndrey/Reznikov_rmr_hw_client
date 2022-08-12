import { useFormik } from 'formik';

import styles from './LoginForm.module.scss';

import { Button } from '../../../ui-library/Components';
import { FormValues } from '../auth.entities';
import { formValidationSchema } from '../Validation';

const LoginForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      phone: '',
      password: '',
    },
    validationSchema: formValidationSchema,
    validateOnChange: false,
    onSubmit: (values: FormValues) => {
      console.log(values);
    },
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
        {formik.errors.email && <span className={styles.formError}>{formik.errors.email}</span>}
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
        {formik.errors.phone && <span className={styles.formError}>{formik.errors.phone}</span>}
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
        {formik.errors.password && <span className={styles.formError}>{formik.errors.password}</span>}
      </div>

      <Button submit text="Go to kitty" />
    </form>
  );
};

export default LoginForm;
