
import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"
import { format } from 'date-fns';


import * as blogStyles from "../../css/Blog/blog.css"
import * as styles from "../../css/Blog/blog-post.css"
import { IBlog } from "../../interface/blog";
import { Container, Heading, Space, Box, Text } from "../../components/ui"
import Layout from "../../components/Layout"

interface SingleBlogProps {
  data: {
    blog: IBlog
  }
}

export default function SingleBlog(props: SingleBlogProps) {
  return (
    <Layout title={props.data.blog.title} showBackgroundImageHeader={false}>
      <Container>
        <Box paddingY={5}>
          <Heading as="h1" center>
            {props.data.blog.title}
          </Heading>
          <Space size={4} />
          <Box className={styles.center}>
            {
              props.data.blog.image && (
                <GatsbyImage
                className={blogStyles.authorIcon}
                alt={props.data.blog.author.profileImage.alt || " "}
                image={getImage(props.data.blog.author.profileImage.gatsbyImageData)}
              />
            )}
            <Text variant="small" className={blogStyles.authorName}>{props.data.blog.author.name}</Text>
            <Text variant="small" className={blogStyles.category}>{props.data.blog.category.title}</Text>
          </Box>
          <Box className={styles.center}>
              <Text variant="small" className={blogStyles.category}>{props.data.blog.readTime}</Text>
              <Text variant="small" className={blogStyles.authorName}>{format(new Date(props.data.blog.publishedAt), 'MMM dd yyyy')}</Text>
          </Box>
          <Space size={4} />
          <Space size={4} />
          {props.data.blog.image && (
            <GatsbyImage
              alt={props.data.blog.image.alt || " "}
              image={props.data.blog.image.gatsbyImageData as IGatsbyImageData}
            />
          )}
          <Space size={5} />
          <div
            className={styles.blogPost}
            dangerouslySetInnerHTML={{
              __html: props.data.blog.body,
            }}
          />
        </Box>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query BlogContent($slug: String!) {
    blog(slug: {eq: $slug }) {
      id
      title
      slug
      image {
        id
        url
        gatsbyImageData
        alt
      }
      category {
        title
        slug
      }
      author {
        profileImage {
          url
          gatsbyImageData
          alt
        }
        name
      }
      body
      shortDescription
      publishedAt
      readTime
    }
  }
`