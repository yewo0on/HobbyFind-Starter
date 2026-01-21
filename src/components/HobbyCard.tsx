'use client';

import Image from 'next/image';

import type { Hobby } from '@/constants/hobbies';
import { CATEGORY_LABEL } from '@/constants/hobbies';
import { cn } from '@/lib/utils';

interface HobbyCardProps {
  hobby: Hobby;
}

export default function HobbyCard({ hobby }: HobbyCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border border-grayBorder bg-white p-4 transition hover:-translate-y-1 hover:shadow-md">
      <div className="relative mb-3 h-48 w-full overflow-hidden rounded-lg">
        <Image
          src={hobby.imageUrl}
          alt={hobby.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div>
        <div className="mb-2">
          <span
            className={cn(
              'inline-block rounded-full border border-grayBorder px-3 py-1 text-xs font-semibold',
              hobby.category === 'sports' &&
                'bg-sports-100 text-sports-700',
              hobby.category === 'intellectual' &&
                'bg-intellectual-100 text-intellectual-700',
              hobby.category === 'art' &&
                'bg-art-100 text-art-700',
            )}
          >
            {CATEGORY_LABEL[hobby.category]}
          </span>
        </div>
        <h3 className="font-medium text-textPrimary">{hobby.name}</h3>
        <p className="mt-1 text-sm text-textSecondary">{hobby.description}</p>
      </div>
    </article>
  );
}
