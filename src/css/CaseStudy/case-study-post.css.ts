import { style, globalStyle } from "@vanilla-extract/css"
import { theme } from "../../theme.css"
import { media } from "../../components/ui.css"

export const blogPost = style({
  fontSize: theme.fontSizes[3],
})

globalStyle(`${blogPost} img`, {
  maxWidth: "100%",
  height: "auto",
})

globalStyle(`${blogPost} a`, {
  color: "inherit",
  fontWeight: theme.fontWeights.medium,
})

const containedElements = [
  "p",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "pre",
  "ul",
  "ol",
  "dl",
  "div",
]
  .map((el) => blogPost + " " + el)
  .join(", ")

globalStyle(containedElements, {
  maxWidth: theme.sizes.tight,
  marginLeft: "auto",
  marginRight: "auto",
})

globalStyle(`${blogPost} p`, {
  lineHeight: theme.lineHeights.text,
})

globalStyle(`${blogPost} > p:first-of-type`, {
  fontSize: theme.fontSizes[4],
  fontWeight: theme.fontWeights.bold,
})

globalStyle(`${blogPost} h2`, {
  fontSize: theme.fontSizes[5],
  fontWeight: theme.fontWeights.bold,
})

globalStyle(`${blogPost} h3`, {
  fontSize: theme.fontSizes[4],
  fontWeight: theme.fontWeights.bold,
})

globalStyle(`${blogPost} h4`, {
  fontSize: theme.fontSizes[3],
  fontWeight: theme.fontWeights.bold,
})

globalStyle(`${blogPost} h5, ${blogPost} h6`, {
  fontSize: theme.fontSizes[2],
  fontWeight: theme.fontWeights.bold,
})

export const center = style({
  display: "flex",
  justifyContent: "center",
  marginBottom: "10px",
})

export const autherAndOtherDetails = style({
  maxWidth: theme.sizes.tight,
  marginLeft: "auto",
  marginRight: "auto",
})

export const caseStudyBGImage = style({
  backgroundRepeat: "no-repeat",
  height: "560px",
  color: "white",
  backgroundImage: "linear-gradient(180deg,transparent 0%,rgba(0,0,0,0.59) 0%)",
})

export const visitWebsite = style({
  color: "#00cac5",
  textDecoration: "none",
  fontWeight: "bold",
})

export const categories = style({
  color: theme.colors.background,
  paddingRight: "15px",
  cursor: "pointer",
  ":hover": {
    color: theme.colors.black,
  },
  ":active": {
    color: theme.colors.black,
  },
})

export const dateText = style({
  color: theme.colors.gray,
})

export const caseOverViewText = style({
  WebkitColumns: "1",
  fontSize: theme.fontSizes[3],
  fontWeight: "lighter",
  "@media": {
    [media.medium]: {
      WebkitColumns: "2",
    },
  },
})

export const servicesContainer = style({
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: theme.sizes.narrow,
})
