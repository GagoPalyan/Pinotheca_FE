'use client';

import { useLogin } from '@/hooks/api/auth/login';
import { revalidateHeader } from '@/server/get-header-data';
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

const fieldsList: (keyof TLoginFrom)[] = ['email', 'password'];

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

  const { mutateAsync, isPending } = useLogin();

  const onSubmit = async (data: TLoginFrom) => {
    const result = await mutateAsync(data);
    if (result?.accessToken) {
      await revalidateHeader();
      router.replace(PageUrls.HOME);
      router.refresh();
    }
  };

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
            label={`auth.fields.${key}.label`}
            disabled={isPending}
            errorMessage={errors[key]?.message}
          />
        ))}
        <Link
          customClassName="ml-auto my-2"
          to={AuthPathEnum.FORGOT_PASSWORD}
          text={`${t('auth.pages.forgot_password.title')}?`}
        />
        <Button type="submit" disabled={isPending}>
          {t('auth.pages.login.title')}
        </Button>

        <PageSwitcher page="login" link={PageUrls.REGISTER} />
      </form>
    </AuthLayout>
  );
}

export default LoginPage;
