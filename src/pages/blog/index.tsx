import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import BlogList from "../../containers/Blog"
import { IBlog } from "../../interface/blog"
import { ICategory } from "../../interface/category"

interface BlogListProps {
  allBlog: {
    nodes: Array<IBlog>
  }
  allCategory: {
    nodes: Array<ICategory>
  }
}

export default function Blog() {
  let data: BlogListProps = useStaticQuery(graphql`
    {
      allBlog {
        nodes {
          id
          author {
            name
            profileImage {
              id
              url
              gatsbyImageData
              alt
            }
            slug
          }
          category {
            slug
            title
            id
          }
          publishedAt
          shortDescription
          title
          slug
          readTime
          image {
            url
            id
            gatsbyImageData
            alt
          }
        }
      }

      allCategory(filter: { type: { eq: "blog" } }) {
        nodes {
          id
          slug
          title
        }
      }
    }
  `)
  let { nodes } = data.allBlog
  let categories = data.allCategory.nodes
  return (
    <BlogList
      nodes={nodes}
      categories={categories}
      title={"Blog - Tivix"}
    ></BlogList>
  )
}
