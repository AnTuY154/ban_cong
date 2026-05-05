export type Currency = "VND";
export type BookCondition = "new" | "used";

export type Book = {
  id: string;
  slug: string;
  title: string;
  author: string;
  category: string;
  shortDescription: string;
  description: string;
  price: number;
  currency: Currency;
  image: string;
  featured: boolean;
  inStock: boolean;
  stock: number;
  condition: BookCondition;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  price: number;
  currency: Currency;
  image: string;
  featured: boolean;
  inStock: boolean;
};

export type SiteContent = {
  brandName: string;
  tagline: string;
  heroTitle: string;
  heroDescription: string;
  aboutTitle: string;
  aboutDescription: string;
};
