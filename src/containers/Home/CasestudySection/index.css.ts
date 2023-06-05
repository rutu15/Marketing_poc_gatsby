import { style } from "@vanilla-extract/css"
import { media } from "../../../components/ui.css"

export const mainContainer = style({
  padding: "50px",
  "@media": {
    [media.small]: {
      padding: "0px",
    },
  },
})
export const descriptionTxt = style({
  color: "#a9a7b1",
})

export const homeCaseContent = style({
  margin: "50px 0",
  maxWidth: "1440px",
})

export const imageContainter = style({
  "@media": {
    [media.small]: {
      display: "flex",
      margin: "50px 0",
    },
  },
})

export const caseDesc = style({
  textAlign: "left",
  marginTop: "100px",
})


