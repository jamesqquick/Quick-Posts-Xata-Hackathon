import { Resend } from 'resend';
import { inngest } from './client';
import { TweetTemplate } from '@/app/components/TweetTemplate';

export const sendEmailFunction = inngest.createFunction(
  { id: 'email-post' },
  { cron: '0 10 * * *' },

  async ({ event, step, prisma }) => {
    // Fetch data from the database
    const tweet = await prisma.tweet.findFirst({
      where: {
        approved: true,
        sent: false,
      },
    });

    if (!tweet) {
      return { event, body: 'No tweets to send!' };
    }

    //TODO get user email and name
    //send email
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'hello world',
      text: 'it works!',
      react: TweetTemplate({ firstName: 'John', tweet: tweet.content }),
    });

    if (error) {
      console.error(error);
      return { event, body: 'Failed to send email!' };
    }

    //update tweet to be marked as sent
    // await prisma.tweet.update({
    //   where: {
    //     xata_id: tweet.xata_id,
    //   },
    //   data: {
    //     sent: true,
    //   },
    // });
    return { event, body: 'Twitter post sent by email!' };
  }
);
