import type { SiteContent } from "@/lib/types";

type AboutSectionProps = {
  content: SiteContent;
};

export default function AboutSection({ content }: AboutSectionProps) {
  return (
    <section id="ve-chung-toi" className="bg-bark px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto w-full max-w-4xl rounded-3xl border border-cream/20 bg-cream/10 p-8 md:p-10">
        <h2 className="font-display text-3xl text-cream md:text-4xl">{content.aboutTitle}</h2>
        <p className="mt-5 leading-8 text-moss">{content.aboutDescription}</p>
        <p className="mt-4 leading-8 text-moss">
          Triết lý của tiệm là kết nối sách, cây xanh, gỗ và các chi tiết thủ công để tạo nên một
          trải nghiệm sống chậm, nhẹ mà sâu.
        </p>
      </div>
    </section>
  );
}
