import { HeroProps } from "../containers/Home/HeroSection"
import { AboutProps } from "../containers/Home/AboutSection"
import { TestimonialListProps } from "../containers/Home/TestimonialSection"
import { ServiceProps } from "../containers/Home/ServicesSection"
import { CaseStudyProps } from "../containers/Home/CasestudySection"

export { default as HomepageHeroList } from "../containers/Home/HeroSection"
export { default as HomepageTestimonialList } from "../containers/Home/TestimonialSection"
export { default as HomepageAbout } from "../containers/Home/AboutSection"
export { default as HomepageServices } from "../containers/Home/ServicesSection"
export { default as HomepageCaseStudy } from "../containers/Home/CasestudySection"

export type SectionProps =
  | HeroProps
  | TestimonialListProps
  | AboutProps
  | ServiceProps
  | CaseStudyProps

type Blocktypes =
  | "HomepageHeroListContent"
  | "HomepageTestimonialList"
  | "HomepageAboutContent"
  | "HomepageServicesContent"
  | "HomepageCaseStudyContent"

type WithBlocktype<B = Blocktypes, P = SectionProps> = {
  id: string
  blocktype: B
} & P

export type HomepageBlock =
  | WithBlocktype<"HomepageHeroListContent", HeroProps>
  | WithBlocktype<"HomepageTestimonialList", TestimonialListProps>
  | WithBlocktype<"HomepageAboutContent", AboutProps>
  | WithBlocktype<"HomepageServicesContent", ServiceProps>
  | WithBlocktype<"HomepageCaseStudyContent", CaseStudyProps>
