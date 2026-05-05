"use client";

import Link from "next/link";

export default function PaymentSection() {
  const momoPhone = "0901234567";
  const momoNote = "SĐT + Tên Sách";
  const momoDeepLink = `momo://?action=transfer&phone=${encodeURIComponent(momoPhone)}&amount=0&comment=${encodeURIComponent(momoNote)}`;
  const momoFallbackLink = `https://me.momo.vn/${momoPhone}`;

  const openMomo = () => {
    window.location.href = momoDeepLink;
    window.setTimeout(() => {
      window.open(momoFallbackLink, "_blank", "noopener,noreferrer");
    }, 900);
  };

  return (
    <section className="bg-bark px-4 py-14 md:px-8 md:py-16">
      <div className="mx-auto grid w-full max-w-7xl gap-4 lg:grid-cols-3">
        <h2 className="font-display text-3xl text-cream md:text-4xl">Thanh toán linh hoạt</h2>

        <button
          type="button"
          onClick={openMomo}
          className="w-full rounded-3xl border border-cream/20 bg-cream/10 p-5 text-left transition duration-300 hover:-translate-y-1 hover:bg-cream/15 hover:shadow-xl"
        >
          <h3 className="font-display text-2xl text-cream">MoMo</h3>
          <p className="mt-2 text-sm leading-6 text-moss">
            Hỗ trợ chuyển tiền qua MoMo nhanh gọn sau khi xác nhận đơn.
          </p>
          <span className="mt-3 inline-flex text-sm font-semibold text-cream/90">Mở MoMo để chuyển khoản</span>
        </button>

        <Link
          href="/chuyen-khoan"
          className="group block rounded-3xl border border-cream/20 bg-cream/10 p-5 transition duration-300 hover:-translate-y-1 hover:bg-cream/15 hover:shadow-xl"
        >
          <h3 className="font-display text-2xl text-cream">Chuyển khoản ngân hàng</h3>
          <p className="mt-2 text-sm leading-6 text-moss">
            Chúng tôi gửi thông tin tài khoản và xác nhận thủ công để đảm bảo đơn hàng chính xác.
          </p>
          <span className="mt-3 inline-flex text-sm font-semibold text-cream/90 transition group-hover:text-cream">
            Mở thông tin chuyển khoản
          </span>
        </Link>
      </div>
    </section>
  );
}
