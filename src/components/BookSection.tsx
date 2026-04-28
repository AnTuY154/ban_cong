"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { formatVnd } from "@/lib/format";
import type { Book } from "@/lib/types";

type BookSectionProps = {
  books: Book[];
};

export default function BookSection({ books }: BookSectionProps) {
  const featuredBooks = useMemo(() => books.filter((book) => book.featured), [books]);
  const categories = useMemo(
    () => ["Tất cả", ...Array.from(new Set(featuredBooks.map((book) => book.category)))],
    [featuredBooks]
  );
  const [activeCategory, setActiveCategory] = useState("Tất cả");

  const visibleBooks = useMemo(() => {
    if (activeCategory === "Tất cả") {
      return featuredBooks;
    }
    return featuredBooks.filter((book) => book.category === activeCategory);
  }, [activeCategory, featuredBooks]);

  return (
    <section id="sach" className="bg-moss/35 px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="font-display text-3xl text-bark md:text-4xl">Sách hay theo chủ đề</h2>
        <p className="mt-3 max-w-3xl text-wood">
          Khám phá sách văn học, sách kỹ năng, sách kinh doanh, tâm lý, thiếu nhi và sách sống
          chậm được chọn lọc cho nhịp sống an nhiên.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeCategory === category
                  ? "bg-forest text-cream"
                  : "border border-borderwarm bg-cream text-bark hover:bg-beige/45"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleBooks.map((book) => (
            <article
              key={book.id}
              className="overflow-hidden rounded-3xl border border-borderwarm bg-cream shadow-float"
            >
              <div className="relative h-52 w-full">
                <Image src={book.image} alt={book.title} fill className="object-cover" />
              </div>
              <div className="space-y-2 p-5">
                <h3 className="font-display text-xl text-bark">{book.title}</h3>
                <p className="text-sm text-forest">Tác giả: {book.author}</p>
                <p className="text-sm leading-6 text-wood">{book.shortDescription}</p>
                <p className="pt-1 font-semibold text-bark">{formatVnd(book.price)}</p>
                <a
                  href={`/sach/${book.slug}`}
                  className="inline-flex rounded-full border border-bark/20 bg-beige/40 px-4 py-2 text-sm font-semibold text-bark transition hover:bg-beige/70"
                >
                  Xem chi tiết
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
