'use client';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  useAuth,
  UserButton,
} from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';

export default function Nav() {
  const { userId, isLoaded } = useAuth();

  return (
    <nav className="w-full flex justify-between mt-10 mb-16 max-w-4xl mx-auto px-8 md:px-0 h-24 items-center">
      <Link href="/" className="text-2xl font-bold text-white">
        Quick Posts
      </Link>

      <div className="flex gap-x-4 items-center">
        <SignedIn>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/dashboard/create">Create</Link>
          <Link href="/dashboard/review">Review</Link>
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <button className="px-6 py-2 hover:bg-gray-200 rounded-full text-lg transition-colors bg-gray-50 text-gray-950 font-bold">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
