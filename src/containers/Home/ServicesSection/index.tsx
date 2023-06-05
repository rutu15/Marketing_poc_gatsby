import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  Container,
  Section,
  Text,
  Box,
  Subhead,
} from "../../../components/ui"
import * as styles from "./index.css"
import { Image } from "../../../interface/home"

export interface ServiceProps {
  heading: string
  content: Array<{
    id: string
    title: string
    shortDescription: string
    image: Image
  }>
}

export default function homepageServices(props: ServiceProps) {
  const [showImage, setShowImage] = React.useState(false)
  const [imageId, setImageId] = React.useState(null)

  const handleShowImage = (Id: string) => {
    setShowImage(true)
    setImageId(Id)
  }
  const handleHideImage = () => {
    setImageId(null)
    setShowImage(false)
  }
  return (
    <Section className={styles.container}>
      <Container>
        <Box className={styles.servicesHeader}>
          <Subhead className={styles.heading}>{props.heading}</Subhead>
        </Box>

        <div className={styles.swipperWrapper}>
          {props.content.map((item) => {
            return (
              <div
                key={item.id}
                className={styles.swipperCards}
                onMouseEnter={() => handleShowImage(item.id)}
                onMouseLeave={() => handleHideImage()}
              >
                <Text variant="medium">{item?.title}</Text>
                <div
                  className={styles.description}
                  dangerouslySetInnerHTML={{
                    __html: item?.shortDescription,
                  }}
                />
                {(item.image && showImage) && (item.id === imageId) &&
                 <figure  className={styles.figure}>
                 <GatsbyImage
                   className={styles.image}
                   alt={item.image.alt || " "}
                   image={getImage(item.image.gatsbyImageData)}
                 />
                 </figure>
                }
              
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageServicesContent on HomepageServices {
    id
    heading
    links {
      id
      href
      text
    }
    content {
      id
      title
      slug
      shortDescription
      image {
        alt
        id
        gatsbyImageData
      }
    }
  }
`
