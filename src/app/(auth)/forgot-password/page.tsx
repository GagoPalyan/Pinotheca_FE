import Loading from '@/components/shared/loading';
import ForgotPasswordPage from '@/components/views/forgot-password';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Forgot Password',
  description: 'Forgot password page',
};

function ForgotPassword() {
  return (
    <Suspense fallback={<Loading />}>
      <ForgotPasswordPage />
    </Suspense>
  );
}

export default ForgotPassword;
