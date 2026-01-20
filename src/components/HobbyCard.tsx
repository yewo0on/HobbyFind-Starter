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
              'inline-block rounded-full px-3 py-1 text-xs font-semibold',
              hobby.category === 'sports' &&
                'bg-pink-100 text-pink-700 ring-1 ring-pink-200',
              hobby.category === 'intellectual' &&
                'bg-blue-100 text-blue-700 ring-1 ring-blue-200',
              hobby.category === 'art' &&
                'bg-purple-100 text-purple-700 ring-1 ring-purple-200',
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
