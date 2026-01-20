'use client';

import { HOBBIES } from '@/constants/hobbies';
import TopBar from '@/components/TopBar';
import CategoryHero from '@/components/CategoryHero';
import HobbyGrid from '@/components/HobbyGrid';

export default function IntellectualPage() {
  const intellectualHobbies = HOBBIES.filter(
    (hobby) => hobby.category === 'intellectual',
  );

  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <CategoryHero category="intellectual" />
      <div className="bg-grayBg">
        <HobbyGrid hobbies={intellectualHobbies} />
      </div>
    </div>
  );
}
