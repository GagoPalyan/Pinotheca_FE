'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { emailSchema } from '@/utils/validations/auth.schema';
import { useForgotPassword } from '@/hooks/api/auth/forgot-password';
import type { TRegisterEmailForm, TRegisterEmailResponse } from '@/types/auth.types';
import AuthLayout from '@/components/shared/auth';
import Input from '@/components/ui/input';
import { useTranslations } from 'next-intl';
import Button from '@/components/ui/button';
import PageSwitcher from '@/components/shared/auth/page-switcher';
import { PageUrls } from '@/types/path.types';
import { useState } from 'react';
import AuthSuccessModal from '@/components/shared/auth/modal';

function ForgotPasswordPage() {
  const t = useTranslations('auth');
  const [modalContent, setModalContent] = useState<TRegisterEmailResponse | null>(null);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TRegisterEmailForm>({
    mode: 'onBlur',
    resolver: yupResolver(emailSchema),
  });
  const { mutateAsync, isPending } = useForgotPassword();

  const onSubmit = async (data: TRegisterEmailForm) => {
    const result = await mutateAsync(data);
    setModalContent(result);
  };

  return (
    <>
      <AuthLayout title="pages.forgot_password.title" hideLoginWithGoogle>
        <form
          className="w-full flex items-center justify-center flex-col gap-1"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            {...register('email')}
            type="email"
            placeholder={t(`fields.email.label`)}
            label="auth.fields.email.label"
            disabled={isPending}
            errorMessage={errors.email?.message}
          />
          <Button type="submit" disabled={isPending}>
            {t('pages.forgot_password.button')}
          </Button>

          <PageSwitcher page="forgot_password" link={PageUrls.LOGIN} />
        </form>
      </AuthLayout>
      <AuthSuccessModal
        page="forgot_password"
        modalContent={modalContent}
        setModalContent={setModalContent}
      />
    </>
  );
}

export default ForgotPasswordPage;
