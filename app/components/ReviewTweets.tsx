import React from 'react';
import prisma from '../lib/prisma';
import EditTweet from './EditTweet';

export default async function ReviewTweets() {
  const tweets = await prisma.tweet.findMany({
    where: {
      approved: false,
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
