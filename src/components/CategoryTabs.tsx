'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

const CATEGORIES = [
  { path: '/', label: '전체' },
  { path: '/sports', label: '운동형' },
  { path: '/intellectual', label: '지능형' },
  { path: '/art', label: '예술형' },
] as const;

export default function CategoryTabs() {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap gap-2">
      {CATEGORIES.map((category) => {
        const isActive =
          pathname === category.path ||
          (category.path !== '/' && pathname.startsWith(category.path));

        return (
          <Link
            key={category.path}
            href={category.path}
            className={cn(
              'rounded-full px-3 py-1 text-sm font-medium transition-colors',
              isActive
                ? 'bg-grayBg text-primary'
                : 'text-textSecondary hover:bg-grayBg hover:text-textPrimary',
            )}
          >
            {category.label}
          </Link>
        );
      })}
    </div>
  );
}
