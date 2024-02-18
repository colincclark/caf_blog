import BurgerMenu from "@/components/Header/BurgerMenu";
import Logo from "@/components/Header/Logo";

export default function Header() {
  return (
    <header className="border-b-1 border-royal-purple h-16 lg:h-36 lg:px-6 py-2 flex justify-start items-center">
      <BurgerMenu />
      <Logo />
    </header>
  )
}
