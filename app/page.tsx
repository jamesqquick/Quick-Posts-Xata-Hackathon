import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import Hero from './components/Hero';

export default async function Home() {
  return (
    <div className="mt-10">
      <Hero />
    </div>
  );
}
