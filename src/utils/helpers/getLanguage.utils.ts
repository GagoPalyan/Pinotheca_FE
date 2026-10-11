import { LanguagesValueEnum } from '@/types/lang.types';
import Cookies from 'js-cookie';

const getLanguage = () => {
  const cookieStore = Cookies.get('locale');
  const languagesList = new Set<LanguagesValueEnum>(Object.values(LanguagesValueEnum));
  if (cookieStore && languagesList.has(cookieStore as LanguagesValueEnum))
    return cookieStore as LanguagesValueEnum;

  return LanguagesValueEnum.EN;
};

export default getLanguage;
