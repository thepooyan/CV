import { Skeleton } from "../ui/skeleton"

const Blogs = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Skeleton className="w-2/3 h-10"/>
      <Skeleton className="w-full h-20 mt-4"/>
      <div className="grid grid-cols-3 gap-9 mt-10">
        <Skeleton className="h-90 w-80"/>
        <Skeleton className="h-90 w-full"/>
        <Skeleton className="h-90 w-full"/>
      </div>
    </div>
  )
}

export default Blogs
