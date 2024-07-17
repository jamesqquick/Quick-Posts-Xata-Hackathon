import PageHeader from '@/app/components/Header';
import TwitterPreview from '../../components/TwitterPreview';
import Form from './Form';

export default async function DashboardPage() {
  return (
    <>
      <PageHeader
        title="Create Tweets"
        subtitle="Enter a topic you want to share about and let AI generate 3 Twitter posts for you. You can review these in the review page later."
      />
      <Form />
    </>
  );
}
