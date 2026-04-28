import FooterCtaSection from "@/components/FooterCtaSection";
import Header from "@/components/Header";

const bankInfo = {
  bankName: "Vietcombank",
  accountNumber: "0123456789",
  accountName: "NGUYEN VAN A",
  transferNote: "SĐT + Tên Sách",
};

const qrImageUrl =
  "https://img.vietqr.io/image/vietcombank-0123456789-print.png?amount=0&addInfo=S%C4%90T%20%2B%20T%C3%AAn%20S%C3%A1ch&accountName=NGUYEN%20VAN%20A";

export default function ChuyenKhoanPage() {
  return (
    <main>
      <Header />

      <section className="px-4 py-14 md:px-8 md:py-20">
        <div className="mx-auto w-full max-w-5xl">
          <div className="mt-6 grid gap-6 rounded-3xl border border-borderwarm bg-cream p-6 shadow-float md:grid-cols-2 md:p-8">
            <div>
              <h1 className="font-display text-3xl text-bark md:text-4xl">Chuyển khoản ngân hàng</h1>
              <p className="mt-3 text-wood">
                Vui lòng quét mã QR hoặc chuyển khoản thủ công theo thông tin bên dưới.
              </p>

              <div className="mt-6 space-y-3 text-bark">
                <p>
                  <span className="font-semibold">Ngân hàng:</span> {bankInfo.bankName}
                </p>
                <p>
                  <span className="font-semibold">Số tài khoản:</span> {bankInfo.accountNumber}
                </p>
                <p>
                  <span className="font-semibold">Chủ tài khoản:</span> {bankInfo.accountName}
                </p>
                <p>
                  <span className="font-semibold">Nội dung:</span> {bankInfo.transferNote}
                </p>
                <p className="text-sm text-wood">Ví dụ: 0901234567 + Nha gia kim</p>
              </div>
            </div>

            <div className="rounded-3xl border border-borderwarm bg-white p-4">
              <img
                src={qrImageUrl}
                alt="Mã QR chuyển khoản ngân hàng"
                className="mx-auto w-full max-w-sm rounded-2xl"
              />
              <p className="mt-3 text-center text-sm text-wood">Quét mã để chuyển khoản nhanh</p>
            </div>
          </div>
        </div>
      </section>

      <FooterCtaSection />
    </main>
  );
}
