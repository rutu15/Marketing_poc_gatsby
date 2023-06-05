import { style } from "@vanilla-extract/css"

import { theme } from "../../theme.css"

export const blogTitle = style({
  height: 90,
})

export const blogInfo = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
})

export const authorInfo = style({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  marginBottom: "10px",
})

export const authorIcon = style({
  height: "25px",
  width: "25px",
  ":hover": {
    transform: "translateZ(0) scale(1.03)",
  },
})

export const authorName = style({
  marginLeft: "10px",
  marginBottom: 0,
})

export const category = style({
  marginLeft: "10px",
  opacity: 0.5,
  marginBottom: 0,
})

export const otherDetails = style({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  marginBottom: "10px",
})

export const blogImage = style({
  transition: "opacity .14s linear,transform .385s ease;",
  ":hover": {
    transform: "translateZ(0) scale(1.03)",
  },
})

export const navMenu = style({
  display: "flex",
  justifyContent: "center",
  padding: "15px",
  margin: "10px 0",
  background: theme.colors.muted,
})
