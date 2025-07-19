'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRegister } from '@/api/auth/register';
import { emailSchema } from '@/utils/validations/auth.schema';
import type { TRegisterEmailForm } from '@/types/auth.types';

function RegisterPage() {
  const { handleSubmit, register } = useForm<TRegisterEmailForm>({
    mode: 'onBlur',
    resolver: yupResolver(emailSchema),
  });
  const { mutateAsync, isPending, isSuccess } = useRegister();
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
        Register
      </button>
    </form>
  );
}

export default RegisterPage;
