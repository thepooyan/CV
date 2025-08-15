import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

const DynamicArrow = ({className}:{className: string}) => {
  return (
    <ArrowRight className={cn("rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1", className)}/>
  )
}

export default DynamicArrow
