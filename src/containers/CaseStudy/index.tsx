import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../../components/Layout"
import {
  Container,
  Box,
  Section,
  Text,
  Space,
  NavLink,
  Flex,
  Subhead,
  FlexList,
  BlockLink,
} from "../../components/ui"
import * as styles from "../../css/CaseStudy/case-studies.css"
import * as uiStyles from "../../components/ui.css"
import { ICaseStudies } from "../../interface/casestudies"
import { ICategory } from "../../interface/category"
import { theme } from "../../theme.css"

interface CaseStudiesProps {
  nodes: Array<ICaseStudies>
  categories: Array<ICategory>
  title: string
  children?: any
}

function CaseStudiesItem(props: ICaseStudies) {
  return (
    <Box as="li" width="half" padding={4} paddingY={3} key={props.id}>
      <Box style={{ backgroundColor: `${props.boxcolor}` }}>
        <BlockLink  to={`/case-studies/${props.slug}`}>
          {props.image && (
            <GatsbyImage
              alt={props.image.alt || " "}
              image={getImage(props.image.gatsbyImageData)}
            />
          )}
        </BlockLink>
      </Box>
      <Box>
        <Space size={4} />
        <Text
          as="h1"
          variant="subheadSmall"
          className={styles.caseStudiesBoxTitle}
        >
          {props.title}
        </Text>
        {props.categories &&
          props.categories.map((item) => {
            return (
              <NavLink
                key={item.id}
                to={"/case-studies/category/" + item.slug}
                activeClassName={theme.colors.black}
                className={styles.subCategories}
              >
                {item.title}
              </NavLink>
            )
          })}
        <Space size={4} />
      </Box>
    </Box>
  )
}
export default function CaseStudiesPage(props: CaseStudiesProps) {
  const { nodes, title, categories } = props
  return (
    <Layout title={title} showBackgroundImageHeader={false}>
      <Section>
        <Container>
          <Flex
            gap={4}
            variant="responsive"
            className={styles.caseStudyContainer}
          >
            <Box width="twothirds">
              <Subhead as="h1">Case Studies</Subhead>
              <NavLink
                to={"/case-studies"}
                activeClassName={uiStyles.activeMenu}
                className={styles.categoriesSubhead}
              >
                All
              </NavLink>

              <Box>
                {categories &&
                  categories.map((item) => (
                    <FlexList gap={4} key={item.id}>
                      <NavLink
                        to={"/case-studies/category/" + item.slug}
                        activeClassName={theme.colors.black}
                        className={styles.categoriesSubhead}
                      >
                        {item.title}
                      </NavLink>
                    </FlexList>
                  ))}
              </Box>
            </Box>
            <Box>
              <FlexList gutter={2} variant="start" responsive wrap>
                {nodes.map((item) => {
                  return (
                    <CaseStudiesItem
                      key={item.id}
                      categories={categories}
                      {...item}
                    />
                  )
                })}
              </FlexList>
            </Box>
          </Flex>
        </Container>
      </Section>
    </Layout>
  )
}
