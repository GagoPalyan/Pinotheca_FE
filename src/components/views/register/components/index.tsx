'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRegister } from '@/hooks/api/auth/register';
import { emailSchema } from '@/utils/validations/auth.schema';
import type { TRegisterEmailForm, TRegisterEmailResponse } from '@/types/auth.types';
import AuthLayout from '@/components/shared/auth';
import Input from '@/components/ui/input';
import { useTranslations } from 'next-intl';
import PageSwitcher from '@/components/shared/auth/page-switcher';
import Button from '@/components/ui/button/components';
import { useState } from 'react';
import RegisterSuccessModal from './modal';

function RegisterPage() {
  const t = useTranslations();
  const [modalContent, setModalContent] = useState<TRegisterEmailResponse | null>(null);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TRegisterEmailForm>({
    mode: 'onBlur',
    resolver: yupResolver(emailSchema),
  });
  const { mutateAsync, isPending } = useRegister();
  const disableFields = isPending;

  const onSubmit = async (data: TRegisterEmailForm) => {
    const result = await mutateAsync(data);
    setModalContent(result);
  };

  return (
    <>
      <AuthLayout>
        <form
          className="w-full flex items-center justify-center flex-col gap-1"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            {...register('email')}
            type={'email'}
            placeholder={t('auth.fields.email.label')}
            label={t('auth.fields.email.label')}
            disabled={disableFields}
            errorMessage={errors.email?.message}
          />
          <Button type="submit" disabled={disableFields}>
            {t('auth.pages.register.title')}
          </Button>

          <PageSwitcher page="login" />
        </form>
      </AuthLayout>
      <RegisterSuccessModal modalContent={modalContent} setModalContent={setModalContent} />
    </>
  );
}

export default RegisterPage;
