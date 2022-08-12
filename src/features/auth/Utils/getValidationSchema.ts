import { phone } from 'phone';
import * as Yup from 'yup';

const passwordRegex = /^[a-zA-Z\d]*$/;

export default () =>
  Yup.object({
    email: Yup.string().trim().email('Invalid email format').required('This field is required'),
    phone: Yup.string()
      .trim()
      .required('This field is required')
      .test('check-phone', 'Only Russia and Mongolia phones allowed', (value) => {
        if (!value) {
          return false;
        }

        const { isValid: isValidRussia } = phone(value, { country: 'RU' });
        const { isValid: isValidMongolia } = phone(value, { country: 'MN' });

        return isValidRussia || isValidMongolia;
      }),
    password: Yup.string()
      .trim()
      .min(4, 'Minimum password length - 4 symbols')
      .matches(passwordRegex, 'Password must contain only digits and letters')
      .required('This field is required'),
  });
