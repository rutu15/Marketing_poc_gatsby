// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator"

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type"

import homepage from "./Documents/Home/homepage"
import homepageAbout from "./Documents/Home/homepageAbout"
import homepageLink from "./Documents/Home/homepageLink"
import homepageHero from "./Documents/Home/homepageHero"
import homepageHeroList from "./Documents/Home/homepageHeroList"
import homepageTestimonial from "./Documents/Home/homepageTestimonial"
import homepageTestimonialList from "./Documents/Home/homepageTestimonialList"
import homepageServices from "./Documents/Home/homepageServices"
import homepageCaseStudy from "./Documents/Home/homepageCaseStudy"
import navItem from "./Documents/Common/navItem"
import navItemGroup from "./Documents/Common/navItemGroup"
import socialLink from "./Documents/Common/socialLink"
import layoutHeader from "./Documents/Common/layoutHeader"
import layoutFooter from "./Documents/Common/layoutFooter"
import layout from "./Documents/Common/layout"

import page from "./Documents/Common/page"

// Blog Schemas
import blog from "./Documents/Blog/blog"
import author from "./Documents/Blog/author"
import category from "./Documents/Common/category"
// Case Study 
import caseStudy from './Documents/Case-Study/caseStudy'

// Serivces 
import services from "./Documents/Services/services"

// import object
import richText from './objects/richText';
import customImage from './objects/customImage';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    homepage,
    homepageAbout,
    homepageLink,
    homepageHero,
    homepageHeroList,
    homepageTestimonial,
    homepageTestimonialList,
    homepageServices,
    homepageCaseStudy,
    // layout
    navItem,
    navItemGroup,
    socialLink,
    layoutHeader,
    layoutFooter,
    layout,
    // HTML page
    page,
    
    // Blog
    blog,
    author, 
    category,
    // Case Study
    caseStudy,
    // Services
    services,

     // object schemas
     richText,
     customImage,
  ]),
})
