import React from 'react';
import prisma from '../lib/prisma';
import { redirect } from 'next/navigation';
import { currentUser } from '@clerk/nextjs/server';
import TwitterPreview from './TwitterPreview';

export default async function UpcomingTweets() {
  const user = await currentUser();

  if (!user) {
    redirect('/');
  }
  const tweets = await prisma.tweet.findMany({
    where: {
      approved: true,
    },
  });

  const name = user.firstName + ' ' + user.lastName;
  const email = user.emailAddresses[0].emailAddress;
  const handle = email.split('@')[0];
  return (
    <div className="grid grid-cols-1 gap-y-8  mx-auto max-w-xl">
      {tweets.map((tweet) => (
        <TwitterPreview
          key={tweet.xata_id}
          name={name}
          imageURL="/placeholder.jpg"
          content={tweet.content}
          handle={handle}
        />
      ))}
    </div>
  );
}
