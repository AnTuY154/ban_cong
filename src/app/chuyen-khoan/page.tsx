"use client";

import { useMemo, useState } from "react";

import FooterCtaSection from "@/components/FooterCtaSection";
import Header from "@/components/Header";

type BankApp = {
  appId: string;
  appName: string;
  deeplink: string;
};

const bankInfo = {
  bankName: "Vietcombank",
  accountNumber: "0123456789",
  accountName: "NGUYEN VAN A",
  transferNote: "SDT + Ten Sach",
};

const bankApps: BankApp[] = [
  { appId: "vcb", appName: "Vietcombank", deeplink: "https://dl.vietqr.io/pay?app=vcb" },
  { appId: "mb", appName: "MB Bank", deeplink: "https://dl.vietqr.io/pay?app=mb" },
  { appId: "tcb", appName: "Techcombank Mobile", deeplink: "https://dl.vietqr.io/pay?app=tcb" },
  { appId: "bidv", appName: "BIDV SmartBanking", deeplink: "https://dl.vietqr.io/pay?app=bidv" },
  { appId: "icb", appName: "VietinBank iPay", deeplink: "https://dl.vietqr.io/pay?app=icb" },
  { appId: "vpb", appName: "VPBank NEO", deeplink: "https://dl.vietqr.io/pay?app=vpb" },
  { appId: "tpb", appName: "TPBank Mobile", deeplink: "https://dl.vietqr.io/pay?app=tpb" },
  { appId: "acb", appName: "ACB One", deeplink: "https://dl.vietqr.io/pay?app=acb" },
];

const qrImageUrl =
  "https://img.vietqr.io/image/vietcombank-0123456789-print.png?amount=0&addInfo=SDT%20%2B%20Ten%20Sach&accountName=NGUYEN%20VAN%20A";

export default function ChuyenKhoanPage() {
  const [selectedAppId, setSelectedAppId] = useState(bankApps[0].appId);

  const selectedBank = useMemo(
    () => bankApps.find((bank) => bank.appId === selectedAppId) ?? bankApps[0],
    [selectedAppId],
  );

  return (
    <main>
      <Header />

      <section className="px-4 py-14 md:px-8 md:py-20">
        <div className="mx-auto w-full max-w-5xl">
          <div className="mt-6 grid gap-6 rounded-3xl border border-borderwarm bg-cream p-6 shadow-float md:grid-cols-2 md:p-8">
            <div>
              <h1 className="font-display text-3xl text-bark md:text-4xl">Chuyen khoan ngan hang</h1>
              <p className="mt-3 text-wood">
                Vui long quet ma QR hoac chuyen khoan thu cong theo thong tin ben duoi.
              </p>

              <div className="mt-6 space-y-3 text-bark">
                <p>
                  <span className="font-semibold">Ngan hang:</span> {bankInfo.bankName}
                </p>
                <p>
                  <span className="font-semibold">So tai khoan:</span> {bankInfo.accountNumber}
                </p>
                <p>
                  <span className="font-semibold">Chu tai khoan:</span> {bankInfo.accountName}
                </p>
                <p>
                  <span className="font-semibold">Noi dung:</span> {bankInfo.transferNote}
                </p>
                <p className="text-sm text-wood">Vi du: 0901234567 + Nha gia kim</p>
              </div>

              <div className="mt-8 rounded-2xl border border-borderwarm bg-white p-4">
                <p className="text-sm font-semibold text-bark">Mo app ngan hang tren dien thoai</p>
                <p className="mt-2 text-sm text-wood">
                  Chon app ban dung, sau do bam nut de mo nhanh. Neu dien thoai chua cai app, lien ket co the khong hoat dong.
                </p>

                <label htmlFor="bank-app-picker" className="mt-4 block text-sm font-medium text-bark">
                  Chon app ngan hang
                </label>
                <select
                  id="bank-app-picker"
                  value={selectedAppId}
                  onChange={(event) => setSelectedAppId(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-borderwarm bg-cream px-3 py-2 text-bark focus:border-bark focus:outline-none"
                >
                  {bankApps.map((bank) => (
                    <option key={bank.appId} value={bank.appId}>
                      {bank.appName}
                    </option>
                  ))}
                </select>

                <a
                  href={selectedBank.deeplink}
                  className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-bark px-4 py-3 text-sm font-semibold text-cream transition hover:opacity-90"
                >
                  Mo {selectedBank.appName}
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-borderwarm bg-white p-4">
              <img src={qrImageUrl} alt="Ma QR chuyen khoan ngan hang" className="mx-auto w-full max-w-sm rounded-2xl" />
              <p className="mt-3 text-center text-sm text-wood">Quet ma de chuyen khoan nhanh</p>
            </div>
          </div>
        </div>
      </section>

      <FooterCtaSection />
    </main>
  );
}
