"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "#sach", label: "Sách" },
  { href: "#decor", label: "Decor" },
  { href: "#phu-kien", label: "Phụ kiện" },
  { href: "#thu-mua-sach-cu", label: "Thu mua sách cũ" },
  { href: "#ve-chung-toi", label: "Về chúng tôi" }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-borderwarm/70 bg-cream/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link href="/" className="font-display text-xl text-bark md:text-2xl">
          Tiệm Sách Ban Công
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-forest transition hover:text-bark"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#sach"
          className="hidden rounded-full bg-forest px-5 py-2 text-sm font-semibold text-cream transition hover:bg-bark md:inline-flex"
        >
          Khám phá sản phẩm
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="inline-flex rounded-full border border-borderwarm bg-cream px-4 py-2 text-sm font-semibold text-bark md:hidden"
        >
          Menu
        </button>
      </div>

      {isOpen ? (
        <nav
          id="mobile-menu"
          className="border-t border-borderwarm/70 bg-cream px-4 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl bg-moss/40 px-4 py-2 text-sm text-bark"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
