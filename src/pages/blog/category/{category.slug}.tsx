import * as React from "react"
import { graphql } from "gatsby"

import BlogList from "../../../containers/Blog"
import { IBlog } from "../../../interface/blog"
import { ICategory } from "../../../interface/category"

interface BlogByCategoryProps {
  data: {
    allBlog: {
      nodes: Array<IBlog>
    }
    allCategory: {
      nodes: Array<ICategory>
    }
  }
  params: any
}

export default function BlogByCategory(props: BlogByCategoryProps) {
  const { allBlog, allCategory } = props.data
  const categoryIndex = allCategory.nodes.findIndex(
    (category) => category.slug === props.params.slug
  )
  if (categoryIndex === -1) {
    return <></>
  }
  const category = allCategory.nodes[categoryIndex]
  return (
    <BlogList
      nodes={allBlog.nodes}
      categories={allCategory.nodes}
      title={category.title + " Articals - Tivix"}
    >
      {" "}
    </BlogList>
  )
}

export const query = graphql`
  query BlogContent($slug: String!) {
    allBlog(filter: { category: { slug: { eq: $slug } } }) {
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
`
