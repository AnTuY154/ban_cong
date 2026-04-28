export default function PaymentSection() {
  return (
    <section className="bg-bark px-4 py-14 md:px-8 md:py-16">
      <div className="mx-auto grid w-full max-w-7xl gap-4 lg:grid-cols-3">
        <h2 className="font-display text-3xl text-cream md:text-4xl">Thanh toán linh hoạt</h2>
        <div className="rounded-3xl border border-cream/20 bg-cream/10 p-5">
          <h3 className="font-display text-2xl text-cream">MoMo</h3>
          <p className="mt-2 text-sm leading-6 text-moss">
            Hỗ trợ chuyển tiền qua MoMo nhanh gọn sau khi xác nhận đơn.
          </p>
        </div>
        <div className="rounded-3xl border border-cream/20 bg-cream/10 p-5">
          <h3 className="font-display text-2xl text-cream">Chuyển khoản ngân hàng</h3>
          <p className="mt-2 text-sm leading-6 text-moss">
            Chúng tôi gửi thông tin tài khoản và xác nhận thủ công để đảm bảo đơn hàng chính xác.
          </p>
        </div>
      </div>
    </section>
  );
}
