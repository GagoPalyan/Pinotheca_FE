import Loading from '@/components/shared/loading';
import ResetPasswordPage from '@/components/views/reset-password';
import { Suspense } from 'react';

function ResetPassword() {
  return (
    <Suspense fallback={<Loading />}>
      <ResetPasswordPage />
    </Suspense>
  );
}

export default ResetPassword;
