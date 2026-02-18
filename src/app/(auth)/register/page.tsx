import Loading from '@/components/shared/loading';
import RegisterPage from '@/components/views/register';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Register',
  description: 'Register page',
};

function Register() {
  return (
    <Suspense fallback={<Loading />}>
      <RegisterPage />
    </Suspense>
  );
}

export default Register;
