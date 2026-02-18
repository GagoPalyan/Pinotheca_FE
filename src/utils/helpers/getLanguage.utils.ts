import { LanguagesValueEnum } from '@/types/lang.enums';
import Cookies from 'js-cookie';

const getLanguage = () => {
  const cookieStore = Cookies.get('locale');
  if (
    cookieStore &&
    Object.values(LanguagesValueEnum).includes(cookieStore as LanguagesValueEnum)
  ) {
    return cookieStore as LanguagesValueEnum;
  }
  return LanguagesValueEnum.EN;
};

export default getLanguage;
