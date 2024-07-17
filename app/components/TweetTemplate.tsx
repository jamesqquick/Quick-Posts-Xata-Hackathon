import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  tweet: string;
}

export const TweetTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  tweet,
}) => (
  <div>
    <h1>{firstName}!</h1>
    <p>Here is your tweet to share today!</p>
    <p>{tweet}</p>
  </div>
);
