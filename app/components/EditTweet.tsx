'use client';
import { Tweet } from '@prisma/client';
import React from 'react';
import SubmitButton from './SubmitButton';
import { approveTweetAction, deleteTweetAction } from '../actions/dashboard';
import { useFormState } from 'react-dom';
import { ActionReturnVal } from '../types';
import IconButton from './IconButton';
import { FaTrash } from 'react-icons/fa';
import DeleteButton from './DeleteButton';
import toast from 'react-hot-toast';

interface EditTweetProps {
  tweet: Tweet;
}
const initialState: ActionReturnVal = {};

export default function EditTweet({ tweet }: EditTweetProps) {
  const [serverState, formAction] = useFormState(
    approveTweetAction,
    initialState
  );

  const handleDelete = async () => {
    const { successMsg, errorMsg } = await deleteTweetAction(tweet);
    if (errorMsg) {
      toast.error(errorMsg);
      return;
    } else if (successMsg) {
      toast.success(successMsg);
    }
  };
  return (
    <form className="flex flex-col gap-4" action={formAction}>
      <textarea
        className="w-full p-4 text-white bg-gray-800 rounded-md"
        defaultValue={tweet.content}
        rows={3}
        name="content"
        maxLength={240}
      />
      <input type="hidden" name="xata_id" value={tweet.xata_id} />

      <button
        className="bg-red-500 py-2 px-4 rounded-md w-full hover:bg-red-700"
        type="button"
        onClick={handleDelete}
      >
        Delete
      </button>
      <SubmitButton text="Save" submittingText="Saving..." />
    </form>
  );
}
