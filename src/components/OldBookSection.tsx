export default function OldBookSection() {
  return (
    <section id="thu-mua-sach-cu" className="px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-borderwarm bg-cream p-6 shadow-float md:p-8">
          <h2 className="font-display text-3xl text-bark md:text-4xl">Thu mua sách cũ</h2>
          <p className="mt-4 text-wood">
            Dịch vụ thu mua và ký gửi sách cũ giúp sách tiếp tục được đọc, đồng thời tạo thêm nguồn
            sách tốt cho cộng đồng yêu đọc.
          </p>
          <ol className="mt-6 space-y-3 text-sm text-wood">
            <li className="rounded-2xl bg-moss/35 px-4 py-3">1. Gửi thông tin sách cũ cần bán</li>
            <li className="rounded-2xl bg-moss/35 px-4 py-3">
              2. Tiệm định giá và phản hồi trong thời gian ngắn
            </li>
            <li className="rounded-2xl bg-moss/35 px-4 py-3">3. Chốt thu mua hoặc ký gửi</li>
          </ol>
        </div>

        <form className="rounded-3xl border border-borderwarm bg-beige/35 p-6 md:p-8">
          <h3 className="font-display text-2xl text-bark">Gửi thông tin sách cũ</h3>
          <div className="mt-4 grid gap-3">
            <input
              className="rounded-2xl border border-borderwarm bg-white px-4 py-3 text-sm text-bark outline-none ring-forest/30 transition focus:ring"
              placeholder="Tên sách"
              name="title"
            />
            <input
              className="rounded-2xl border border-borderwarm bg-white px-4 py-3 text-sm text-bark outline-none ring-forest/30 transition focus:ring"
              placeholder="Tình trạng sách"
              name="condition"
            />
            <input
              className="rounded-2xl border border-borderwarm bg-white px-4 py-3 text-sm text-bark outline-none ring-forest/30 transition focus:ring"
              placeholder="Số lượng / bộ sách"
              name="quantity"
            />
            <textarea
              className="min-h-28 rounded-2xl border border-borderwarm bg-white px-4 py-3 text-sm text-bark outline-none ring-forest/30 transition focus:ring"
              placeholder="Ghi chú thêm"
              name="note"
            />
            <button
              type="button"
              className="w-fit rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream transition hover:bg-bark"
            >
              Nhận báo giá
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
