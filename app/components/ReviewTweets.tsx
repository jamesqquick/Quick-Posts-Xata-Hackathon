import React from 'react';
import prisma from '../lib/prisma';
import EditTweet from './EditTweet';
import { auth } from '@clerk/nextjs/server';

export default async function ReviewTweets() {
  const { userId } = auth().protect();
  const tweets = await prisma.tweet.findMany({
    where: {
      approved: false,
      user_id: userId,
    },
  });

  return (
    <div className="flex flex-col gap-y-10 max-w-xl mx-auto">
      {tweets.map((tweet) => (
        <EditTweet key={tweet.xata_id} tweet={tweet} />
      ))}
    </div>
  );
}
