import React from "react"

const Image = (props: { src: string }) => {
  return <img className="w-full mr-1" src={props.src} />
}

export default Image
