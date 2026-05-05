import Image from "next/image";
import Link from "next/link";
import { formatVnd } from "@/lib/format";

type ProductDetailPageProps = {
  backHref: string;
  backLabel: string;
  category: string;
  description: string;
  image: string;
  inStock: boolean;
  name: string;
  price: number;
  subtitle?: string;
};

export default function ProductDetailPage({
  backHref,
  backLabel,
  category,
  description,
  image,
  inStock,
  name,
  price,
  subtitle
}: ProductDetailPageProps) {
  return (
    <main className="px-4 py-10 md:px-8 md:py-16">
      <div className="mx-auto w-full max-w-6xl">
        <Link
          href={backHref}
          className="inline-flex rounded-full border border-bark/20 bg-cream px-4 py-2 text-sm font-semibold text-bark transition hover:bg-beige/40"
        >
          {backLabel}
        </Link>

        <section className="mt-6 grid gap-6 overflow-hidden rounded-3xl border border-borderwarm bg-cream shadow-float md:grid-cols-2">
          <div className="relative min-h-72">
            <Image src={image} alt={name} fill className="object-cover" />
          </div>

          <div className="space-y-4 p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-forest">{category}</p>
            <h1 className="font-display text-3xl text-bark md:text-4xl">{name}</h1>
            {subtitle ? <p className="text-base text-wood">{subtitle}</p> : null}
            <p className="leading-7 text-wood">{description}</p>

            <div className="space-y-2 border-t border-borderwarm pt-4">
              <p className="text-2xl font-semibold text-bark">{formatVnd(price)}</p>
              <p className={`text-sm font-semibold ${inStock ? "text-forest" : "text-red-700"}`}>
                {inStock ? "Còn hàng" : "Tạm hết hàng"}
              </p>
            </div>

            <Link
              href="/chuyen-khoan"
              className="inline-flex rounded-full bg-forest px-5 py-3 text-sm font-semibold text-cream transition hover:bg-[#4f5f45]"
            >
              Liên hệ đặt mua
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
