"use client"

import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import BurgerMenuNav from "@/components/Header/BurgerMenuNav";

export default function BurgerMenu() {
  const { data: session } = useSession()
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)

  const handleBurgerClick = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen)
  }

  return (
    <nav className="absolute lg:left-6 w-10">
      <button
        aria-label="Secondary navigation button"
        className="relative left-3 outline-yellow-500 rounded-lg p-2 transform transition-all duration-300 hover:scale-125 hover:rotate-12"
        onClick={handleBurgerClick}
      >
        <Image
          alt="Burger menu icon"
          className="w-4 lg:w-10"
          height={12}
          src="/burgerMenu.svg"
          width={16}
        />
      </button>
      {
        isBurgerMenuOpen && (
          <ul
            aria-expanded={isBurgerMenuOpen}
            aria-hidden={!isBurgerMenuOpen}
            className="absolute top-11 lg:top-12 left-0 lg:left-2 bg-white border border-gray-200 flex flex-col lg:rounded w-screen lg:w-48 shadow-lg"
          >
            {
              session ? (
                <>
                  <BurgerMenuNav content="Profile" link="/profile" onClickHandler={() => setIsBurgerMenuOpen(false)} />
                  <BurgerMenuNav content="Admin" link="/admin" onClickHandler={() => setIsBurgerMenuOpen(false)} />
                  <BurgerMenuNav content="Logout" onClickHandler={async () => {
                    setIsBurgerMenuOpen(false);
                    await signOut({ redirect: false });
                  }} />
                </>
              ) : (
                <BurgerMenuNav content="Login" link="/api/auth/signin" />
              )
            }
          </ul>
        )
      }
    </nav >
  )
}
