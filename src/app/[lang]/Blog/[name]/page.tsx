interface props {
  params: {name: string}
}
const page = ({params}:props) => {
  const decodeName = decodeURIComponent(params.name)
  return (
    <div>{decodeName}</div>
  )
}

export default page
