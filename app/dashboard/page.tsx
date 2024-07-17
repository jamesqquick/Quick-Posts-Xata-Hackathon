import React from 'react';
import PageHeader from '../components/Header';
import UpcomingTweets from '../components/UpcomingTweets';

export default function DashboardPage() {
  return (
    <>
      <PageHeader title="Upcoming Posts"></PageHeader>
      <UpcomingTweets />
    </>
  );
}
