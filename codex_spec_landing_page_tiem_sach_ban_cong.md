# PRD / Build Spec - Landing Page "Tiệm Sách Ban Công"

## 1. Mục tiêu

Xây dựng landing page cho thương hiệu **Tiệm Sách Ban Công** bằng **Next.js** theo hướng tối ưu **SEO**, giao diện hiện đại kết hợp cổ điển, mang cảm giác ấm áp, xanh mát, gần gũi thiên nhiên.

Landing page này không chỉ bán sách mà còn giới thiệu thêm:

- Phụ kiện decor
- Đồ gỗ nhỏ
- Phụ kiện / kính và phụ kiện của kính
- Dịch vụ thu mua sách cũ
- Đăng ký sách muốn mua
- Giới thiệu thương hiệu
- Hỗ trợ thanh toán online qua **MoMo** và **chuyển khoản ngân hàng**

---

## 2. Yêu cầu công nghệ

### Bắt buộc

- Framework: **Next.js**
- Ưu tiên: **App Router**
- Ngôn ngữ: **TypeScript**
- Styling: **Tailwind CSS**
- Dữ liệu sách, decor, phụ kiện lưu trong **file JSON local** để dễ thêm / sửa / xoá
- Landing page phải render tốt cho SEO
- Hỗ trợ responsive cho mobile, tablet, desktop

### Định hướng SEO

- Sử dụng Server Components cho các section hiển thị dữ liệu tĩnh nếu phù hợp
- Có metadata đầy đủ cho trang chủ
- Có cấu trúc heading chuẩn: 1 thẻ `h1`, các section dùng `h2`, card dùng `h3`
- Nội dung có từ khoá liên quan đến:
  - tiệm sách
  - sách văn học
  - sách kỹ năng
  - sách kinh doanh
  - decor ban công
  - đồ gỗ trang trí
  - thu mua sách cũ
  - phụ kiện kính
- URL thân thiện SEO
- Có thể mở rộng thêm JSON-LD sau này

---

## 3. Phong cách thiết kế

### Tinh thần thiết kế

Phong cách **hiện đại kết hợp cổ điển**, tạo cảm giác:

- sống chậm
- ấm áp
- tinh tế
- có chiều sâu
- gần gũi với cây xanh và gỗ

### Màu chủ đạo

Sử dụng tone giống concept đã chốt:

- Nền kem ấm: `#f6f1e7`
- Xanh lá chủ đạo: `#5f6f52`
- Xanh lá nhạt hỗ trợ: `#dbe5d1`
- Nâu gỗ đậm: `#2f241b`
- Nâu gỗ trung tính: `#7a5a3a`
- Beige / nâu sáng: `#d7c8b7`
- Viền sáng: `#e2d3c1`

### Cảm giác thị giác cần có

- Bo góc lớn
- Card sáng, có chiều sâu nhẹ
- Xen kẽ nền kem, xanh nhạt, nâu gỗ
- Khoảng trắng thoáng
- Ưu tiên typography đẹp, dễ đọc
- Hero section phải gợi cảm giác "góc ban công đọc sách"

---

## 4. Kiến trúc dữ liệu

Dữ liệu hiển thị trên landing page không hard-code trong component. Tách ra file JSON để dễ quản trị thủ công.

### Đề xuất cấu trúc thư mục

```txt
/src
  /app
    /page.tsx
    /layout.tsx
  /components
    Header.tsx
    HeroSection.tsx
    BookSection.tsx
    RequestBookSection.tsx
    PaymentSection.tsx
    DecorSection.tsx
    AccessorySection.tsx
    OldBookSection.tsx
    AboutSection.tsx
    FooterCtaSection.tsx
  /data
    books.json
    decor-products.json
    accessories.json
    site-content.json
  /lib
    types.ts
```

### File JSON cần có

#### `books.json`

Lưu danh sách sách.

Ví dụ cấu trúc:

```json
[
  {
    "id": "book-001",
    "slug": "nha-gia-kim",
    "title": "Nhà giả kim",
    "author": "Paulo Coelho",
    "category": "Văn học",
    "shortDescription": "Cuốn sách truyền cảm hứng về hành trình theo đuổi ước mơ.",
    "price": 89000,
    "currency": "VND",
    "image": "/images/books/nha-gia-kim.jpg",
    "featured": true,
    "inStock": true
  }
]
```

#### `decor-products.json`

Lưu sản phẩm decor và đồ gỗ.

Ví dụ:

```json
[
  {
    "id": "decor-001",
    "slug": "ke-go-mini-ban-cong",
    "name": "Kệ gỗ mini ban công",
    "category": "Đồ gỗ",
    "shortDescription": "Kệ gỗ nhỏ phù hợp đặt sách và chậu cây.",
    "price": 249000,
    "currency": "VND",
    "image": "/images/decor/ke-go-mini.jpg",
    "featured": true,
    "inStock": true
  }
]
```

#### `accessories.json`

Lưu nhóm **phụ kiện**, trong đó trọng tâm là **kính** và **phụ kiện của kính**.

Ví dụ:

```json
[
  {
    "id": "accessory-001",
    "slug": "kinh-doc-sach-gong-vintage",
    "name": "Kính đọc sách gọng vintage",
    "category": "Kính",
    "shortDescription": "Thiết kế nhẹ, phù hợp không gian đọc sách và phong cách cổ điển hiện đại.",
    "price": 329000,
    "currency": "VND",
    "image": "/images/accessories/kinh-doc-sach.jpg",
    "featured": true,
    "inStock": true
  },
  {
    "id": "accessory-002",
    "slug": "hop-dung-kinh-go",
    "name": "Hộp đựng kính gỗ",
    "category": "Phụ kiện kính",
    "shortDescription": "Hộp đựng kính phong cách mộc, đẹp và tiện bảo quản.",
    "price": 159000,
    "currency": "VND",
    "image": "/images/accessories/hop-dung-kinh-go.jpg",
    "featured": true,
    "inStock": true
  }
]
```

#### `site-content.json`

Lưu text content tĩnh của landing page để dễ chỉnh.

Ví dụ:

```json
{
  "brandName": "Tiệm Sách Ban Công",
  "tagline": "Hiện đại, ấm áp và sống chậm",
  "heroTitle": "Một không gian đọc sách xanh mát, ấm màu gỗ và đầy cảm hứng sống chậm.",
  "heroDescription": "Tiệm Sách Ban Công không chỉ bán sách mà còn mang đến trải nghiệm sống đẹp: sách hay, phụ kiện decor, đồ gỗ nhỏ, kính, phụ kiện kính và dịch vụ thu mua sách cũ.",
  "aboutTitle": "Một tiệm nhỏ dành cho người yêu sách và yêu không gian sống đẹp",
  "aboutDescription": "Tiệm Sách Ban Công ra đời từ mong muốn tạo nên một góc bình yên giữa cuộc sống hiện đại. Ở đây có sách, có đồ gỗ, có decor, có kính và có cả cảm hứng để mỗi người tự làm đẹp cho góc riêng của mình."
}
```

---

## 5. Các section bắt buộc trên landing page

### 5.1 Header

Bao gồm:

- Logo / tên thương hiệu: **Tiệm Sách Ban Công**
- Menu điều hướng anchor tới các section
- CTA nổi bật: `Mua ngay` hoặc `Khám phá sản phẩm`

Menu đề xuất:

- Sách
- Decor
- Phụ kiện
- Thu mua sách cũ
- Về chúng tôi

Yêu cầu UI:

- Sticky header
- Nền mờ nhẹ khi scroll
- Desktop có menu ngang, mobile có menu toggle

---

### 5.2 Hero section

Mục tiêu:

- truyền tải ngay tinh thần thương hiệu
- cho người dùng biết cửa hàng bán gì
- có CTA rõ ràng

Nội dung nên có:

- Badge nhỏ mô tả thương hiệu
- `h1` chính
- đoạn mô tả ngắn
- 2 CTA:
  - `Khám phá sách`
  - `Đăng ký sách muốn mua`
- Khối visual bên phải dạng card tổng hợp:
  - danh mục nổi bật
  - hình thức thanh toán
  - thông điệp thương hiệu

Tone hình ảnh:

- xanh cây
- ánh sáng ấm
- ban công
- gỗ
- sách
- cây nhỏ

---

### 5.3 Section Sách

Mục tiêu:

- giới thiệu nhóm sách chính
- có filter theo chủ đề
- tối ưu SEO cho các từ khoá danh mục sách

Yêu cầu:

- Tiêu đề section rõ ràng
- Có filter theo category lấy từ dữ liệu JSON
- Các chủ đề gợi ý:
  - Văn học
  - Kỹ năng
  - Kinh doanh
  - Tâm lý
  - Thiếu nhi
  - Sống chậm
- Hiển thị card sách nổi bật
- Mỗi card có:
  - ảnh
  - tên sách
  - tác giả
  - mô tả ngắn
  - giá
  - nút xem chi tiết

Lưu ý triển khai:

- Trước mắt có thể filter ở client
- Sau này có thể tách trang danh sách riêng

---

### 5.4 Section Đăng ký sách muốn mua

Mục tiêu:

- thu lead khách hàng khi chưa có sẵn sách

Form gồm:

- Tên sách / từ khoá
- Tác giả / chủ đề
- Số điện thoại
- Email hoặc Zalo
- Ghi chú nhu cầu

CTA:

- `Gửi đăng ký`

Ghi chú dev:

- Giai đoạn đầu có thể chỉ làm UI
- Hoặc submit về API route / lưu Google Sheet / gửi email sau này

---

### 5.5 Section Thanh toán

Mục tiêu:

- giúp khách biết các phương thức thanh toán
- tạo cảm giác tin cậy

Bắt buộc hiển thị:

- Thanh toán bằng **MoMo**
- **Chuyển khoản ngân hàng**
- Có ghi chú xác nhận thủ công sau đặt hàng nếu cần

Lưu ý BA:

- Đây là landing page, chưa bắt buộc tích hợp gateway thật ở bản đầu
- Có thể hiển thị như các phương thức hỗ trợ
- Về sau mở rộng thành checkout page riêng

---

### 5.6 Section Decor & đồ gỗ

Mục tiêu:

- bán thêm các sản phẩm decor phù hợp không gian đọc sách

Hiển thị:

- title + mô tả
- grid card sản phẩm từ `decor-products.json`

Danh mục gợi ý:

- Kệ gỗ mini
- Giá sách ban công
- Đèn decor ánh vàng
- Chậu cây nhỏ
- Khay gỗ / hộp gỗ

---

### 5.7 Section Phụ kiện

**Đây là section bắt buộc cần bổ sung thêm vào thiết kế.**

Mục tiêu:

- tách riêng phần **phụ kiện**, đặc biệt là **kính** và **phụ kiện của kính**
- giúp người dùng hiểu đây là một mảng sản phẩm độc lập, không gộp chung với decor

Hiển thị:

- tiêu đề riêng: `Phụ kiện đọc sách & kính`
- mô tả ngắn
- grid card từ `accessories.json`

Danh mục gợi ý:

- Kính đọc sách
- Kính gọng vintage
- Hộp đựng kính
- Khăn lau kính
- Dây đeo kính
- Kệ để kính mini

Mỗi card gồm:

- ảnh
- tên sản phẩm
- category
- mô tả ngắn
- giá
- CTA `Xem chi tiết`

---

### 5.8 Section Thu mua sách cũ

Mục tiêu:

- giới thiệu dịch vụ thu mua hoặc ký gửi sách cũ
- tạo thêm nguồn hàng và tăng tính cộng đồng

Bố cục:

- bên trái: mô tả quy trình 3 bước
- bên phải: form gửi thông tin sách cũ

Các bước gợi ý:

1. Gửi thông tin sách cũ cần bán
2. Cửa hàng định giá và phản hồi
3. Chốt thu mua hoặc ký gửi

Form gồm:

- Tên sách
- Tình trạng sách
- Số lượng / bộ sách
- Ghi chú thêm
- CTA `Nhận báo giá`

---

### 5.9 Section Về chúng tôi

Mục tiêu:

- kể câu chuyện thương hiệu
- tăng độ tin cậy
- tăng chiều sâu cảm xúc

Nội dung nên có:

- triết lý thương hiệu
- cảm hứng từ ban công, cây xanh, gỗ, sách
- mong muốn xây dựng một không gian sống chậm

---

### 5.10 Footer CTA

Mục tiêu:

- chốt hành động cuối trang

Gồm:

- tiêu đề truyền cảm hứng
- mô tả ngắn
- 2 nút CTA:
  - `Xem sản phẩm`
  - `Liên hệ tư vấn`

---

## 6. Yêu cầu component hóa

Tách code thành các component nhỏ, dễ đọc, dễ maintain.

Đề xuất:

- `Header`
- `HeroSection`
- `BookSection`
- `RequestBookSection`
- `PaymentSection`
- `DecorSection`
- `AccessorySection`
- `OldBookSection`
- `AboutSection`
- `FooterCtaSection`

Không viết tất cả trong 1 file lớn.

---

## 7. Yêu cầu SEO cho Next.js

### Metadata trang chủ

Cần khai báo metadata cho trang chủ, ví dụ:

- title: `Tiệm Sách Ban Công | Sách hay, decor, đồ gỗ và phụ kiện đọc sách`
- description: mô tả ngắn gọn có chứa từ khóa
- open graph cơ bản
- twitter card cơ bản

### Nội dung SEO

Cần đảm bảo:

- Có đoạn mô tả tự nhiên, không nhồi từ khoá
- Sử dụng semantic HTML
- Ảnh dùng `next/image`
- Link nội bộ có thể dùng `next/link` nếu có route riêng

### Khả năng mở rộng về sau

Code nên dễ mở rộng thêm:

- `/sach`
- `/sach/[slug]`
- `/decor`
- `/phu-kien`
- `/thu-mua-sach-cu`

---

## 8. Logic dữ liệu mong muốn

### Sách

- Lấy danh sách từ `books.json`
- Tự động sinh danh sách category duy nhất từ dữ liệu
- Có filter theo category
- Có thể chỉ hiển thị `featured === true` ở landing page

### Decor

- Lấy từ `decor-products.json`
- Hiển thị các sản phẩm nổi bật

### Phụ kiện

- Lấy từ `accessories.json`
- Ưu tiên hiển thị các sản phẩm có category liên quan đến kính

---

## 9. Trải nghiệm người dùng mong muốn

- Nhìn vào là thấy ngay sự khác biệt thương hiệu
- Không bị cảm giác như shop đại trà
- Có tính boutique, nghệ thuật, ấm áp
- Màu xanh và nâu phải hài hòa, không quá chói
- CTA rõ ràng nhưng không quá gắt
- Mobile vẫn đẹp và dễ bấm

---

## 10. Không làm trong giai đoạn đầu

Chưa cần làm các phần sau ở phiên bản đầu:

- Trang admin
- Database thật
- Tích hợp thanh toán MoMo thật
- Tích hợp ngân hàng thật
- Tài khoản người dùng
- Giỏ hàng đầy đủ
- Hệ thống tồn kho phức tạp

Có thể mock dữ liệu bằng JSON trước.

---

## 11. Deliverables mong muốn từ Codex

Codex cần tạo ra:

1. Một project **Next.js + TypeScript + Tailwind**
2. Landing page hoàn chỉnh theo spec này
3. Dữ liệu đọc từ các file JSON local
4. Component tách riêng rõ ràng
5. Metadata SEO cho homepage
6. Responsive đẹp cho mobile và desktop
7. Có đủ các section:
   - Header
   - Hero
   - Sách
   - Đăng ký sách muốn mua
   - Thanh toán
   - Decor & đồ gỗ
   - Phụ kiện / kính
   - Thu mua sách cũ
   - Về chúng tôi
   - Footer CTA

---

## 12. Tiêu chí hoàn thành

Một bản build được xem là đạt khi:

- Chạy được bằng Next.js
- Giao diện bám đúng tone màu đã mô tả
- Có đủ section yêu cầu
- Có phần **Phụ kiện** riêng biệt
- Dữ liệu được load từ file JSON
- Có filter sách theo chủ đề
- Có metadata SEO cơ bản
- Code rõ ràng, dễ chỉnh sửa
- Không hard-code toàn bộ nội dung vào 1 component duy nhất

---

## 13. Gợi ý triển khai thêm nếu muốn

Có thể thêm sau:

- Trang chi tiết sách
- Trang chi tiết sản phẩm decor
- Trang chi tiết phụ kiện
- Form gửi mail thực tế
- Kết nối database
- Blog chia sẻ về đọc sách, decor ban công, bảo quản kính
- Schema JSON-LD cho Book / Organization / Product

---

## 14. Tóm tắt chỉ đạo cho Codex

Hãy build landing page thương hiệu **Tiệm Sách Ban Công** bằng **Next.js + TypeScript + Tailwind CSS**. Thiết kế theo phong cách **hiện đại kết hợp cổ điển**, tone màu **xanh lá của cây + nâu gỗ đậm + nền kem ấm**. Landing page phải tối ưu **SEO**, có cấu trúc component rõ ràng, và toàn bộ dữ liệu sách / decor / phụ kiện phải lấy từ **file JSON local** để dễ chỉnh sửa thủ công.

Bắt buộc có các phần:

- Sách có filter theo chủ đề
- Đăng ký sách muốn mua
- Thanh toán bằng MoMo và chuyển khoản ngân hàng
- Decor & đồ gỗ
- Phụ kiện, đặc biệt là **kính và phụ kiện của kính**
- Thu mua sách cũ
- Về chúng tôi

Ưu tiên code sạch, dễ maintain, responsive đẹp và đúng tinh thần thương hiệu.

