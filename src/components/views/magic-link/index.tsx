'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useMagicLink } from '@/hooks/api/auth/magic-link';
import { magicLinkFields } from '@/constants/magic-link-fields';
import { yupResolver } from '@hookform/resolvers/yup';
import { PageUrls } from '@/types/path.enums';
import { magicLinkSchema } from '@/utils/validations/auth.schema';
import type { TRegisterMagicLinkFrom } from '@/types/auth.types';

function MagicLinkPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const { handleSubmit, register, control } = useForm<TRegisterMagicLinkFrom>({
    mode: 'onBlur',
    resolver: yupResolver(magicLinkSchema),
  });

  const { mutateAsync, isPending, isSuccess } = useMagicLink();
  const disableFields = isPending || isSuccess;

  const onSubmit = async (data: TRegisterMagicLinkFrom) => {
    const token = searchParams.get('token');
    if (!token) {
      return toast.error('Invalid token');
    }

    const result = await mutateAsync({ ...data, token });
    if (result.accessToken) {
      return router.replace(PageUrls.HOME);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {magicLinkFields.map(({ name, type, label }) => (
        <input
          {...register(name)}
          key={name}
          type={type}
          name={name}
          placeholder={label}
          disabled={disableFields}
        />
      ))}
      <Controller
        name="terms"
        control={control}
        render={({ field }) => (
          <input onChange={() => field.onChange(!field.value)} type="checkbox" />
        )}
      />

      <button type="submit" disabled={disableFields}>
        Submit
      </button>
    </form>
  );
}

export default MagicLinkPage;
