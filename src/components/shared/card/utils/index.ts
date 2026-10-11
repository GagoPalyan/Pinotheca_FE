import { _Translator } from 'next-intl';

const getTranslations = (t: _Translator, material: string, paint: string) => ({
  material: t(`picture.material.${material}`),
  paint: t(`picture.paint.${paint}`),
});

export { getTranslations };
