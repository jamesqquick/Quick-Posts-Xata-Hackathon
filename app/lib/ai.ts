import OpenAI from 'openai';

export const generateSocialPosts = async (topic: string) => {
  const openai = new OpenAI();
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content:
          'You are a content creator focused on creating engagement on Twitter in the web development space. Generate 3 twitter posts each of less than 240 characters. One asks a thought provoking question. One is a joke. One provides a best practice. These tweets should be based on the following topic and should be returned as a JSON array of tweet objects with a type property of "joke", "question", or "best-practice" and a content property with the tweet.',
      },
      { role: 'user', content: topic },
    ],
    model: 'gpt-3.5-turbo',
    max_tokens: 1200,
    response_format: { type: 'json_object' },
  });
  const contentStr = completion.choices[0]?.message.content;
  if (!contentStr) {
    throw new Error('Failed to generate social posts');
  }
  const { tweets } = JSON.parse(contentStr);
  return tweets;
};
