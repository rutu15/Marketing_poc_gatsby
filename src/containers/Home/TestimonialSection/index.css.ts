import { style } from "@vanilla-extract/css"
import { screenMedia } from "../../../components/ui.css"

export const container = style({
  
  "@media": {
    [screenMedia.medium]: {
      display: "flex",
    },
  },
})
export const testimonialBox = style({
  background: "white",
  borderRadius: "10px",
  margin: "10px",
  height: "auto",
  "@media": {
    [screenMedia.large]: {
      height: "auto",
      minHeight: "220px",
      maxHeight: "100%",
    },
  },
})

export const quoteTxt = style({
  textAlign: "left",
  color: "#766f8e",
})

export const infoText = style({
  textAlign: "left",
  padding: "5px 0",
})

export const avtar = {
  marginRight: "10px",
}
export const blackquote = {
  paddingLeft: "20px",
}
