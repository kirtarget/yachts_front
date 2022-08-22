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
        className="w-full md:max-w-[600px] h-[180px] shadow-md m-2 md:mx-auto grid grid-cols-8 grid-rows-5 gap-1  bg-white rounded-md "
      >
        <div className="row-span-5 flex w-[100%] justify-center items-start col-span-4 bg-blue-400 overflow-hidden rounded-md">
          <img
            className=" h-full min-w-fit md:w-full md:min-h-fit block cover-fill rounded-sm"
            src={props.img}
          />
        </div>
        <div className=" row-span-1 col-span-4 text-lg font-bold border-b-2">
          {props.name}, {props.buildYear}
        </div>
        <div className=" row-span-1 col-span-4">
          <h5>
            📍 {props.region} ({props.location})
          </h5>
        </div>
      </div>
      {/* <div onClick={props.onClick} className="">
        <div className="">
          <div className="">
            <div className="">{props.country}</div>

            <Image src={props.img} />
          </div>

          <Description {...props} />
        </div>
      </div> */}
    </>
  )
}

export default YachtItem
