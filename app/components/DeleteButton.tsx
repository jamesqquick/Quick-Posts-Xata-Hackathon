'use client';
import { useFormStatus } from 'react-dom';

interface SubmitButtonProps {
  text?: string;
  submittingText?: string;
}
export default function DeleteButton({
  text,
  submittingText,
}: SubmitButtonProps) {
  const { pending, data, method, action } = useFormStatus();

  return (
    <button
      className="bg-red-500 py-2 px-4 rounded-md w-full hover:bg-red-700"
      type="submit"
    >
      {pending ? submittingText : text}
    </button>
  );
}
