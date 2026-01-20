'use client';

import type { Hobby } from '@/constants/hobbies';

import HobbyCard from './HobbyCard';

interface HobbyGridProps {
  hobbies: Hobby[];
}

export default function HobbyGrid({ hobbies }: HobbyGridProps) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {hobbies.map((hobby) => (
          <HobbyCard key={hobby.id} hobby={hobby} />
        ))}
      </div>
    </div>
  );
}
