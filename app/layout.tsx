import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider, UserButton } from '@clerk/nextjs';

import './globals.css';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';
import Nav from './components/Nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js PXCI starter',
  description: 'Your next app powered by Prisma, Xata, Clerk, and Inngest.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="bg-gray-950 min-h-screen   flex flex-col">
            <Nav />
            <main className="max-w-4xl mx-auto px-8 md:px-0 flex-1 w-full">
              {children}
            </main>
            <Footer />
            <Toaster />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
