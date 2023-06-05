import { IGatsbyImageData, ImageDataLike } from "gatsby-plugin-image";

export interface Image {
    url: string
    id: string
    gatsbyImageData: ImageDataLike | IGatsbyImageData
    alt?: any
  }