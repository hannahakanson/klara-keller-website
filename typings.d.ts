import { imageOptimizer } from "next/dist/server/image-optimizer";
import { Image, Reference, Slug } from "sanity";

type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
}

interface Content extends Base {
    author: Author[];
    body: Block[];
    categories: Category[];
    mainImage: Image;
    title: string;
    description: string;
}

interface Author extends Base {
    bio: Block[];
    image: Image;
    name: string;
}

interface Contact extends Base {
  author: Author[];
  title: string;
  name: string;
  number: string;
  email: string;
}

interface Concert extends Base {
  author: Author[];
  title: string;
  link: string;
  location: string;
  date: date;
}

interface Album extends Base {
  author: Author[];
  mainImage: Image;
  title: string;
  link: string;
}

interface Image {
    _type: "image";
    _asset: Reference;
}

interface Bio extends Base {
    author: Author;
    title: string;
    body: Block[];
}

interface Reference {
    _ref: string;
    _type: "reference";
}

interface Block {
    _key: string;
    _type: "block";
    children: Span[];
    markDefs: any[];
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote"
}

interface Span {
    _key: string;
    _type: "span";
    marks: string[];
    text: string;
}

interface Category extends Base {
    description: string;
    title: string;
}

interface MainImage {
    _type: "image";
    asset: Reference;
}

interface Title {
    _type: "string";
    current: string;
}