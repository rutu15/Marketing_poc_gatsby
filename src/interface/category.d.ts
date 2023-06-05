export interface ICategory {
    id: string;
    slug: string;
    title: string;
    description: string;
    type: 'blog' | 'caseStudy' | 'technology';
}