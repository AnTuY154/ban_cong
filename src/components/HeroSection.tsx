import type { SiteContent } from "@/lib/types";

type HeroSectionProps = {
  content: SiteContent;
};

export default function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden px-4 pb-14 pt-12 md:px-8 md:pb-20 md:pt-16">
      <div className="absolute left-0 top-0 -z-10 h-72 w-72 rounded-full bg-moss/60 blur-3xl" />
      <div className="absolute bottom-8 right-0 -z-10 h-72 w-72 rounded-full bg-beige/70 blur-3xl" />

      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <span className="inline-flex rounded-full border border-borderwarm bg-beige/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-wood">
            {content.tagline}
          </span>
          <h1 className="mt-5 font-display text-4xl leading-tight text-bark md:text-5xl">
            {content.heroTitle}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-wood md:text-lg">
            {content.heroDescription}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#sach"
              className="rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream transition hover:bg-bark"
            >
              Khám phá sách
            </a>
            <a
              href="#dang-ky-sach"
              className="rounded-full border border-bark/20 bg-cream px-6 py-3 text-sm font-semibold text-bark transition hover:bg-beige/45"
            >
              Đăng ký sách muốn mua
            </a>
          </div>
        </div>

        <aside className="rounded-3xl border border-borderwarm bg-gradient-to-br from-moss/45 via-cream to-beige/60 p-6 shadow-float md:p-8">
          <h2 className="font-display text-2xl text-bark">Góc ban công đọc sách</h2>
          <ul className="mt-4 space-y-3 text-sm text-wood">
            <li className="rounded-2xl bg-cream/80 p-3">
              Danh mục nổi bật: sách văn học, sách kỹ năng, sách kinh doanh, decor ban công
            </li>
            <li className="rounded-2xl bg-cream/80 p-3">
              Thanh toán hỗ trợ: MoMo và chuyển khoản ngân hàng
            </li>
            <li className="rounded-2xl bg-cream/80 p-3">
              Dịch vụ cộng đồng: đăng ký sách muốn mua và thu mua sách cũ
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
