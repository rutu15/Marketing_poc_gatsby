import { style } from "@vanilla-extract/css"

export const homePageImage = style({
  backgroundRepeat: "no-repeat",
  height: "100vh",
  backgroundImage: "linear-gradient(180deg,transparent 0%,rgba(0,0,0,0.59) 0%)",
  color: "white",
})

export const homePageContent =style({
  color: 'white',
  margin:"50px"
})
