import Image from "next/image";
import Link from "next/link";
import { formatVnd } from "@/lib/format";
import type { Product } from "@/lib/types";

type AccessorySectionProps = {
  accessories: Product[];
};

export default function AccessorySection({ accessories }: AccessorySectionProps) {
  const featuredAccessories = accessories.filter(
    (item) =>
      item.featured &&
      (item.category.toLowerCase().includes("kính") ||
        item.name.toLowerCase().includes("kính"))
  );

  return (
    <section id="phu-kien" className="bg-moss/35 px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="font-display text-3xl text-bark md:text-4xl">Phụ kiện đọc sách & kính</h2>
        <p className="mt-3 max-w-3xl text-wood">
          Mảng phụ kiện riêng cho trải nghiệm đọc: kính đọc sách, phụ kiện của kính và đồ hỗ trợ
          bảo quản tinh gọn.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredAccessories.map((item) => (
            <Link
              key={item.id}
              href={`/phu-kien/${item.slug}`}
              className="group block overflow-hidden rounded-3xl border border-borderwarm bg-cream shadow-float transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-48">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <div className="space-y-2 p-5">
                <h3 className="font-display text-xl text-bark">{item.name}</h3>
                <p className="text-sm text-forest">{item.category}</p>
                <p className="text-sm leading-6 text-wood">{item.shortDescription}</p>
                <p className="font-semibold text-bark">{formatVnd(item.price)}</p>
                <span className="inline-flex rounded-full border border-bark/20 bg-beige/40 px-4 py-2 text-sm font-semibold text-bark transition group-hover:bg-beige/70">
                  Xem chi tiết
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
