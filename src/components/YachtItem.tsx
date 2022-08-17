import Description from "./Description"
import Image from "./Image"

type ItemProps = {
  country: string
  img: string
  name: string
  region: string
  location: string
  buildYear: number
  id: number
  onClick: any
}

const YachtItem = (props: ItemProps) => {
  return (
    <>
      <div
        onClick={props.onClick}
        className="flex justify-center max-w-lg mx-auto"
      >
        <div className="border-slate-100 border w-full px-1 flex text-left my-0.5">
          <div className="relative">
            <div className="absolute bg-lime-200 rounded-sm px-6 font-bold text-slate-900">
              {props.country}
            </div>

            <Image src={props.img} />
          </div>

          <Description {...props} />
        </div>
      </div>
    </>
  )
}

export default YachtItem
