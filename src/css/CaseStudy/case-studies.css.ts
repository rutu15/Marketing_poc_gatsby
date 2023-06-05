import { style } from "@vanilla-extract/css"

import { theme } from "../../theme.css"

export const caseStudiesBoxTitle = style({
  color: theme.colors.gray,
  cursor: "pointer",
})

export const subCategories = style({
  color: theme.colors.gray,
  paddingRight: "15px",
  cursor: "pointer",
  ":hover": {
    color: theme.colors.black,
  },
  ":active": {
    color: theme.colors.black,
  },
})

export const caseStudyContainer = style({
  alignItems: "start",
})

export const categoriesSubhead = style({
  color: theme.colors.gray,
  paddingTop: "15px",
  ":hover": {
    color: theme.colors.black,
  },
  ":active": {
    color: theme.colors.black,
  },
})

export const navMenu = style({
  display: "flex",
  justifyContent: "center",
  padding: "15px",
  margin: "10px 0",
  background: theme.colors.muted,
})
