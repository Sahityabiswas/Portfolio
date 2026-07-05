import React from 'react';

export function Skeleton({ className = "" }) {
  return (
    <div className={`animate-pulse bg-white/5 rounded-xl ${className}`}>
      <div className="h-full w-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
    </div>
  );
}

export function ProjectSkeleton() {
  return (
    <div className="rounded-[2rem] bg-white/5 border border-white/10 overflow-hidden">
      <Skeleton className="aspect-[4/3] m-2 rounded-[1.5rem]" />
      <div className="p-8 space-y-4">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-3 w-full" />
        <div className="flex gap-2">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-5 w-20 rounded-full" />
          <Skeleton className="h-5 w-14 rounded-full" />
        </div>
      </div>
    </div>
  );
}
