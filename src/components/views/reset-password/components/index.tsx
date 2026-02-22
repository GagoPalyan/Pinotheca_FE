'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { resetPasswordSchema } from '@/utils/validations/auth.schema';
import { useRouter, useSearchParams } from 'next/navigation';
import { PageUrls } from '@/types/path.enums';
import { useResetPassword } from '@/hooks/api/auth/reset-password';
import { revalidateHeader } from '@/server/get-header-data';
import { toast } from 'react-toastify';
import type { TResetPasswordFrom } from '@/types/auth.types';
import AuthLayout from '@/components/shared/auth';
import Input from '@/components/ui/input';
import { resetPasswordFields } from '../constants/fields-list';
import { useTranslations } from 'next-intl';
import Button from '@/components/ui/button';

function ResetPasswordPage() {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TResetPasswordFrom>({
    mode: 'onBlur',
    resolver: yupResolver(resetPasswordSchema),
  });
  const { mutateAsync, isPending } = useResetPassword();

  const onSubmit = async (data: TResetPasswordFrom) => {
    const token = searchParams.get('token');
    if (!token) return toast.error(t('auth.errors.token'));

    const result = await mutateAsync({ token, ...data });
    if (result?.accessToken) {
      await revalidateHeader();
      router.replace(PageUrls.HOME);
      router.refresh();
    }
  };

  return (
    <AuthLayout hideLoginWithGoogle title="auth.pages.reset_password.title">
      <form
        className="w-full flex items-center justify-center flex-col gap-1"
        onSubmit={handleSubmit(onSubmit)}
      >
        {resetPasswordFields.map(({ name, type }) => (
          <Input
            key={name}
            {...register(name)}
            type={type}
            placeholder={t(`auth.fields.${name}.label`)}
            label={`auth.fields.${name}.label`}
            disabled={isPending}
            errorMessage={errors[name]?.message}
          />
        ))}

        <Button type="submit" disabled={isPending}>
          {t('auth.pages.reset_password.button')}
        </Button>
      </form>
    </AuthLayout>
  );
}

export default ResetPasswordPage;
