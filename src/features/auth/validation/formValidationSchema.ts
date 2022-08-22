import * as Yup from 'yup';

import phoneValidator from './phoneValidator';

const passwordRegex = /^[a-zA-Z\d]*$/;

export default Yup.object({
  email: Yup.string().trim().email('login.errors.email').required('login.errors.required'),
  phone: Yup.string()
    .trim()
    .required('login.errors.required')
    .test('check-phone', 'login.errors.phone', phoneValidator),
  password: Yup.string()
    .trim()
    .min(4, 'login.errors.password.length')
    .matches(passwordRegex, 'login.errors.password.symbols')
    .required('login.errors.required'),
});
