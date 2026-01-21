'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles, Palette, Brain, Dumbbell } from 'lucide-react';
import { motion } from 'framer-motion';

import { HOBBIES } from '@/constants/hobbies';
import HobbyGrid from '@/components/HobbyGrid';

export default function Home() {
  return (
    <main>
      {/* Hero 섹션: 문서 가이드에 맞춰 단색 배경 + primarySoft 블러 사용 */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden px-6 py-20">
        <div className="absolute inset-0 bg-grayBg" />

        <div
          className="absolute left-10 top-20 h-64 w-64 rounded-full bg-primarySoft opacity-50 blur-3xl animate-pulse"
          style={{ animationDelay: '0s' }}
        />
        <div
          className="absolute right-20 top-40 h-80 w-80 rounded-full bg-primarySoft opacity-40 blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute bottom-20 left-1/3 h-72 w-72 rounded-full bg-primarySoft opacity-40 blur-3xl animate-pulse"
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
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 shadow-lg"
          >
            <Sparkles className="h-5 w-5 text-white" />
            <span className="text-sm font-semibold text-white">
              오늘부터 시작하는 나만의 이야기
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="mb-6 text-4xl font-bold text-textPrimary sm:text-5xl md:text-6xl lg:text-7xl"
          >
            평범한 일상에
            <br />
            <span className="text-primary">
              색을 더하다
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="mx-auto mb-10 max-w-2xl text-base text-textSecondary sm:text-lg md:text-xl"
          >
            몸을 움직이는 즐거움, 머리를 쓰는 재미, 마음을 표현하는 기쁨.
            <br />
            당신의 라이프스타일에 딱 맞는 취미를 만나보세요!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            className="mb-12 flex flex-wrap items-center justify-center gap-4"
          >
            <div className="flex items-center gap-2 rounded-full bg-sports-100 px-4 py-2 shadow-sm">
              <Dumbbell className="h-5 w-5 text-sports-600" />
              <span className="text-sm font-medium text-sports-700">운동형</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-intellectual-100 px-4 py-2 shadow-sm">
              <Brain className="h-5 w-5 text-intellectual-600" />
              <span className="text-sm font-medium text-intellectual-700">지능형</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-art-100 px-4 py-2 shadow-sm">
              <Palette className="h-5 w-5 text-art-600" />
              <span className="text-sm font-medium text-art-700">예술형</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          >
            <Link
              href="#hobbies"
              className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl active:scale-95"
            >
              취미 탐색하기
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Guide 섹션: primarySoft 배경, white 카드와 카테고리별 링크 */}
      <section
        id="hobbies"
        className="relative mx-auto max-w-7xl px-6 py-16"
      >
        <div className="absolute inset-0 -z-10 rounded-3xl bg-primarySoft" />

        <div className="relative text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-xs font-medium text-textSecondary">
              카테고리별 탐색
            </span>
          </div>

          <h2 className="mb-4 text-2xl font-bold text-textPrimary sm:text-3xl">
            관심 있는 취미를 더 집중해서 살펴보세요
          </h2>
          <p className="mb-8 text-base text-textSecondary sm:text-lg">
            운동형, 지능형, 예술형 카테고리 페이지에서 원하는 취미를 찾아보세요
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/sports"
              className="group flex items-center gap-3 rounded-2xl border border-grayBorder bg-white px-6 py-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="rounded-full bg-sports-100 p-2">
                <Dumbbell className="h-5 w-5 text-sports-600" />
              </div>
              <div className="text-left">
                <div className="text-sm font-medium text-textPrimary">운동형</div>
                <div className="text-xs text-textSecondary">6가지 취미</div>
              </div>
              <ArrowRight className="ml-2 h-4 w-4 text-sports-600 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/intellectual"
              className="group flex items-center gap-3 rounded-2xl border border-grayBorder bg-white px-6 py-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="rounded-full bg-intellectual-100 p-2">
                <Brain className="h-5 w-5 text-intellectual-600" />
              </div>
              <div className="text-left">
                <div className="text-sm font-medium text-textPrimary">지능형</div>
                <div className="text-xs text-textSecondary">6가지 취미</div>
              </div>
              <ArrowRight className="ml-2 h-4 w-4 text-intellectual-600 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/art"
              className="group flex items-center gap-3 rounded-2xl border border-grayBorder bg-white px-6 py-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="rounded-full bg-art-100 p-2">
                <Palette className="h-5 w-5 text-art-600" />
              </div>
              <div className="text-left">
                <div className="text-sm font-medium text-textPrimary">예술형</div>
                <div className="text-xs text-textSecondary">6가지 취미</div>
              </div>
              <ArrowRight className="ml-2 h-4 w-4 text-art-600 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-grayBg">
        <HobbyGrid hobbies={HOBBIES} />
      </section>
    </main>
  );
}
