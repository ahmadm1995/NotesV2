// TagsWrapper.jsx
"use client";

import React from 'react';
import { useSearchParams } from 'next/navigation';
import Tags from './Tags';

export default function TagsWrapper() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword') || "all";
  
  return <Tags keyword={keyword}  />;
}
