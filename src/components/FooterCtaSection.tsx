export default function FooterCtaSection() {
  return (
    <section className="px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 rounded-3xl border border-borderwarm bg-gradient-to-r from-beige/50 via-cream to-moss/35 p-8 md:flex-row md:items-center md:justify-between md:p-10">
        <div>
          <h2 className="font-display text-3xl text-bark md:text-4xl">
            Sẵn sàng làm mới góc đọc sách của bạn?
          </h2>
          <p className="mt-3 max-w-2xl text-wood">
            Khám phá sách hay, decor ban công, phụ kiện kính và nhận tư vấn phù hợp theo không gian
            thật của bạn.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="#sach"
            className="rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream transition hover:bg-bark"
          >
            Xem sản phẩm
          </a>
          <a
            href="#dang-ky-sach"
            className="rounded-full border border-bark/20 bg-cream px-6 py-3 text-sm font-semibold text-bark transition hover:bg-beige/45"
          >
            Liên hệ tư vấn
          </a>
        </div>
      </div>
    </section>
  );
}
