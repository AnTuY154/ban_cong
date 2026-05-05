import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FooterCtaSection from "@/components/FooterCtaSection";
import Header from "@/components/Header";
import ProductDetailPage from "@/components/ProductDetailPage";
import books from "@/data/books.json";
import type { Book } from "@/lib/types";

type PageParams = {
  params: Promise<{ slug: string }>;
};

const typedBooks = books as Book[];

export function generateStaticParams() {
  return typedBooks.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const book = typedBooks.find((item) => item.slug === slug);

  if (!book) {
    return {
      title: "Không tìm thấy sách | Tiệm Sách Ban Công"
    };
  }

  return {
    title: `${book.title} | Tiệm Sách Ban Công`,
    description: `${book.description || book.shortDescription} Tác giả ${book.author}, danh mục ${book.category}.`
  };
}

export default async function BookDetailPage({ params }: PageParams) {
  const { slug } = await params;
  const book = typedBooks.find((item) => item.slug === slug);

  if (!book) {
    notFound();
  }

  return (
    <main>
      <Header />
      <ProductDetailPage
        backHref="/#sach"
        backLabel="Quay lại danh sách sách"
        category={book.category}
        description={book.description || book.shortDescription}
        image={book.image}
        inStock={book.inStock}
        name={book.title}
        price={book.price}
        subtitle={`Tác giả: ${book.author}`}
      />
      <FooterCtaSection />
    </main>
  );
}
