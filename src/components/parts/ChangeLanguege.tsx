import Link from "next/link"
import { Button } from "../ui/button"
import { Globe } from "lucide-react"

const ChangeLanguege = () => {
  return (
    <Link href="/fa">
      <Button variant="ghost" className="border-1 border-white">
        <Globe/>
        fa
      </Button>
    </Link>
  )
}

export default ChangeLanguege
