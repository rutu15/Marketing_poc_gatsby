import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"

interface HomepageProps {
  data: {
    homepage: {
      id: string
      title: string
      description: string
      image: { id: string; url: string }
      blocks: sections.HomepageBlock[]
    }
  }
}

export default function Homepage(props: HomepageProps) {
  const { homepage } = props.data
  return (
    <Layout {...homepage} showBackgroundImageHeader={true}>
      {homepage.blocks.map((block) => {
        if (block !== null) {
          const { id, blocktype, ...componentProps } = block
          const Component = sections[blocktype] || Fallback
          return <Component key={id} {...(componentProps as any)} />
        } else {
          return <div></div>
        }
      })}
    </Layout>
  )
}

export const query = graphql`
  {
    homepage {
      id
      title
      description
      image {
        id
        url
      }
      blocks: content {
        id
        blocktype
        ...HomepageHeroListContent
        ...HomepageTestimonialListContent
        ...HomepageAboutContent
        ...HomepageServicesContent
        ...HomepageCaseStudyContent
      }
    }
  }
`
