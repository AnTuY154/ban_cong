import AboutSection from "@/components/AboutSection";
import AccessorySection from "@/components/AccessorySection";
import BookSection from "@/components/BookSection";
import DecorSection from "@/components/DecorSection";
import FooterCtaSection from "@/components/FooterCtaSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OldBookSection from "@/components/OldBookSection";
import PaymentSection from "@/components/PaymentSection";
import RequestBookSection from "@/components/RequestBookSection";
import accessories from "@/data/accessories.json";
import books from "@/data/books.json";
import decorProducts from "@/data/decor-products.json";
import siteContent from "@/data/site-content.json";
import type { Book, Product, SiteContent } from "@/lib/types";

export default function Home() {
  const typedBooks = books as Book[];
  const typedDecorProducts = decorProducts as Product[];
  const typedAccessories = accessories as Product[];
  const typedSiteContent = siteContent as SiteContent;

  return (
    <main>
      <Header />
      <HeroSection content={typedSiteContent} />
      <BookSection books={typedBooks} />
      <RequestBookSection />
      <PaymentSection />
      <DecorSection products={typedDecorProducts} />
      <AccessorySection accessories={typedAccessories} />
      <OldBookSection />
      <AboutSection content={typedSiteContent} />
      <FooterCtaSection />
    </main>
  );
}
