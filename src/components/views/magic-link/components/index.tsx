'use client';

import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { MAGIC_LINK_SCHEMA } from '@/utils/validations/auth.schema';
import type { TRegisterMagicLinkFrom } from '@/types/auth.types';
import AuthLayout from '@/components/shared/auth';
import Input from '@/components/ui/input';
import { useTranslations } from 'next-intl';
import Button from '@/components/ui/button/components';
import { MAGIC_LINK_FIELDS } from '../constants/fields-list';
import { useMagicLink } from '@/hooks/api/auth/magic-link';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'react-toastify';
import { PageUrls } from '@/types/path.types';
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
    resolver: yupResolver(MAGIC_LINK_SCHEMA),
    defaultValues: {
      terms: false,
    },
  });
  const { mutateAsync, isPending } = useMagicLink();

  const onSubmit = async (data: TRegisterMagicLinkFrom) => {
    const token = searchParams.get('token');
    if (!token) return toast.error(t('auth.errors.token'));

    const result = await mutateAsync({ ...data, token });
    if (result?.accessToken) {
      await router.replace(PageUrls.HOME);
      router.refresh();
    }
  };

  return (
    <AuthLayout hideLoginWithGoogle>
      <form
        className="w-full flex items-center justify-center flex-col gap-1"
        onSubmit={handleSubmit(onSubmit)}
      >
        {MAGIC_LINK_FIELDS.map(({ name, type }) => (
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

        <Controller
          name="terms"
          control={control}
          render={({ field }) => (
            <Checkbox
              value={field.value}
              handleChange={() => field.onChange(!field.value)}
              label={'auth.fields.terms.label'}
              disabled={isPending}
              errorMessage={errors.terms?.message}
            />
          )}
        />

        <Button type="submit" disabled={isPending}>
          {t('auth.pages.magic_link.title')}
        </Button>
      </form>
    </AuthLayout>
  );
}

export default MagicLinkPage;
