import Link from "next/link";

interface BurgerMenuNavProps {
  content: string,
  link?: string,
  onClickHandler?: () => void;
}

export default function BurgerMenuNav({ content, link, onClickHandler }: BurgerMenuNavProps) {
  return (
    <li className="cursor-pointer p-2 m-2 rounded hover:bg-royal-purple hover:text-white w-auto">
      <Link className="block" href={link ? link : "#"} onClick={onClickHandler} prefetch>
        {content}
      </Link>
    </li>
  )
}