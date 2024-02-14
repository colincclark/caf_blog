import Image from "next/image";
import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b-1 border-royal-purple h-16 lg:h-32 py-2 flex justify-center items-center">
      <button className="border-0 rounded-8 left-8 absolute">
        <Image
          alt="Burger menu icon"
          className="w-4 lg:w-8"
          height={12}
          src="/burgerMenu.svg"
          width={16}
        />
      </button>
      {/* {
        isBurgerMenuOpen && <BurgerMenu user={user} />
      } */}
      <Link href="/" className="font-bold w-auto">
        <Image
          src={"/logo-small.svg"}
          alt="Colin & Francesca's blog logo"
          width={110}
          height={60}
          className="lg:hidden h-auto w-32"
        />
        <Image
          src={"/logo.svg"}
          alt="Colin & Francesca's blog logo"
          width={223}
          height={160}
          className="hidden lg:block h-auto w-40"
        />
      </Link>
    </header>
  )
}
