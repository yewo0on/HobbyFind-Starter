'use client';

import type { HobbyCategory } from '@/constants/hobbies';

const CATEGORY_INFO: Record<
  HobbyCategory,
  { title: string; description: string }
> = {
  sports: {
    title: '운동형 취미',
    description:
      '몸을 움직이며 스트레스를 해소할 수 있는 활동형 취미를 모았어요.',
  },
  intellectual: {
    title: '지능형 취미',
    description:
      '집중력과 사고력을 기를 수 있는 지적 활동형 취미입니다.',
  },
  art: {
    title: '예술형 취미',
    description:
      '창의력을 발휘하며 감성을 표현할 수 있는 예술 관련 취미입니다.',
  },
};

interface CategoryHeaderProps {
  category: HobbyCategory;
}

export default function CategoryHeader({ category }: CategoryHeaderProps) {
  const info = CATEGORY_INFO[category];

  return (
    <header className="border-b border-grayBorder bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <h2 className="text-2xl font-semibold text-textPrimary">{info.title}</h2>
        <p className="mt-2 text-textSecondary">{info.description}</p>
      </div>
    </header>
  );
}
