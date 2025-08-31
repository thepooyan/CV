import { Skeleton } from "@/components/ui/skeleton"

const loading = () => {
  return (
    <div className="space-y-4 py-10 container mx-auto px-4 max-w-4xl">
      <Skeleton className="h-12 w-full"/>
      <Skeleton className="h-5 w-full mt-8"/>
      <Skeleton className="h-12 w-full mt-8"/>
      <Skeleton className="h-90 w-full mt-8"/>
    </div>
  )
}

export default loading
