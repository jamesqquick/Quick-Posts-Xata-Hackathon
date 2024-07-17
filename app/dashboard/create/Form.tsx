'use client';

import SubmitButton from '../../components/SubmitButton';
import { generateSocialPostsAction } from '../../actions/dashboard';
import toast from 'react-hot-toast';

export default function Form() {
  const onSubmit = async (formData: FormData) => {
    const message = formData.get('message') as string;
    console.log(message);
    const { data, errorMsg, successMsg } = await generateSocialPostsAction(
      message
    );
    if (successMsg) {
      toast.success(successMsg);
      //do something with data
    } else if (errorMsg) {
      toast.error(errorMsg);
    }
  };

  return (
    <form
      action={onSubmit}
      className="p-6 bg-indigo-900/10 dark:bg-indigo-400/10 flex flex-col items-start gap-4 rounded-lg border border-indigo-900/20  dark:border-indigo-400/20 mt-10 mb-10"
    >
      <label className="w-full flex flex-col gap-2">
        What topic would you like to generate social posts for?
        <textarea
          name="message"
          required
          className="w-full min-h-[10rem] p-3 bg-slate-1000/40 border border-indigo-900/50 dark:border-indigo-400/50 outline-none rounded-md dark:text-black"
        />
      </label>
      <div className="mt-4 w-full flex flex-row items-center justify-center">
        <SubmitButton text="Generate" submittingText="Generating..." />
      </div>
    </form>
  );
}
