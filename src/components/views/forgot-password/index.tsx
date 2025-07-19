'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { emailSchema } from '@/utils/validations/auth.schema';
import { useForgotPassword } from '@/api/auth/forgot-password';
import type { TRegisterEmailForm } from '@/types/auth.types';

function ForgotPasswordPage() {
  const { handleSubmit, register } = useForm<TRegisterEmailForm>({
    mode: 'onBlur',
    resolver: yupResolver(emailSchema),
  });
  const { mutateAsync, isPending, isSuccess } = useForgotPassword();
  const disableFields = isPending || isSuccess;

  const onSubmit = async (data: TRegisterEmailForm) => {
    const result = await mutateAsync(data);

    if (result.message === 'success') {
      alert('success');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} type="email" placeholder="Email" disabled={disableFields} />

      <button type="submit" disabled={disableFields}>
        Send Message
      </button>
    </form>
  );
}

export default ForgotPasswordPage;
