import React from "react"

type CardProps = {
  yachtsList: any
  id: string
}

const YachtFullCard = (props: any) => {
  const yacht = props.yachtsList.find((y: any) => y.id === +props.id)
  console.log(props)
  return <div>YachtFullCard {yacht?.name}</div>
}

export default YachtFullCard
