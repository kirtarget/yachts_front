import React, { useEffect, useState } from "react"

type CardProps = {
  yachtsList: any
  id: string
}
type ResponseType = {
  name: string
  mainPictureUrl: string
  buildYear: number
}

const YachtFullCard = (props: any) => {
  const [singleYacht, setSingleYacht] = useState({
    name: "",
    mainPictureUrl: "",
    buildYear: 2000,
  })

  useEffect(() => {
    const yacht = fetch(
      `https://yachts-back.herokuapp.com/api/yachts/${props.id}`
    )
      .then((response) => response.json())
      .then((data: ResponseType) => setSingleYacht(data))
      .catch((err) => console.error(err.message))
  }, [])

  return (
    <div>
      <h1 className="text-center">
        {singleYacht.name}, {singleYacht.buildYear}
      </h1>
      <img
        className="w-[70vw] p-2 sm:w-[60vw] mx-auto"
        src={singleYacht.mainPictureUrl}
        alt={singleYacht.name}
      />
    </div>
  )
}

export default YachtFullCard
