import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

const DynamicArrow = ({className}:{className: string}) => {
  return (
    <ArrowRight className={cn("[&:lang(fa)]:rotate-180", className)}/>
  )
}

export default DynamicArrow
