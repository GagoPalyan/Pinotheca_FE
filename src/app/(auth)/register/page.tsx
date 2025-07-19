import Loading from '@/components/shared/loading';
import RegisterPage from '@/components/views/register';
import { Suspense } from 'react';

function Register() {
  return (
    <Suspense fallback={<Loading />}>
      <RegisterPage />
    </Suspense>
  );
}

export default Register;
