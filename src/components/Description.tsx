type DescProps = {
  name: string
  buildYear: number
  region: string
  location: string
}

const Description = ({ name, buildYear, region, location }: DescProps) => {
  return (
    <div className="mt-1 ml-1">
      <div className="font-bold text-slate-900 text-md mb-1">
        {name} ({buildYear})
      </div>
      <div className="text-xs">
        📍 {region} ({location})
      </div>
    </div>
  )
}

export default Description
