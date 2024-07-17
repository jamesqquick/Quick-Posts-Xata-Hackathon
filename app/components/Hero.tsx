import Link from 'next/link';

export default function Hero() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-12">
        <h1 className="text-8xl  mb-8 text-center font-bold leading-[100px] text-white">
          AI Content{' '}
          <span className="block text-gray-300 opacity-90 ">For Devs</span>
        </h1>
        <p className="text-xl text-center text-gray-100 opacity-80">
          Effortlessly create developer focused content to share on your social
          media using the power of AI.
        </p>
      </div>
      <div className="flex justify-center">
        <Link
          href="/dashboard"
          className="px-8 py-4 hover:bg-gray-200 rounded-full text-xl transition-colors bg-gray-50 text-gray-950 font-bold"
        >
          Start Creating
        </Link>
      </div>
    </div>
  );
}
