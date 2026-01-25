'use client';

import { useLogin } from '@/hooks/api/auth/login';
import { PageUrls } from '@/types/path.enums';
import { loginSchema } from '@/utils/validations/auth.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { AuthPathEnum, type TLoginFrom } from '@/types/auth.types';
import Input from '@/components/ui/input';
import Button from '@/components/ui/button/components';
import Link from '@/components/ui/link';
import AuthLayout from '@/components/shared/auth';
import PageSwitcher from '@/components/shared/auth/page-switcher';

function LoginPage() {
  const t = useTranslations();
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

  const onSubmit = async (data: TLoginFrom) => {
    const result = await mutateAsync(data);
    // if (result.accessToken) {
    //   return router.replace(PageUrls.HOME);
    // }
  };

  const fieldsList: (keyof TLoginFrom)[] = ['email', 'password'];

  return (
    <AuthLayout>
      <form
        className="w-full flex items-center justify-center flex-col gap-1"
        onSubmit={handleSubmit(onSubmit)}
      >
        {fieldsList.map((key) => (
          <Input
            key={key}
            {...register(key)}
            type={key}
            placeholder={t(`auth.fields.${key}.label`)}
            label={t(`auth.fields.${key}.label`)}
            disabled={disableFields}
            errorMessage={errors[key]?.message}
          />
        ))}
        <Link
          customClassName="ml-auto my-2"
          to={AuthPathEnum.FORGOT_PASSWORD}
          text={`${t('auth.pages.forgot_password.title')}?`}
        />
        <Button type="submit" disabled={disableFields}>
          {t('auth.pages.login.title')}
        </Button>

        <PageSwitcher page="register" />
      </form>
    </AuthLayout>
  );
}

export default LoginPage;
