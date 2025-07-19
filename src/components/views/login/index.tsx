'use client';

import { useLogin } from '@/api/auth/login';
import { PageUrls } from '@/types/path.enums';
import { loginSchema } from '@/utils/validations/auth.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import type { TLoginFrom } from '@/types/auth.types';

function LoginPage() {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TLoginFrom>({
    mode: 'onBlur',
    resolver: yupResolver(loginSchema),
  });

  const { mutateAsync, isPending, isSuccess } = useLogin();
  const disableFields = isPending || isSuccess;

  const onSubmit = async(data: TLoginFrom) => {
    const result = await mutateAsync(data);
    if (result.accessToken) {
      return router.replace(PageUrls.HOME);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} type="email" placeholder="Email" disabled={disableFields} />
      <input
        {...register('password')}
        type="password"
        placeholder="Password"
        disabled={disableFields}
      />
      <button type="submit" disabled={disableFields}>
        Login
      </button>
    </form>
  );
}

export default LoginPage;
