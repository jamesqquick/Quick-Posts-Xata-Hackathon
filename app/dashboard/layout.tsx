import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';

interface Props {
  children: React.ReactNode;
}
export default async function dashboardLayout({ children }: Props) {
  const { userId } = auth().protect();

  if (!userId) {
    return redirect('/');
  }

  return <div className="w-full">{children}</div>;
}
