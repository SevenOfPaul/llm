'use client';
import Home from '@/components/Home';
import { usePathname } from 'next/navigation';

export default function Page() {
  const pathname = usePathname();
  return <Home pathname={pathname} />;
} 