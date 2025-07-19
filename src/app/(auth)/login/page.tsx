import Loading from '@/components/shared/loading';
import { Suspense } from 'react';
import LoginPage from '@/components/views/login';

function Login() {
  return (
    <Suspense fallback={<Loading />}>
      <LoginPage />
    </Suspense>
  );
}

export default Login;
