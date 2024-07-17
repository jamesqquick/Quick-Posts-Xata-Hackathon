'use server';
import { auth } from '@clerk/nextjs/server';
import { ActionReturnVal } from '../types';
import { z } from 'zod';
import { redirect } from 'next/navigation';
import { generateSocialPosts } from '../lib/ai';
import prisma from '../lib/prisma';
import { revalidatePath } from 'next/cache';
import { Tweet } from '@prisma/client';

export async function generateSocialPostsAction(
  message: string
): Promise<ActionReturnVal> {
  const { userId } = auth().protect();

  if (!userId) {
    redirect('/');
  }
  try {
    const tweets = await generateSocialPosts(message);
    tweets.forEach((tweet) => {
      tweet.user_id = userId;
    });
    console.log(tweets);
    //save tweets
    await prisma.tweet.createMany({
      data: tweets,
    });

    return {
      errorMsg: '',
      successMsg: 'Review posts in the review tab',
      data: tweets,
    };
  } catch (error) {
    console.error(error);
    return {
      errorMsg: 'Failed to generate social posts',
    };
  }
}

export async function deleteTweetAction(
  tweet: Tweet
): Promise<ActionReturnVal> {
  const { userId } = auth().protect();

  if (!userId) {
    redirect('/');
  }

  try {
    //delete tweet
    await prisma.tweet.delete({
      where: {
        xata_id: tweet.xata_id,
      },
    });
    revalidatePath('/dashboard/review');

    return {
      successMsg: 'Tweet deleted',
    };
  } catch (error) {
    console.error(error);
    return {
      errorMsg: 'Failed to delete tweet',
    };
  }
}

//zod schema for validation
const approveTweetSchema = z.object({
  xata_id: z.string(),
  content: z.string(),
});

export async function approveTweetAction(
  prevData: ActionReturnVal,
  formData: FormData
): Promise<ActionReturnVal> {
  const { userId } = auth().protect();

  if (!userId) {
    redirect('/');
  }

  const tweetId = formData.get('xata_id') as string;
  const content = formData.get('content') as string;
  const validated = approveTweetSchema.safeParse({
    xata_id: tweetId,
    content,
  });

  if (!validated.success) {
    const errors = validated.error.issues.reduce(
      (acc: { [key: string]: string }, issue) => {
        acc[issue.path[0]] = issue.message;
        return acc;
      },
      {}
    );
    return {
      errors,
    };
  }

  try {
    await prisma.tweet.update({
      where: {
        xata_id: tweetId,
      },
      data: {
        approved: true,
        content,
      },
    });

    revalidatePath('/dashboard/review');
    revalidatePath('/dashboard');
    return {
      successMsg: 'Tweet approved',
    };
  } catch (error) {
    console.error(error);
    return {
      errorMsg: 'Failed to approve tweet',
    };
  }
}
