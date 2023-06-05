import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "./index.css"
import {
  Nudge,
  Container,
  Section,
  Heading,
  Text,
  ButtonList,
  Kicker,
  HomepageLink,
  HomepageImage,
  Box,
  FlexList,
  Flex,
  Icon,
} from "../../../components/ui"
import { Image } from "../../../interface/home"

export interface CaseStudyProps {
  id: string
  subhead: string
  heading?: string
  description?: string
  content: Array<{
    id: string
    title: string
    slug: string
    logo: Image
    homePageDescription: string
    homeImage: Image
  }>
}

export default function homepageServices(props: CaseStudyProps) {
  const [windowDimensions, setWindowDimensions] = React.useState(
    getWindowDimensions()
  )

  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  function getWindowDimensions() { 
    if(typeof window !== "undefined" && window) {
      const { innerWidth: width, innerHeight: height } = window
      return {
        width,
        height,
      }
    }
    return {
      width: "",
      height: "",
    }
  }

  return (
    <Section className={styles.mainContainer}>
      <Box center>
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
      <Box className={styles.homeCaseContent}>
        {props.content?.map((item, index) => {
          return (
            <div key={item.id} className={styles.imageContainter}>
              {index % 2 === 0 || ( typeof window !== "undefined" && window?.innerWidth <= 637) ? (
                <>
                  <Box width="half" center className={styles.caseDesc}>
                    <Box width="half">
                      <Icon
                        alt={item?.logo?.alt}
                        image={getImage(item?.logo?.gatsbyImageData)}
                      />
                      <Text bold variant="subhead">
                        {item?.title}
                      </Text>
                      <Text
                        as="p"
                        variant="small"
                        className={styles.descriptionTxt}
                        style={{ color: "#a9a7b1" }}
                      >
                        {item?.homePageDescription}
                      </Text>
                    </Box>
                  </Box>
                  <Box width="half" >
                    <GatsbyImage
                     
                      alt={item.homeImage.alt || " "}
                      image={getImage(item.homeImage.gatsbyImageData)}
                    />
                  </Box>
                </>
              ) : (
                <>
                  <Box width="half" >
                    <GatsbyImage
                     
                      alt={item.homeImage.alt || " "}
                      image={getImage(item.homeImage.gatsbyImageData)}
                    />
                  </Box>
                  <Box width="half" center className={styles.caseDesc}>
                    <Box width="half">
                      <Icon
                        alt={item?.logo?.alt}
                        image={getImage(item?.logo?.gatsbyImageData)}
                      />
                      <Text bold variant="subhead">
                        {item?.title}
                      </Text>
                      <Text
                        as="p"
                        variant="small"
                        className={styles.descriptionTxt}
                        style={{ color: "#a9a7b1" }}
                      >
                        {item?.homePageDescription}
                      </Text>
                    </Box>
                  </Box>
                </>
              )}
            </div>
          )
        })}
      </Box>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageCaseStudyContent on HomepageCaseStudy {
    id
    heading
    subhead
    description
    links {
      id
      href
      text
    }
    content {
      id
      title
      slug
      homePageDescription
      logo {
        alt
        id
        gatsbyImageData
      }
      homeImage {
        alt
        id
        gatsbyImageData
      }
    }
  }
`
