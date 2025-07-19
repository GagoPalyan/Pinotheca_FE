import Cookies from 'js-cookie';
import isDev from './isDev.utils';

const setAccessToken = (accessToken: string) => {
  const expires = new Date(Date.now() + 1000 * 60 * 60 * 2);
  Cookies.set('accessToken', accessToken, {
    expires,
    secure: !isDev(),
    sameSite: isDev() ? 'lax' : 'none',
  });
};

export { setAccessToken };
