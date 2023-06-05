import * as React from "react"
import BackgroundImage from "gatsby-background-image"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"

import Header from "../Header"

interface BackgroundImageProps {
  className?: string
  image?: { id: string; url: string; gatsbyImageData: object, alt:string }
  children: any
  
}

export default function BackgroundImageComponent(props: BackgroundImageProps) {
  const image = getImage(props.image.gatsbyImageData)
  const bgImage = convertToBgImage(image)
  return (
    <div>
      <BackgroundImage
        Tag="section"
        {...bgImage}
        preserveStackingContext
        className={props.className}
        alt={ props.image.alt || " "}
      >
        <div>
          <Header />
        </div>
        {props.children}
      </BackgroundImage>
    </div>
  )
}
