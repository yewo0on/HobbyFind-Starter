'use client';

import { Dumbbell, Brain, Palette, type LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

import type { HobbyCategory } from '@/constants/hobbies';
import { cn } from '@/lib/utils';

const CATEGORY_CONFIG: Record<
  HobbyCategory,
  {
    title: string;
    subtitle: string;
    description: string;
    icon: LucideIcon;
    bg: string;
    blur: string;
    badgeBg: string;
    titleColor: string;
    iconColor: string;
  }
> = {
  sports: {
    title: '운동형 취미',
    subtitle: '활기찬 하루를 시작하세요',
    description: '몸을 움직이며 에너지를 발산하고, 건강한 라이프스타일을 만들어가세요.',
    icon: Dumbbell,
    bg: 'bg-sports-50',
    blur: 'bg-sports-200',
    badgeBg: 'bg-sports-500',
    titleColor: 'text-sports-600',
    iconColor: 'text-sports-600',
  },
  intellectual: {
    title: '지능형 취미',
    subtitle: '새로운 지식의 세계로',
    description: '집중력과 사고력을 기르며, 평생 가는 지적 자산을 쌓아가세요.',
    icon: Brain,
    bg: 'bg-intellectual-50',
    blur: 'bg-intellectual-200',
    badgeBg: 'bg-intellectual-500',
    titleColor: 'text-intellectual-600',
    iconColor: 'text-intellectual-600',
  },
  art: {
    title: '예술형 취미',
    subtitle: '창의력을 만개시키세요',
    description: '감성을 표현하고 아름다움을 만들어내며, 나만의 예술 세계를 탐험하세요.',
    icon: Palette,
    bg: 'bg-art-50',
    blur: 'bg-art-200',
    badgeBg: 'bg-art-500',
    titleColor: 'text-art-600',
    iconColor: 'text-art-600',
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
      <div className={cn('absolute inset-0', config.bg)} />

      <div
        className={cn(
          'absolute left-10 top-20 h-64 w-64 rounded-full opacity-30 blur-3xl animate-pulse',
          config.blur,
        )}
        style={{ animationDelay: '0s' }}
      />
      <div
        className={cn(
          'absolute right-20 top-40 h-80 w-80 rounded-full opacity-30 blur-3xl animate-pulse',
          config.blur,
        )}
        style={{ animationDelay: '1s' }}
      />
      <div
        className={cn(
          'absolute bottom-20 left-1/3 h-72 w-72 rounded-full opacity-30 blur-3xl animate-pulse',
          config.blur,
        )}
        style={{ animationDelay: '2s' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className={cn(
            'mb-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 shadow-lg',
            config.badgeBg,
          )}
        >
          <Icon className="h-5 w-5 text-white" />
          <span className="text-sm font-semibold text-white">{config.subtitle}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className={cn(
            'mb-6 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl',
            config.titleColor,
          )}
        >
          {config.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="mx-auto mb-10 max-w-2xl text-base text-textSecondary sm:text-lg md:text-xl"
        >
          {config.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="flex items-center justify-center gap-2"
        >
          <div className="flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-4 py-2 shadow-md">
            <Icon
              className={cn(
                'h-5 w-5',
                config.iconColor,
              )}
            />
            <span className="text-sm font-medium text-textPrimary">
              6가지 취미 둘러보기
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
