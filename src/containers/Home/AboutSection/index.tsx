import * as React from "react"
import { graphql } from "gatsby"
import {
  Container,
  Section,
  FlexList,
  Box,
  Icon,
  Heading,
  Text,
  Space,
} from "../../../components/ui"

import * as styles from "./index.css"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Image } from "../../../interface/home"

export interface AboutProps {
  subhead: string
  heading?: string
  description?: string
  imageLeft: Image
  imageRight: Image
  imageCenter: Image
}

export default function HomeAbout(props: AboutProps) {
  return (
    <Section paddingY={5} radius="large">
      <Container width="narrow" className={styles.aboutContainer}>
        <Box>
          <Text center bold variant="subhead">
            {props.heading}
          </Text>
          <Text center variant="mediumSubHead">
            {props.subhead}
          </Text>

          <Text
            as="p"
            variant="small"
            center
            className={styles.descriptionTxt}
            style={{ color: "#a9a7b1" }}
          >
            {props.description}
          </Text>
        </Box>

        <Box className={styles.aboutImages}>
          <figure className={styles.figureLeft}>
            {props.imageLeft && (
              <GatsbyImage
                className={styles.image}
                alt={props.imageLeft.alt || " "}
                image={getImage(props.imageLeft.gatsbyImageData)}
              />
            )}
          </figure>

          <figure className={styles.figureRight}>
            {props.imageLeft && (
              <GatsbyImage
                className={styles.image}
                alt={props.imageLeft.alt || " "}
                image={getImage(props.imageRight.gatsbyImageData)}
              />
            )}
          </figure>

          <figure className={styles.figureCenter}>
            {props.imageLeft && (
              <GatsbyImage
                className={styles.image}
                alt={props.imageLeft.alt || " "}
                image={getImage(props.imageCenter.gatsbyImageData)}
              />
            )}
          </figure>
        </Box>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageAboutContent on HomepageAbout {
    id
    heading
    subhead
    imageLeft {
      alt
      id
      gatsbyImageData
    }
    imageRight {
      alt
      id
      gatsbyImageData
    }
    imageCenter {
      alt
      id
      gatsbyImageData
    }
    description
    links {
      id
      href
      text
    }
  }
`
