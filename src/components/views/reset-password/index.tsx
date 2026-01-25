'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { resetPasswordSchema } from '@/utils/validations/auth.schema';
import { useRouter, useSearchParams } from 'next/navigation';
import { PageUrls } from '@/types/path.enums';
import { useResetPassword } from '@/hooks/api/auth/reset-password';
import { toast } from 'react-toastify';
import type { TResetPasswordFrom } from '@/types/auth.types';

function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { handleSubmit, register } = useForm<TResetPasswordFrom>({
    mode: 'onBlur',
    resolver: yupResolver(resetPasswordSchema),
  });
  const { mutateAsync, isPending, isSuccess } = useResetPassword();
  const disableFields = isPending || isSuccess;

  const onSubmit = async (data: TResetPasswordFrom) => {
    const token = searchParams.get('token');
    if (!token) {
      return toast.error('Invalid token');
    }

    const result = await mutateAsync({
      token,
      ...data,
    });
    if (result?.accessToken) {
      return router.replace(PageUrls.HOME);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('password')}
        type="password"
        placeholder="Password"
        disabled={disableFields}
      />
      <input
        {...register('confirmPassword')}
        type="password"
        placeholder="Confirm Password"
        disabled={disableFields}
      />

      <button type="submit" disabled={disableFields}>
        Confirm
      </button>
    </form>
  );
}

export default ResetPasswordPage;
