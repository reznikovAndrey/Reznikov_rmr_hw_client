import { phone } from 'phone';
import * as Yup from 'yup';

const passwordRegex = /^[a-zA-Z\d]*$/;

export default Yup.object({
  email: Yup.string().trim().email('login.errors.email').required('login.errors.required'),
  phone: Yup.string()
    .trim()
    .required('login.errors.required')
    .test('check-phone', 'login.errors.phone', (value) => {
      if (!value) {
        return false;
      }

      const { isValid: isValidRussia } = phone(value, { country: 'RU' });
      const { isValid: isValidMongolia } = phone(value, { country: 'MN' });

      return isValidRussia || isValidMongolia;
    }),
  password: Yup.string()
    .trim()
    .min(4, 'login.errors.password.length')
    .matches(passwordRegex, 'login.errors.password.symbols')
    .required('login.errors.required'),
});
