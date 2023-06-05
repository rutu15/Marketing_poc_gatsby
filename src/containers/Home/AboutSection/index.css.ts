import { style } from "@vanilla-extract/css"
import { screenMedia } from "../../../components/ui.css"

export const aboutContainer = style({
  margin: "0 auto",
  width: "100%",
  maxWidth: "620px",
  "@media": {
    [screenMedia.medium]: {
      maxWidth: "360px",
    },
  },
})
export const aboutImages = style({
  position: "relative",
  height: "415px",
  margin: "40px 0 0",
})

export const figureLeft = style({
  position: "absolute",
  left: "50%",
  top: "52px",
  width: "461px",
  marginLeft: "-482px",
  "@media": {
    [screenMedia.large]: {
      width: "350px",
      marginLeft: "-390px",
    },
    [screenMedia.medium]: {
      width: "300px",
      marginLeft: "-320px",
    },
    [screenMedia.small]: {
      width: "200px",
      marginLeft: "-200px",
    },
  },
})

export const figureRight = style({
  position: "absolute",
  left: "50%",
  top: "0",
  width: "390px",
  marginLeft: "40px",
  "@media": {
    [screenMedia.large]: {
      width: "320px",
      marginLeft: "-10px",
    },
    [screenMedia.medium]: {
      width: "250px",
      marginLeft: "10px",
      top: "30px",
    },
    [screenMedia.small]: {
      width: "180px",
      marginLeft: "2px",
      top: "70px",
    },
  },
})

export const figureCenter = style({
  position: "absolute",
  left: "50%",
  top: "170px",
  marginLeft: "-110px",
  width: "390px",
  "@media": {
    [screenMedia.large]: {
      width: "280px",
      marginLeft: "-120px",
    },
    [screenMedia.medium]: {
      width: "200px",
      marginLeft: "-120px",
    },
    [screenMedia.small]: {
      width: "150px",
      marginLeft: "-120px",
    },
  },
})

export const image = style({
  display: "block",
  width: "100%",
  height: "auto",
})

export const descriptionTxt = style({
  color: "#a9a7b1",
})
