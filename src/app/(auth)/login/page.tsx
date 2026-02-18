import Loading from '@/components/shared/loading';
import { Suspense } from 'react';
import LoginPage from '@/components/views/login';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login page',
};

function Login() {
  return (
    <Suspense fallback={<Loading />}>
      <LoginPage />
    </Suspense>
  );
}

export default Login;
