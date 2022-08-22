import axios, { AxiosError } from 'axios';
import { useFormik } from 'formik';
import phone from 'phone';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import styles from './LoginForm.module.scss';

import { ServerError } from '../../../../../infrastructure/requestService';
import { routingService } from '../../../../../infrastructure/routingService';
import { Button, Loader } from '../../../../../ui-library/components';
import { FormValues } from '../../../auth.entities';
import { useAuth } from '../../../hooks';
import { authRequestService } from '../../../requestService';
import { formValidationSchema } from '../../../validation';

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
      authRequestService
        .login(values)
        .then(() => {
          setLoggedIn(true);
          navigate(routingService.KITTY, { replace: true });
        })
        .catch((err: AxiosError<ServerError> | Error) => {
          if (axios.isAxiosError(err)) {
            setAuthError(err.response?.data.message);
          } else {
            throw new Error('Unhandled error', err);
          }
        }),
  });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const { phoneNumber } = phone(formik.values.phone);
    if (phoneNumber) {
      formik.setFieldValue('phone', phoneNumber);
    }

    setAuthError('');
    formik.handleSubmit();
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[^a-zA-Z]*$/;

    if (e.target.value.match(regex)) {
      formik.setFieldValue('phone', e.target.value);
    }
  };

  const { t } = useTranslation();

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.loginForm} noValidate>
        <h1>{t('login.header')}</h1>

        <div className={styles.field}>
          <input
            id="email"
            placeholder={t('login.placeholders.email')}
            required
            aria-label={t('login.labels.email')}
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            onChange={formik.handleChange}
            value={formik.values.email}
            type="email"
            autoComplete="email"
            className={formik.errors.email ? styles.inputError : ''}
          />
          {formik.errors.email && <span className={styles.error}>{t(formik.errors.email)}</span>}
        </div>

        <div className={styles.field}>
          <input
            id="phone"
            placeholder={t('login.placeholders.phone')}
            required
            aria-label={t('login.labels.phone')}
            onChange={handlePhoneChange}
            value={formik.values.phone}
            type="tel"
            autoComplete="tel"
            className={formik.errors.phone ? styles.inputError : ''}
          />
          {formik.errors.phone && <span className={styles.error}>{t(formik.errors.phone)}</span>}
        </div>

        <div className={styles.field}>
          <input
            id="password"
            placeholder={t('login.placeholders.password')}
            required
            aria-label={t('login.labels.password')}
            onChange={formik.handleChange}
            value={formik.values.password}
            type="password"
            autoComplete="current-password"
            className={formik.errors.password ? styles.inputError : ''}
          />
          {(authError && <span className={styles.error}>{t(authError)}</span>) ||
            (formik.errors.password && <span className={styles.error}>{t(formik.errors.password)}</span>)}
        </div>

        <Button type="submit" text={t('login.btn')} disabled={formik.isSubmitting} />
      </form>
      {formik.isSubmitting && <Loader />}
    </>
  );
};

export default LoginForm;
