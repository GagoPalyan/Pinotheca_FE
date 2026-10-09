'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Button from '@/components/ui/button';
import Switcher from '@/components/ui/switcher';
import { PageUrls } from '@/types/path.types';
import { useRouter } from 'next/navigation';
import { PICTURE_DETAILS_TABS } from '../constants';
import type { IPictureDetail, TPictureDetailsTab } from '../types';

interface IDetails {
  picture: IPictureDetail;
}

function Details({ picture }: IDetails) {
  const t = useTranslations('picture');
  const router = useRouter();
  const [tab, setTab] = useState<TPictureDetailsTab>(PICTURE_DETAILS_TABS[0].key);
  const activeTab =
    PICTURE_DETAILS_TABS.find((item) => item.key === tab) ?? PICTURE_DETAILS_TABS[0];
  const ActiveComponent = activeTab.Component;

  return (
    <section className="w-container flex flex-col items-center gap-14 py-14">
      <div className="w-full max-w-[890px] flex flex-col gap-6 items-center">
        <Switcher
          value={tab}
          onChange={setTab}
          options={PICTURE_DETAILS_TABS.map(({ key, translationKey }) => ({
            value: key,
            label: t(translationKey),
          }))}
        />
        <ActiveComponent picture={picture} />
      </div>
      <div className="flex flex-col items-center gap-3">
        <p className="text-semibold text-black text-center">{t('contact.prompt')}</p>
        <Button
          variant="secondary"
          size="small"
          customClass="w-fit border-none bg-transparent hover:bg-primary-50 text-primary-600"
          handleClick={() => router.push(PageUrls.ABOUT_US)}
        >
          {t('contact.link')}
        </Button>
      </div>
    </section>
  );
}

export default Details;
