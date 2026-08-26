'use client';

import Button from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';

function HomePage() {
  const router = useRouter();
  return (
    <div>
      <Button
        handleClick={() => {
          router.refresh();
        }}
        size="large"
        variant="ghost"
      />
    </div>
  );
}

export default HomePage;
