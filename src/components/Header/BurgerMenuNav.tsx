import Link from "next/link";

interface BurgerMenuNavProps {
  content: string,
  link?: string,
  onClickHandler?: () => void;
}

export default function BurgerMenuNav({ content, link, onClickHandler }: BurgerMenuNavProps) {
  return (
    <li className="rounded hover:bg-royal-purple hover:text-white w-auto">
      <Link className="block cursor-pointer p-2 m-2" href={link ? link : "#"} onClick={onClickHandler} prefetch>
        {content}
      </Link>
    </li>
  )
}