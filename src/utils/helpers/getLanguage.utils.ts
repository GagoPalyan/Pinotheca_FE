import { LangValue } from '@/types/lang.types';
import Cookies from 'js-cookie';

const getLanguage = () => {
  const cookieStore = Cookies.get('locale');
  const languagesList = new Set<LangValue>(Object.values(LangValue));
  if (cookieStore && languagesList.has(cookieStore as LangValue)) return cookieStore as LangValue;

  return LangValue.EN;
};

export default getLanguage;
