import Spinner from "./Spinner"

interface p {
  text?: string
  reverse?: boolean
}
const SpinnerCard = ({text, reverse}:p) => {
  return (
    <div className="flex flex-col gap-3 h-50 justify-center items-center">
      {text}
      <Spinner reverse={reverse}/>
    </div>
  )
}

export default SpinnerCard
