'use client';

import { HOBBIES } from '@/constants/hobbies';
import CategoryHero from '@/components/CategoryHero';
import HobbyGrid from '@/components/HobbyGrid';

export default function ArtPage() {
  const artHobbies = HOBBIES.filter((hobby) => hobby.category === 'art');

  return (
    <div className="bg-white">
      <CategoryHero category="art" />
      <div className="bg-grayBg">
        <HobbyGrid hobbies={artHobbies} />
      </div>
    </div>
  );
}
