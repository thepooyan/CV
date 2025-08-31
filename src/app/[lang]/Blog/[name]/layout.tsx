import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { ReactNode } from "react"

interface p {
  children: ReactNode
  params: Promise<{name: string}>
}
const layout = async ({children, params}:p) => {
  const {name} = await params
  const decodeName = decodeURIComponent(name)
  return (
    <>
      <Breadcrumb className=" container mx-auto px-4 py-8 max-w-4xl pb-0">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/en">Portfolio</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/en/Blog">Blog</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{decodeName}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {children}
    </>
  )
}

export default layout
