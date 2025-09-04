import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { authAdmin } from "@/lib/actions"

const page = () => {
  return (
    <form className="max-w-90 mx-auto mt-10 space-y-2" action={authAdmin}>
      <Input placeholder="Enter password:" name="password"/>
      <Button>Submit</Button>
    </form>
  )
}

export default page
