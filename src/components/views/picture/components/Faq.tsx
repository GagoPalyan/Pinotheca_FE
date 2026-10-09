'use client';

import { useTranslations } from 'next-intl';
import Accordion from '@/components/ui/accordion';
import { FAQ_IDS } from '../constants';

function Faq() {
  const t = useTranslations('picture.faq');

  const items = FAQ_IDS.map((id) => ({
    id,
    title: t(`${id}.question`),
    content: t(`${id}.answer`),
  }));

  return (
    <section className="w-container flex flex-col items-center gap-14 py-14">
      <h2 className="faq-title text-[#2d2424] text-center w-full max-w-[732px]">{t('title')}</h2>
      <div className="w-full max-w-[732px]">
        <Accordion items={items} />
      </div>
    </section>
  );
}

export default Faq;
