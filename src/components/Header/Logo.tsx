import Image from "next/image";
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" aria-label="Home page link via company logo" className="font-bold w-auto rounded-lg m-auto p-1 focus:outline-none focus:border focus:border-royal-purple">
      <Image
        src={"/logo-small.svg"}
        alt="Colin & Francesca's blog logo"
        width={80}
        height={29}
        className="lg:hidden h-auto w-20"
        priority
      />
      <Image
        src={"/logo.svg"}
        alt="Colin & Francesca's blog logo"
        width={160}
        height={114}
        className="hidden lg:block h-auto w-40"
        priority
      />
    </Link>
  )
}
