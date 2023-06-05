import * as React from "react"
import { graphql } from "gatsby"

import CaseStudiesPage from "../../../containers/CaseStudy"
import { ICaseStudies } from "../../../interface/casestudies"
import { ICategory } from "../../../interface/category"

interface CaseStudiesListProps {
  data: {
    allCaseStudy: {
      nodes: Array<ICaseStudies>
    }
    allCategory: {
      nodes: Array<ICategory>
    }
  }
  params: any
}
export default function CaseStudiesByCategory(props: CaseStudiesListProps) {
  const { allCaseStudy, allCategory } = props.data
  const categoryIndex = allCategory.nodes.findIndex(
    (category) => category.slug === props.params.slug
  )
  if (categoryIndex === -1) {
    return <></>
  }
  const category = allCategory.nodes[categoryIndex]
  return (
    <CaseStudiesPage
      nodes={allCaseStudy.nodes}
      categories={allCategory.nodes}
      title={category.title + " Articals - Tivix"}
    >
      {" "}
    </CaseStudiesPage>
  )
}

export const query = graphql`
  query BlogContent($slug: String!) {
    allCaseStudy(
      filter: { categories: { elemMatch: { slug: { eq: $slug } } } }
    ) {
      nodes {
        id
        slug
        title
        description
        shortDescription
        boxcolor
        categories {
          id
          title
          slug
        }
        image {
          alt
          gatsbyImageData
          children {
            id
          }
        }
      }
    }

    allCategory(filter: { type: { eq: "caseStudy" } }) {
      nodes {
        id
        slug
        title
      }
    }
  }
`
