import Link from 'next/link';
import Image from 'next/image'

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <div className="banner" ><Image src="/banner.jpg" alt="wappyn" /></div>
      // <div className="w-12 h-12 rounded-full block mx-auto mb-4 bg-gradient-conic from-gradient-3 to-gradient-4" />
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
