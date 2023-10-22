import { ButtonProps } from "@/typescript/types/types"
import Link from "next/link"

function Button({text,link}:ButtonProps){
  return (
    <div className="btn">
      <Link href={link} target="_blank">{text}</Link>
    </div>
  )
}

export default Button
