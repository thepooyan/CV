import { Skeleton } from '../ui/skeleton'

const BlogDetail = () => {
  return (
    <div className="space-y-4 py-10 p-20">
      <Skeleton className="h-12 w-full"/>
      <Skeleton className="h-5 w-full mt-8"/>
      <Skeleton className="h-12 w-full mt-8"/>
      <Skeleton className="h-90 w-full mt-8"/>
    </div>
  )
}

export default BlogDetail
