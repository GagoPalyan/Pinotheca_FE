import * as Yup from 'yup';

export const emailSchema = Yup.object().shape({
  email: Yup.string().email().required(),
});

export const magicLinkSchema = Yup.object().shape({
  firstname: Yup.string().min(2).max(50).required(),
  lastname: Yup.string().min(2).max(50).required(),
  password: Yup.string()
    .min(8)
    .max(32)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/,
      'Password must include uppercase, lowercase, number, and special character.',
    )
    .required(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required(),
  terms: Yup.boolean().oneOf([true], 'Terms and conditions must be accepted').required(),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
});

export const resetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8)
    .max(32)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/,
      'Password must include uppercase, lowercase, number, and special character.',
    )
    .required(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required(),
});
