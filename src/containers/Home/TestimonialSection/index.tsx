import * as React from "react"
import { graphql } from "gatsby"
import {
  Container,
  Section,
  Heading,
  Kicker,
  Flex,
  Box,
  FlexList,
  Blockquote,
  Text,
  Avatar,
  HomepageImage,
} from "../../../components/ui"
import * as styles from "./index.css"

interface TestimonialProps {
  id: string
  avatar: HomepageImage
  quote: string
  source: string
  position: string
}
export interface TestimonialListProps {
  kicker?: string
  heading: string
  content: TestimonialProps[]
}

export default function TestimonialList(props: TestimonialListProps) {
  return (
    <Section>
      <Box center paddingY={4}>
        <Heading>{props.heading}</Heading>
      </Box>
     
       <Flex gutter={3} variant="center"  className={styles.container}>
        {props.content.map((item, index) => {
          return (
            <Box
              center
              className={styles.testimonialBox}
              width="quarter"
              padding={2}
              paddingY={3}
            >
              <Flex variant="start">
                {item.avatar && (
                  <Avatar
                    alt={item.avatar.alt}
                    image={item.avatar.gatsbyImageData}
                  />
                )}
                <Blockquote>
                  <Kicker as="p" variant="small" className={styles.quoteTxt}>
                    {item.quote}
                  </Kicker>
                  <figcaption className={styles.infoText}>
                    <b>{item.position}</b>
                    <Text as="cite" variant="small">
                      , {item.source}
                    </Text>
                  </figcaption>
                </Blockquote>
              </Flex>
            </Box>
          )
        })}
      </Flex> 
    </Section>
  )
}

export const query = graphql`
  fragment HomepageTestimonialListContent on HomepageTestimonialList {
    id
    kicker
    heading
    content {
      id
      quote
      source
      position
      avatar {
        id
        gatsbyImageData
        alt
      }
    }
  }
`
