import Link from "next/link";

interface BurgerMenuNavProps {
  content: string,
  link: string
}

export default function BurgerMenuNav({ content, link }: BurgerMenuNavProps) {
  return (
    <li className="cursor-pointer p-2 m-2 rounded hover:bg-royal-purple hover:text-white w-auto">
      <Link className="block" href={link} prefetch>
        {content}
      </Link>
    </li>
  )
}