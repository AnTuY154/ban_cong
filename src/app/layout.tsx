import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tiệm Sách Ban Công | Sách hay, decor, đồ gỗ và phụ kiện đọc sách",
  description:
    "Tiệm Sách Ban Công cung cấp sách văn học, sách kỹ năng, sách kinh doanh, decor ban công, đồ gỗ trang trí, phụ kiện kính và dịch vụ thu mua sách cũ.",
  openGraph: {
    title: "Tiệm Sách Ban Công",
    description:
      "Không gian sách sống chậm với sách hay, decor, phụ kiện đọc sách và dịch vụ thu mua sách cũ.",
    type: "website",
    locale: "vi_VN",
    siteName: "Tiệm Sách Ban Công"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiệm Sách Ban Công",
    description:
      "Sách hay, decor ban công, đồ gỗ nhỏ và phụ kiện đọc sách theo phong cách ấm áp hiện đại."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
