export default function IconButton({
  handleClick,
  children,
}: {
  handleClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      className="text-brand bg-gray-100  hover:bg-gray-200 flex h-10 w-10 items-center justify-center rounded-full text-xs transition-transform hover:-translate-y-0.5"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
