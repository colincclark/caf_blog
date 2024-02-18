"use client"

import { useState } from "react";
import Image from "next/image";
import BurgerMenuNav from "@/components/Header/BurgerMenuNav";

export default function BurgerMenu() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)

  const handleBurgerClick = () => {
    console.log("isBurgerMenuOpen: ", isBurgerMenuOpen)
    setIsBurgerMenuOpen(!isBurgerMenuOpen)
  }

  return (
    <nav className="absolute lg:left-6 w-10">
      <button onClick={handleBurgerClick} aria-label="Secondary navigation button" className="relative left-3 border-0 hover:bg-slate-100 focus:bg-slate-100 focus:border focus:border-royal-purple focus:outline-none hover:border-1 hover:border-royal-purple rounded-lg p-2">
        <Image
          alt="Burger menu icon"
          className="w-4 lg:w-10"
          height={12}
          src="/burgerMenu.svg"
          width={16}
        />
      </button>
      <ul
        aria-expanded={isBurgerMenuOpen}
        aria-hidden={!isBurgerMenuOpen}
        className="absolute top-11 lg:top-12 left-0 lg:left-2 bg-white border border-gray-200 flex flex-col lg:rounded w-screen lg:w-48 shadow-lg transition-opacity ease-in"
        style={{ opacity: isBurgerMenuOpen ? 0 : 1 }}
      >
        <BurgerMenuNav content="Login" link="/login" />
        <BurgerMenuNav content="Profile" link="/profile" />
        <BurgerMenuNav content="Admin" link="/admin" />
      </ul>
    </nav >
  )
}