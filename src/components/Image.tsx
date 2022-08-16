import React from "react"

const Image = (props: { src: string }) => {
  return (
    <div className="w-44">
      <img className="w-full mr-1" src={props.src} />
    </div>
  )
}

export default Image
