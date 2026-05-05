import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FooterCtaSection from "@/components/FooterCtaSection";
import Header from "@/components/Header";
import ProductDetailPage from "@/components/ProductDetailPage";
import accessories from "@/data/accessories.json";
import type { Product } from "@/lib/types";

type PageParams = {
  params: Promise<{ slug: string }>;
};

const typedAccessories = accessories as Product[];

export function generateStaticParams() {
  return typedAccessories.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const product = typedAccessories.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: "Không tìm thấy phụ kiện | Tiệm Sách Ban Công"
    };
  }

  return {
    title: `${product.name} | Phụ kiện đọc sách`,
    description: `${product.description || product.shortDescription} Danh mục: ${product.category}.`
  };
}

export default async function AccessoryDetailPage({ params }: PageParams) {
  const { slug } = await params;
  const product = typedAccessories.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main>
      <Header />
      <ProductDetailPage
        backHref="/#phu-kien"
        backLabel="Quay lại phụ kiện"
        category={product.category}
        description={product.description || product.shortDescription}
        image={product.image}
        inStock={product.inStock}
        name={product.name}
        price={product.price}
      />
      <FooterCtaSection />
    </main>
  );
}
