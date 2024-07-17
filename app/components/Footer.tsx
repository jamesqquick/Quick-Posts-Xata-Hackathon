import Image from 'next/image';
import Icon from './Icon';

type TechStack = {
  Url: string;
  id: string;
  size: number;
  className?: string;
  alt: string;
};

const techStack: TechStack[] = [
  {
    Url: 'https://nextjs.org/',
    id: 'nextjs',
    size: 173.58,
    alt: 'Next.js',
    className: 'w-20 h-3.5',
  },
  {
    Url: 'https://xata.io/',
    id: 'xata',
    size: 142,
    alt: 'Xata',
    className: 'w-20 h-9',
  },
];

export default function Footer() {
  return (
    <footer className="mt-24 mb-10">
      <div className="mx-auto flex max-w-56 flex-col items-center md:max-w-4xl">
        <p className="mb-8 text-sm font-medium leading-8 text-white md:text-3xl">
          Built With
        </p>

        {/* built with logos */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-10">
          {techStack.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.Url}
              target="_blank"
              aria-label={sponsor.alt}
            >
              <Icon
                id={sponsor.id}
                size={sponsor.size}
                className={sponsor.className}
              />
            </a>
          ))}

          {/* clerk was too difficult to make into a sprite */}
          <a href="https://prisma.io/" target="_blank">
            <Image
              src="/icons/prisma.svg"
              width={159}
              height={49}
              className="h-6 w-20"
              alt="Prisma"
            />
          </a>
          <a href="https://www.inngest.com/" target="_blank">
            <Image
              src="/icons/inngest.svg"
              width={159}
              height={49}
              className="h-6 w-20 text-white background-white fill-white"
              alt="Inngest"
            />
          </a>
          <a href="https://clerk.com/" target="_blank">
            <Image
              src="/icons/clerk.svg"
              width={159}
              height={49}
              className="h-6 w-20"
              alt="clerk.dev"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
