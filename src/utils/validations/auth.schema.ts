import * as Yup from 'yup';

const emailSchema = Yup.object().shape({
  email: Yup.string()
    .email('auth.fields.email.errors.invalid')
    .required('auth.fields.email.errors.required'),
});

const magicLinkSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, 'auth.fields.firstname.errors.min')
    .max(50, 'auth.fields.firstname.errors.max')
    .required('auth.fields.firstname.errors.required'),
  lastname: Yup.string()
    .min(2, 'auth.fields.lastname.errors.min')
    .max(50, 'auth.fields.lastname.errors.max')
    .required('auth.fields.lastname.errors.required'),
  password: Yup.string()
    .min(8, 'auth.fields.password.errors.min')
    .max(32, 'auth.fields.password.errors.max')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/,
      'auth.fields.password.errors.invalid',
    )
    .required('auth.fields.password.errors.required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'auth.fields.password.errors.confirm_required')
    .required('auth.fields.password.errors.confirm_required'),
  terms: Yup.boolean()
    .oneOf([true], 'auth.fields.terms.errors.required')
    .required('auth.fields.terms.errors.required'),
});

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('auth.fields.email.errors.invalid')
    .required('auth.fields.email.errors.required'),
  password: Yup.string()
    .min(8, 'auth.fields.password.errors.min')
    .max(32, 'auth.fields.password.errors.max')
    .required('auth.fields.password.errors.required'),
});

const resetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'auth.fields.password.errors.min')
    .max(32, 'auth.fields.password.errors.max')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/,
      'auth.fields.password.errors.invalid',
    )
    .required('auth.fields.password.errors.required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'auth.fields.password.errors.confirm_required')
    .required('auth.fields.password.errors.confirm_required'),
});

export { emailSchema, loginSchema, magicLinkSchema, resetPasswordSchema };
