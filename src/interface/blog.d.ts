import { IGatsbyImageData, ImageDataLike } from "gatsby-plugin-image";

export interface Image {
    url: string;
    id: string;
    gatsbyImageData: ImageDataLike | IGatsbyImageData;
    alt?: any;
}

export interface Author {
    name: string;
    profileImage: Image;
    slug: string;
}

export interface Category {
    slug: string;
    title: string;
    id: string;
}

export interface IBlog {
    id: string;
    author: Author;
    category: Category;
    publishedAt: Date;
    shortDescription: string;
    title: string;
    slug: string;
    readTime: string;
    image: Image;
    body: string
}