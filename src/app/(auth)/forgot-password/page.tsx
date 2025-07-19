import Loading from '@/components/shared/loading';
import ForgotPasswordPage from '@/components/views/forgot-password';
import { Suspense } from 'react';

function ForgotPassword() {
  return (
    <Suspense fallback={<Loading />}>
      <ForgotPasswordPage />
    </Suspense>
  );
}

export default ForgotPassword;
