'use client';

import { HOBBIES } from '@/constants/hobbies';
import TopBar from '@/components/TopBar';
import CategoryHero from '@/components/CategoryHero';
import HobbyGrid from '@/components/HobbyGrid';

export default function SportsPage() {
  const sportsHobbies = HOBBIES.filter((hobby) => hobby.category === 'sports');

  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <CategoryHero category="sports" />
      <div className="bg-grayBg">
        <HobbyGrid hobbies={sportsHobbies} />
      </div>
    </div>
  );
}
