'use client';

import { HOBBIES } from '@/constants/hobbies';
import CategoryHero from '@/components/CategoryHero';
import HobbyGrid from '@/components/HobbyGrid';

export default function IntellectualPage() {
  const intellectualHobbies = HOBBIES.filter(
    (hobby) => hobby.category === 'intellectual',
  );

  return (
    <div className="bg-white">
      <CategoryHero category="intellectual" />
      <div className="bg-grayBg">
        <HobbyGrid hobbies={intellectualHobbies} />
      </div>
    </div>
  );
}
