import { useTranslations } from 'next-intl';
import { PAYMENT_ICONS } from '../constants';
import Image from 'next/image';

function Payment() {
  const t = useTranslations('picture.payment');

  return (
    <div className="w-full flex flex-col gap-3.5">
      <h2 className="text-semibold text-black">{t('title')}</h2>
      <div className="flex items-center gap-3.5">
        {PAYMENT_ICONS.map((icon) => (
          <Image
            key={icon}
            src={`/icons/${icon}.svg`}
            alt={icon}
            width={24}
            height={24}
            className="w-auto"
          />
        ))}
      </div>
    </div>
  );
}

export default Payment;
