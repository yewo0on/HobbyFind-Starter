'use client';

import { Dumbbell, Brain, Palette, type LucideIcon } from 'lucide-react';

import type { HobbyCategory } from '@/constants/hobbies';
import { cn } from '@/lib/utils';

const CATEGORY_CONFIG: Record<
  HobbyCategory,
  {
    title: string;
    subtitle: string;
    description: string;
    icon: LucideIcon;
    gradientFrom: string;
    gradientVia: string;
    gradientTo: string;
    badgeGradient: string;
    buttonGradient: string;
    bgFrom: string;
    bgVia: string;
    bgTo: string;
    blur1: string;
    blur2: string;
    blur3: string;
  }
> = {
  sports: {
    title: '운동형 취미',
    subtitle: '활기찬 하루를 시작하세요',
    description: '몸을 움직이며 에너지를 발산하고, 건강한 라이프스타일을 만들어가세요.',
    icon: Dumbbell,
    gradientFrom: 'from-pink-500',
    gradientVia: 'via-rose-500',
    gradientTo: 'to-red-500',
    badgeGradient: 'from-pink-400 to-rose-400',
    buttonGradient: 'from-pink-500 to-rose-500',
    bgFrom: 'from-pink-50',
    bgVia: 'via-rose-50',
    bgTo: 'to-red-50',
    blur1: 'bg-pink-200',
    blur2: 'bg-rose-200',
    blur3: 'bg-red-200',
  },
  intellectual: {
    title: '지능형 취미',
    subtitle: '새로운 지식의 세계로',
    description: '집중력과 사고력을 기르며, 평생 가는 지적 자산을 쌓아가세요.',
    icon: Brain,
    gradientFrom: 'from-blue-500',
    gradientVia: 'via-sky-500',
    gradientTo: 'to-cyan-500',
    badgeGradient: 'from-blue-400 to-sky-400',
    buttonGradient: 'from-blue-500 to-sky-500',
    bgFrom: 'from-blue-50',
    bgVia: 'via-sky-50',
    bgTo: 'to-cyan-50',
    blur1: 'bg-blue-200',
    blur2: 'bg-sky-200',
    blur3: 'bg-cyan-200',
  },
  art: {
    title: '예술형 취미',
    subtitle: '창의력을 만개시키세요',
    description: '감성을 표현하고 아름다움을 만들어내며, 나만의 예술 세계를 탐험하세요.',
    icon: Palette,
    gradientFrom: 'from-purple-500',
    gradientVia: 'via-violet-500',
    gradientTo: 'to-fuchsia-500',
    badgeGradient: 'from-purple-400 to-violet-400',
    buttonGradient: 'from-purple-500 to-violet-500',
    bgFrom: 'from-purple-50',
    bgVia: 'via-violet-50',
    bgTo: 'to-fuchsia-50',
    blur1: 'bg-purple-200',
    blur2: 'bg-violet-200',
    blur3: 'bg-fuchsia-200',
  },
};

interface CategoryHeroProps {
  category: HobbyCategory;
}

export default function CategoryHero({ category }: CategoryHeroProps) {
  const config = CATEGORY_CONFIG[category];
  const Icon = config.icon;

  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden px-6 py-20">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${config.bgFrom} ${config.bgVia} ${config.bgTo}`}
      />

      <div
        className={`absolute left-10 top-20 h-64 w-64 rounded-full ${config.blur1} opacity-30 blur-3xl animate-pulse`}
        style={{ animationDelay: '0s' }}
      />
      <div
        className={`absolute right-20 top-40 h-80 w-80 rounded-full ${config.blur2} opacity-30 blur-3xl animate-pulse`}
        style={{ animationDelay: '1s' }}
      />
      <div
        className={`absolute bottom-20 left-1/3 h-72 w-72 rounded-full ${config.blur3} opacity-30 blur-3xl animate-pulse`}
        style={{ animationDelay: '2s' }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div
          className={`mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${config.badgeGradient} px-5 py-2.5 shadow-lg`}
        >
          <Icon className="h-5 w-5 text-white" />
          <span className="text-sm font-semibold text-white">{config.subtitle}</span>
        </div>

        <h1
          className={`mb-6 text-4xl font-bold text-textPrimary sm:text-5xl md:text-6xl lg:text-7xl`}
        >
          <span
            className={`bg-gradient-to-r ${config.gradientFrom} ${config.gradientVia} ${config.gradientTo} bg-clip-text text-transparent`}
          >
            {config.title}
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-base text-textSecondary sm:text-lg md:text-xl">
          {config.description}
        </p>

        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-4 py-2 shadow-md">
            <Icon
              className={cn(
                'h-5 w-5',
                category === 'sports' && 'text-pink-600',
                category === 'intellectual' && 'text-blue-600',
                category === 'art' && 'text-purple-600',
              )}
            />
            <span className="text-sm font-medium text-textPrimary">
              6가지 취미 둘러보기
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
