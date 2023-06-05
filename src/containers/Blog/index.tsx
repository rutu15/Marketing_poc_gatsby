import * as React from "react"
import { format } from "date-fns"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as styles from "../../css/Blog/blog.css"
import * as uiStyles from "../../components/ui.css"
import Layout from "../../components/Layout"
import {
  Container,
  Box,
  FlexList,
  Section,
  Text,
  Space,
  NavLink,
  BlockLink,
  CTALink,
} from "../../components/ui"

import { IBlog } from "../../interface/blog"
import { ICategory } from "../../interface/category"

interface BlogListProps {
  nodes: Array<IBlog>
  categories: Array<ICategory>
  title: string
  children?: string
}

function BlogItem(props: IBlog) {
  return (
    <Box as="li" width="half" padding={4} paddingY={3} key={props.id}>
      <NavLink to={`/blog/${props.slug}`}>
        <Text variant="subheadSmall">{props.title}</Text>
      </NavLink>
      <Box className={styles.blogInfo}>
        <Box className={styles.authorInfo}>
          {props.image && (
            <GatsbyImage
              className={styles.authorIcon}
              alt={props.author.profileImage.alt || " "}
              image={getImage(props.author.profileImage.gatsbyImageData)}
            />
          )}
          <Text variant="small" className={styles.authorName}>
            {props.author.name}
          </Text>
          <Text variant="small" className={styles.category}>
            {props.category.title}
          </Text>
        </Box>
        <Box className={styles.otherDetails}>
          {props.readTime && (
            <Text variant="small" className={styles.category}>
              {props?.readTime}
            </Text>
          )}
          {props.publishedAt && (
            <Text variant="small" className={styles.authorName}>
              {format(new Date(props?.publishedAt), "MMM dd yyyy")}
            </Text>
          )}
        </Box>
      </Box>
      <BlockLink to={`/blog/${props.slug}`}>
        {props.image && (
          <GatsbyImage
            className={styles.blogImage}
            alt={props.image.alt || ""}
            image={getImage(props.image.gatsbyImageData)}
          />
        )}
      </BlockLink>
      <Space size={2} />
      {props.shortDescription && (
        <Text className={uiStyles.opacity50}>{props?.shortDescription}</Text>
      )}
      <Space size={2} />
      <CTALink href={`/blog/${props.slug}`}>Read More</CTALink>
    </Box>
  )
}

export default function BlogList(props: BlogListProps) {
  const { nodes, categories, title } = props
  return (
    <Layout title={title} showBackgroundImageHeader={false}>
      <Box className={styles.navMenu}>
        <nav>
          <FlexList gap={4}>
            <NavLink to={"/blog"} activeClassName={uiStyles.activeMenu}>
              All articles
            </NavLink>
            {categories &&
              categories.map((navItem) => (
               
                <li key={navItem.id}>
                  <NavLink
                    to={"/blog/category/" + navItem.slug}
                    activeClassName={uiStyles.activeMenu}
                  >
                    {navItem.title}
                  </NavLink>
                </li>
              ))}
          </FlexList>
        </nav>
      </Box>
      <Section>
        <Container>
          <Space size={2} />
          <FlexList gutter={2} variant="start" responsive wrap>
            {nodes.map((blog, i) => (
              <BlogItem key={blog.id} {...blog} />
            ))}
          </FlexList>
        </Container>
      </Section>
    </Layout>
  )
}
