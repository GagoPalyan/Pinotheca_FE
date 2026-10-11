import { useTranslations } from 'next-intl';

function Headline() {
  const t = useTranslations('gallery.headline');

  return (
    <section className="text-center text-gray-950 py-16 w-container flex flex-col gap-4 items-center font-[Lora]">
      <h1 className="text-6xl">{t('title')}</h1>
      <p className="max-w-2xl text-xl text-gray-700">{t('description')}</p>
    </section>
  );
}

export default Headline;
