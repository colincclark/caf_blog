import { useFormStatus } from "react-dom"

interface ButtonProps {
  name: string
}

export default function Button({ name }: ButtonProps) {
  const { pending } = useFormStatus()

  return (
    <button type="submit" disabled={pending}>{name}</button>
  )
}