'use client';

import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { magicLinkSchema } from '@/utils/validations/auth.schema';
import type { TRegisterMagicLinkFrom } from '@/types/auth.types';
import AuthLayout from '@/components/shared/auth';
import Input from '@/components/ui/input';
import { useTranslations } from 'next-intl';
import Button from '@/components/ui/button/components';
import { magicLinkFields } from '../constants/fields-list';
import { useMagicLink } from '@/hooks/api/auth/magic-link';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'react-toastify';
import { PageUrls } from '@/types/path.enums';
import Checkbox from '@/components/ui/checkbox';

function MagicLinkPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const t = useTranslations();
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<TRegisterMagicLinkFrom>({
    mode: 'onBlur',
    resolver: yupResolver(magicLinkSchema),
    defaultValues: {
      terms: false,
    },
  });
  const { mutateAsync, isPending } = useMagicLink();
  const disableFields = isPending;

  const onSubmit = async (data: TRegisterMagicLinkFrom) => {
    const token = searchParams.get('token');
    if (!token) return toast.error('Invalid token');

    const result = await mutateAsync({ ...data, token });
    if (result?.accessToken) return router.replace(PageUrls.HOME);
  };

  return (
    <AuthLayout>
      <form
        className="w-full flex items-center justify-center flex-col gap-1"
        onSubmit={handleSubmit(onSubmit)}
      >
        {magicLinkFields.map(({ name, type }) => (
          <Input
            key={name}
            {...register(name)}
            type={type}
            placeholder={t(`auth.fields.${name}.label`)}
            label={t(`auth.fields.${name}.label`)}
            disabled={disableFields}
            errorMessage={errors[name]?.message}
          />
        ))}

        <Controller
          name="terms"
          control={control}
          render={({ field }) => (
            <Checkbox
              value={field.value}
              handleChange={() => field.onChange(!field.value)}
              label={t('auth.fields.terms.label')}
              disabled={disableFields}
              errorMessage={errors.terms?.message}
            />
          )}
        />

        <Button type="submit" disabled={disableFields}>
          {t('auth.pages.magic_link.title')}
        </Button>
      </form>
    </AuthLayout>
  );
}

export default MagicLinkPage;
