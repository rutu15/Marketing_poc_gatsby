import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"


import {
  Box,
  ButtonList,
  Container,
  cx,
  Flex,
  HomepageLink,
  Kicker,
  Section,
  Subhead,
  Text,
} from "../../../components/ui"
import BackgroundImageComponent from "../../../components/BackgroundImageHeader"
import * as styles from "../../../components/ui.css"
import { homePageImage, homePageContent } from "./index.css"

export interface HeroProps {
  content: Array<{
    id:number
    kicker?: string
    h1: string
    heading: string
    subhead: string
    text: string
    links: HomepageLink[]
  }>
}

export default function Hero(props: HeroProps) {
  const data = useStaticQuery(graphql`
    query {
      homepageHero {
        image {
          id
          gatsbyImageData
          alt
        }
      }
    }
  `)

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div>
      {data.homepageHero.image && (
        <BackgroundImageComponent
          image={data.homepageHero.image}
          className={homePageImage}
        >
          <div className={homePageContent}>
            <Slider {...settings}>
              {props.content &&
                props.content.map((item) => {
                  return (
                    <Section key={item.id}>
                      <Container>
                        <Flex gap={4} variant="responsive">
                          <Box width="third">
                            <Subhead as="h1">
                              {item.kicker && (
                                <Kicker className={cx(...[styles.opacity50])}>
                                  {item.kicker}
                                </Kicker>
                              )}
                              {item.heading}
                            </Subhead>
                            <Text as="p">{item.text}</Text>
                            <ButtonList links={item.links} />
                          </Box>
                        </Flex>
                      </Container>
                    </Section>
                  )
                })}
            </Slider>
          </div>
        </BackgroundImageComponent>
      )}
    </div>
  )
}

export const query = graphql`
  fragment HomepageHeroListContent on HomepageHeroList {
    id
    text
    content {
      heading
      text
      id
      kicker
      text
      links {
        id
        href
        text
      }
    }
  }
`
