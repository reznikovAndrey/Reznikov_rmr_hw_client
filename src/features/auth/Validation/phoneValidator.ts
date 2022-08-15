import { phone } from 'phone';

export default (value: string | undefined): boolean => {
  if (!value) {
    return false;
  }

  const { isValid: isValidRussia } = phone(value, { country: 'RU' });
  const { isValid: isValidMongolia } = phone(value, { country: 'MN' });

  return isValidRussia || isValidMongolia;
};
