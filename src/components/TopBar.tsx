'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Heart, ChevronDown } from 'lucide-react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const CATEGORIES = [
  { path: '/sports', label: '운동형' },
  { path: '/intellectual', label: '지능형' },
  { path: '/art', label: '예술형' },
] as const;

export default function TopBar() {
  const pathname = usePathname();
  const router = useRouter();

  const getCurrentCategory = () => {
    if (pathname.startsWith('/sports')) return '/sports';
    if (pathname.startsWith('/intellectual')) return '/intellectual';
    if (pathname.startsWith('/art')) return '/art';
    return '';
  };

  const handleCategoryChange = (value: string) => {
    router.push(value);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-grayBorder bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Heart className="h-5 w-5 fill-primary text-primary" />
          <span className="text-lg font-semibold text-textPrimary">
            HobbyFind
          </span>
        </Link>
        <Select value={getCurrentCategory() || undefined} onValueChange={handleCategoryChange}>
          <SelectTrigger className="h-auto w-auto border-none bg-transparent px-3 py-2 text-sm font-medium text-textSecondary shadow-none hover:text-textPrimary focus:ring-0 focus:ring-offset-0">
            <SelectValue placeholder="카테고리">
              {getCurrentCategory()
                ? CATEGORIES.find((c) => c.path === getCurrentCategory())?.label
                : '카테고리'}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {CATEGORIES.map((category) => (
              <SelectItem key={category.path} value={category.path}>
                {category.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </header>
  );
}
