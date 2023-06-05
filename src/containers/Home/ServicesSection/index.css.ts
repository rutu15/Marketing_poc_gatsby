import { style } from "@vanilla-extract/css"
import { colors } from "../../../colors.css"
import { media } from "../../../components/ui.css"

export const container = style({
  backgroundColor: colors.purple,
  padding: "60px",
  margin: "60px 0 60px 0",
})

export const servicesHeader = style({})

export const heading = style({
  color: colors.background,
  padding: "20px",
})
export const swipperWrapper = style({
  display: "flex",
  overflowX: "scroll",
  paddingBottom: "10px"
})
export const swipperContainer = style({
  padding: "20px",
  marginRight: "30px",
  display: "flex",
  position: "relative",
})

export const swipperCards = style({
  marginRight: "30px",
  padding: "20px 35px 30px",
  borderRadius: "4px",
  border: "2px solid #453d61",
  color: colors.background,
  width: "auto",
  minWidth: "300px",
  position: "relative",
  ":hover": {
    backgroundColor: "#453d61",
  },
  "@media": {
    [media.large]: {
      width: "300px",
      height: "400px",
    },
  },
})

export const description = style({
  color: colors.gray,
  height: "300px",
  "@media": {
    [media.medium]: {
      height: "250px",
    },
  },
})

export const figure = style({
  position: "absolute",
  right: "-50px",
  bottom: "1px",
  height: "155px",
  width: "130px",
})

export const image = style({
  display: "block",
  width: "auto",
  height: "auto",
  maxHeight: "100%",
 
})
