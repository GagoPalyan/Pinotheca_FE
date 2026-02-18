import Cookies from 'js-cookie';
import isDev from './isDev.utils';

const setAccessToken = (accessToken: string) => {
  Cookies.set('accessToken', accessToken, {
    maxAge: 2 * 60 * 60,
    secure: !isDev(),
    sameSite: isDev() ? 'lax' : 'none',
  });
};

export { setAccessToken };
