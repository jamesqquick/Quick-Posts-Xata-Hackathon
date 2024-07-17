import { Resend } from 'resend';
import { inngest } from './client';
import { TweetTemplate } from '@/app/components/TweetTemplate';
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmailFunction = inngest.createFunction(
  { id: 'email-post' },
  { cron: '0 10 * * *' },

  async ({ event, step, prisma }) => {
    // Fetch data from the database
    const tweets = await prisma.tweet.findMany({
      where: {
        approved: true,
        sent: false,
      },
      distinct: ['user_id'],
    });

    if (!tweets) {
      return { event, body: 'No tweets to send!' };
    }

    //send email
    const emailPromises = tweets.map((tweet) => {
      resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['delivered@resend.dev'],
        subject: 'Tweet of the Day',
        text: 'it works!',
        react: TweetTemplate({
          firstName: tweet.user_name,
          tweet: tweet.content,
        }),
      });
    });

    await Promise.all(emailPromises);

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
