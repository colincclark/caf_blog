"use client"

import { useFormStatus } from "react-dom"

interface ButtonProps {
  corners?: "rounded-t-lg" | "rounded-r-lg" | "rounded-b-lg" | "rounded-l-lg" | "rounded";
  name: string;
}

export default function Button({ corners, name }: ButtonProps) {
  const { pending } = useFormStatus()

  return (
    <button
      className={`bg-neutral-950 group h-7 inline-flex  items-center justify-center outline-yellow-500 overflow-hidden px-6 relative text-neutral-200 ${corners}`}
      disabled={pending}
      type="submit"
    >
      {name}
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
        <div className="relative h-full w-8 bg-white/20"></div>
      </div>
    </button>
  )
}

