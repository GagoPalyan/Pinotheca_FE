import Loading from '@/components/shared/loading';
import ResetPasswordPage from '@/components/views/reset-password';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Reset Password',
  description: 'Reset Password page',
};

function ResetPassword() {
  return (
    <Suspense fallback={<Loading />}>
      <ResetPasswordPage />
    </Suspense>
  );
}

export default ResetPassword;
