'use client';
import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Home from '@/components/Home'; // 导入Home组件

export default function Page() {
  const pathname = usePathname();
  
  return (
    <Home pathname={pathname} />
  );
}