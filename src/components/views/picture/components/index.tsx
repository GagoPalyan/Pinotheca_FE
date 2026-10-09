'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Breadcrumbs from '@/components/shared/breadcrumbs/components';
import type { IPictureDetail } from '../types';
import Media from './Media';
import Summary from './Summary';
import BuyButton from './BuyButton';
import Share from './Share';
import Shipping from './Shipping';
import Payment from './Payment';
import Details from './Details';
import MoreFromArtist from './MoreFromArtist';

const Faq = dynamic(() => import('./Faq'));

interface IPicturePage {
  data: IPictureDetail;
}

function PicturePage({ data }: IPicturePage) {
  const [likesCount, setLikesCount] = useState(data.likesCount);
  const [sharesCount, setSharesCount] = useState(data.sharesCount);

  return (
    <div className="relative w-full bg-primary-25 pb-16">
      <Breadcrumbs lastText={data.title} />
      <section className="w-container grid grid-cols-1 lg:grid-cols-[minmax(0,1.75fr)_minmax(300px,0.85fr)] gap-10 lg:gap-20 items-start pt-8 pb-10">
        <Media
          id={data.id}
          imageUrl={data.imageUrl}
          title={data.title}
          likesCount={likesCount}
          sharesCount={sharesCount}
          relatedPictures={data.author.pictures}
        />
        <div className="flex flex-col gap-11 max-w-[343px]">
          <div className="flex flex-col gap-4">
            <Summary picture={data} likesCount={likesCount} onLikesCountChange={setLikesCount} />
            <BuyButton id={data.id} isInCart={data.isInCart} isSold={Boolean(data.isSold)} />
          </div>
          <Share
            id={data.id}
            title={data.title}
            imageUrl={data.imageUrl}
            sharesCount={sharesCount}
            onSharesCountChange={setSharesCount}
          />
          <Shipping />
          <Payment />
        </div>
      </section>
      <Details picture={data} />
      <MoreFromArtist pictures={data.author.pictures} />
      <Faq />
    </div>
  );
}

export default PicturePage;
