import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import CaseStudiesPage from "../../containers/CaseStudy"
import { ICaseStudies } from "../../interface/casestudies"
import { ICategory } from "../../interface/category"

interface CaseStudiesListProps {
  allCaseStudy: {
    nodes: Array<ICaseStudies>
  }
  allCategory: {
    nodes: Array<ICategory>
  }
}

export default function CaseStudies() {
  let data: CaseStudiesListProps = useStaticQuery(graphql`
    {
      allCaseStudy {
        nodes {
          id
          slug
          title
          description
          shortDescription
          boxcolor
          categories {
            slug
            id
            title
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
          title
          slug
          id
        }
      }
    }
  `)
  let { nodes } = data.allCaseStudy
  let categories = data.allCategory.nodes
  return (
    <CaseStudiesPage
      nodes={nodes}
      categories={categories}
      title={"Case Studies - Tivix"}
    ></CaseStudiesPage>
  )
}
