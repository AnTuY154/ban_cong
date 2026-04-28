import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FooterCtaSection from "@/components/FooterCtaSection";
import Header from "@/components/Header";
import ProductDetailPage from "@/components/ProductDetailPage";
import decorProducts from "@/data/decor-products.json";
import type { Product } from "@/lib/types";

type PageParams = {
  params: Promise<{ slug: string }>;
};

const typedDecorProducts = decorProducts as Product[];

export function generateStaticParams() {
  return typedDecorProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const product = typedDecorProducts.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: "Không tìm thấy sản phẩm decor | Tiệm Sách Ban Công"
    };
  }

  return {
    title: `${product.name} | Decor Ban Công`,
    description: `${product.description || product.shortDescription} Danh mục: ${product.category}.`
  };
}

export default async function DecorDetailPage({ params }: PageParams) {
  const { slug } = await params;
  const product = typedDecorProducts.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main>
      <Header />
      <ProductDetailPage
        backHref="/#decor"
        backLabel="Quay lại decor & đồ gỗ"
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
