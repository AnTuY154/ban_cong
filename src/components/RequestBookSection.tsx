export default function RequestBookSection() {
  return (
    <section id="dang-ky-sach" className="px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-8 rounded-3xl border border-borderwarm bg-cream p-6 shadow-float md:p-10 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <h2 className="font-display text-3xl text-bark md:text-4xl">Đăng ký sách muốn mua</h2>
          <p className="mt-4 leading-7 text-wood">
            Nếu tiệm chưa có sẵn tựa sách bạn cần, hãy để lại thông tin để chúng tôi tìm nguồn phù
            hợp và phản hồi nhanh qua email, Zalo hoặc điện thoại.
          </p>
        </div>

        <form className="grid gap-3 sm:grid-cols-2">
          <input
            className="rounded-2xl border border-borderwarm bg-white px-4 py-3 text-sm text-bark outline-none ring-forest/30 transition focus:ring"
            placeholder="Tên sách / từ khoá"
            name="keyword"
          />
          <input
            className="rounded-2xl border border-borderwarm bg-white px-4 py-3 text-sm text-bark outline-none ring-forest/30 transition focus:ring"
            placeholder="Tác giả / chủ đề"
            name="authorOrTopic"
          />
          <input
            className="rounded-2xl border border-borderwarm bg-white px-4 py-3 text-sm text-bark outline-none ring-forest/30 transition focus:ring"
            placeholder="Số điện thoại"
            name="phone"
          />
          <input
            className="rounded-2xl border border-borderwarm bg-white px-4 py-3 text-sm text-bark outline-none ring-forest/30 transition focus:ring"
            placeholder="Email hoặc Zalo"
            name="contact"
          />
          <textarea
            className="min-h-28 rounded-2xl border border-borderwarm bg-white px-4 py-3 text-sm text-bark outline-none ring-forest/30 transition focus:ring sm:col-span-2"
            placeholder="Ghi chú nhu cầu"
            name="note"
          />
          <button
            type="button"
            className="rounded-full bg-bark px-6 py-3 text-sm font-semibold text-cream transition hover:bg-forest sm:col-span-2 sm:w-fit"
          >
            Gửi đăng ký
          </button>
        </form>
      </div>
    </section>
  );
}
