import type { Metadata } from 'next';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import Loading from '@/components/shared/loading';
import PicturePage, { getPicture } from '@/components/views/picture';
import type { TErrorObject } from '@/types';

interface IPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: IPageProps): Promise<Metadata> {
  try {
    const { id } = await params;
    const picture = await getPicture(id);

    return {
      title: picture.title,
      description: picture.description,
    };
  } catch {
    return {
      title: 'Picture',
      description: 'Artwork details',
    };
  }
}

async function Picture({ params }: IPageProps) {
  const { id } = await params;

  let data;
  try {
    data = await getPicture(id);
  } catch (error) {
    if ((error as TErrorObject).status === 404) notFound();
    throw error;
  }

  return (
    <Suspense fallback={<Loading />}>
      <PicturePage data={data} />
    </Suspense>
  );
}

export default Picture;
