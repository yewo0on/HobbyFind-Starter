'use client';

import { HOBBIES } from '@/constants/hobbies';
import TopBar from '@/components/TopBar';
import CategoryHero from '@/components/CategoryHero';
import HobbyGrid from '@/components/HobbyGrid';

export default function ArtPage() {
  const artHobbies = HOBBIES.filter((hobby) => hobby.category === 'art');

  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <CategoryHero category="art" />
      <div className="bg-grayBg">
        <HobbyGrid hobbies={artHobbies} />
      </div>
    </div>
  );
}
