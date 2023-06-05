import * as React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { format } from "date-fns"

import * as styles from "../../css/CaseStudy/case-study-post.css"
import Layout from "../../components/Layout"
import BackgroundImageComponent from "../../components/BackgroundImageHeader"
import { theme } from "../../theme.css"
import { ICaseStudies } from "../../interface/casestudies"
import {
  Box,
  Container,
  Flex,
  Heading,
  Section,
  Text,
  NavLink,
  Space,
  Link,
  Logo,
} from "../../components/ui"

interface SingleCaseStudyProps {
  data: {
    caseStudy: ICaseStudies
  }
}

export default function SingleBlog(props: SingleCaseStudyProps) {
  return (
    <Layout title={props.data.caseStudy.slug} showBackgroundImageHeader={true}>
      <BackgroundImageComponent
        image={props.data.caseStudy?.backgroundImage || null}
        className={styles.caseStudyBGImage}
      >
        <Section>
          <Container>
            <Flex gap={4} variant="responsive">
              <Box width="twothirds">
                <Heading>{props.data.caseStudy.title}</Heading>
                <div
                  dangerouslySetInnerHTML={{
                    __html: props.data.caseStudy?.shortDescription,
                  }}
                />
                {props.data.caseStudy.categories &&
                  props.data.caseStudy.categories.map((item,index) => {
                    return (
                      <NavLink
                        key={item.id}
                        to={"/case-studies/category/" + item.slug}
                        activeClassName={theme.colors.black}
                        className={styles.categories}
                      >
                        {item.title}
                      </NavLink>
                    )
                  })}
              </Box>
            </Flex>
          </Container>
        </Section>
      </BackgroundImageComponent>

      <Container className={styles.servicesContainer}>
        <Box paddingY={5}>
          <Text variant="small" className={styles.dateText}>
            Year:{" "}
            {props.data.caseStudy.startDate === null
              ? format(new Date(), "yyyy")
              : `${format(
                  new Date(props.data.caseStudy.startDate),
                  "yyyy"
                )} -  ${format(
                  new Date(props.data.caseStudy.endDate),
                  "yyyy"
                )}`}
          </Text>
          <Space size={5}></Space>
          <Text variant="medium">Services</Text>
          {props.data.caseStudy.technology?.map((item) => {
            return (
              <Text bold key={item.id}>{` ${item.title} ${
                props.data.caseStudy.technology.length - 1 ? "," : ""
              } `}</Text>
            )
          })}
          <Space size={3}></Space>
          <div
            className={styles.caseOverViewText}
            dangerouslySetInnerHTML={{
              __html: props.data.caseStudy.description,
            }}
          />
          <Space size={6}></Space>
          <Link
            to={props.data.caseStudy.websiteLink}
            className={styles.visitWebsite}
          >
            Visit Website
          </Link>
        </Box>
        {props.data.caseStudy.partnerTestimonial && (
          <>
            <Box paddingY={4}>
              <Text>{props.data.caseStudy.partnerTestimonial}</Text>
            </Box>
            <Flex>
              <Logo
                size="small"
                alt={props.data.caseStudy.logo.alt || ""}
                image={getImage(props.data.caseStudy.logo.gatsbyImageData)}
              />
              <div>
                <Text variant="medium" bold>
                  {props.data.caseStudy.partnerName}
                </Text>
                <Text variant="small">
                  {props.data.caseStudy.partnerPosition}
                </Text>
              </div>
            </Flex>
          </>
        )}
      </Container>
      <Container>
        <Box paddingY={3}>
          <div
            className={styles.blogPost}
            dangerouslySetInnerHTML={{
              __html: props.data.caseStudy.body,
            }}
          />
        </Box>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query BlogContent($slug: String!) {
    caseStudy(slug: { eq: $slug }) {
      endDate
      description
      backgroundImage {
        gatsbyImageData
        id
        url
      }
      body
      boxcolor
      technology {
        slug
        title
        id
      }
      categories {
        slug
        title
        id
      }
      id
      image {
        id
        gatsbyImageData
        url
      }
      nextCaseStudy {
        backgroundImage {
          alt
          id
          url
          gatsbyImageData
        }
      }
      logo {
        gatsbyImageData
        url
        alt
      }
      partnerName
      partnerPosition
      partnerTestimonial
      publishedAt
      shortDescription
      slug
      startDate
      title
      websiteLink
    }
  }
`
