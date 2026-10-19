# Nhà Bé Học — website học liệu bản in

Website tĩnh dùng HTML, CSS, JavaScript thuần, có thể triển khai miễn phí bằng GitHub Pages. Giao diện pastel dễ thương được thiết kế mới, lấy cảm hứng từ phong cách cửa hàng trực tuyến của mẫu Wix được người dùng cung cấp; không sao chép nguyên mẫu Wix.

## Các chức năng

- Danh mục 21 chủ đề, tìm kiếm và lọc theo nhóm.
- Mỗi chủ đề có đường dẫn ảnh riêng trong thư mục `images/`.
- Chọn bản in 10 hoặc 20 trang; giá 20 trang tự động bằng hai lần giá 10 trang.
- Chọn một trong các chủ đề minh họa: Con Vật, Công Chúa, Bánh Kẹo, Kem, Phương tiện giao thông, hoặc Mix nhiều chủ đề.
- Giỏ hàng, tăng/giảm số lượng, xóa sản phẩm và tính tổng tiền.
- Biểu mẫu đặt hàng gửi dữ liệu đến Google Apps Script.
- Google Sheets lưu đơn hàng, tạo checkbox **Đã giao?** và **Đã thu tiền?** để shop tự đánh dấu.
- Thiết kế tương thích điện thoại và máy tính.

## Các file

- `index.html`: nội dung trang.
- `style.css`: giao diện.
- `script.js`: danh sách sản phẩm, giá, giỏ hàng và gửi đơn.
- `google-apps-script.gs`: mã cần dán vào Google Apps Script.
- `images/`: nơi tải ảnh minh họa lên. Các file ảnh chưa được cung cấp nên website tạm hiện biểu tượng và tên chủ đề cho đến khi bạn tải ảnh đúng tên.

## Đưa website lên GitHub Pages

1. Tải ZIP, giải nén trên máy tính.
2. Trong repository GitHub của bạn, tải lên/thay thế `index.html`, `style.css`, `script.js`, `README.md`, `.nojekyll` và file `google-apps-script.gs`.
3. Tạo thư mục `images` trong repository nếu chưa có. Tải ảnh vào đó; tên file phải khớp với `image` trong `script.js`.
4. Vào **Settings → Pages**; chọn **Deploy from a branch**, branch `main`, folder `/(root)` rồi Save.
5. Mở URL GitHub Pages. Sau mỗi lần sửa, có thể cần đợi một chút và tải lại mạnh bằng `Ctrl+F5`.

## Thêm ảnh riêng cho từng chủ đề

Trong `script.js`, từng sản phẩm có trường `image`, ví dụ:

```js
{ id: "to-mau-tu-do", name: "Tô màu tự do", image: "images/to-mau-tu-do.jpg", ... }
```

Tải ảnh lên đúng đường dẫn `images/to-mau-tu-do.jpg`. Tên file phân biệt chữ hoa/chữ thường trên máy chủ; nên dùng chữ thường, không dấu, nối bằng dấu gạch ngang. Định dạng trong tên phải trùng định dạng file thật (`.jpg`, `.png`, `.webp`).

Danh sách tên file ảnh đang được dùng:
- `images/to-mau-theo-hinh-mau.jpg` — Tô màu theo hình mẫu
- `images/to-mau-tu-do.jpg` — Tô màu tự do
- `images/tap-dem-1-10.jpg` — Tập đếm 1–10
- `images/tap-cong-pham-vi-10.jpg` — Tập cộng phạm vi 10
- `images/tap-tru-pham-vi-10.jpg` — Tập trừ phạm vi 10
- `images/tap-dem-10-20.jpg` — Tập đếm 10–20
- `images/tap-cong-pham-vi-10-20.jpg` — Tập cộng phạm vi 10–20
- `images/tap-tru-pham-vi-10-20.jpg` — Tập trừ phạm vi 10–20
- `images/tap-dem-den-100.jpg` — Tập đếm đến 100
- `images/tap-cong-pham-vi-100.jpg` — Tập cộng phạm vi 100
- `images/tap-tru-pham-vi-100.jpg` — Tập trừ phạm vi 100
- `images/tap-viet-chu-cai-viet-nam.jpg` — Tập viết chữ cái Việt Nam
- `images/tap-viet-chu-cai-tieng-anh.jpg` — Tập viết chữ cái tiếng Anh
- `images/tap-viet-so.jpg` — Tập viết số
- `images/tu-duy-hinh-khoi.jpg` — Tư duy hình khối
- `images/tro-choi-me-cung.jpg` — Trò chơi mê cung
- `images/sudoku-hinh-anh.jpg` — Sudoku hình ảnh
- `images/tro-choi-tu-duy-logic.jpg` — Trò chơi rèn luyện tư duy logic
- `images/noi-bong-va-hinh-anh.jpg` — Nối bóng và hình ảnh
- `images/phan-biet-so-chan-le.jpg` — Phân biệt số chẵn, số lẻ
- `images/so-sanh-so-lon-be.jpg` — So sánh số lớn, số bé

Nếu chưa có ảnh, website sẽ hiện một khung minh họa thay thế. Đây là bình thường, không phải lỗi giỏ hàng.

## Thay đổi giá

Mỗi sản phẩm có `price10`. Đây là giá cho 10 trang, tính bằng đồng Việt Nam. Giá 20 trang được tính tự động bằng `price10 * 2`.

Ví dụ:
```js
{ id: "to-mau-tu-do", name: "Tô màu tự do", price10: 2000, ... }
```
Sau khi sửa, commit thay đổi lên GitHub.

## Kết nối Google Sheets để nhận đơn

**Không nhập mật khẩu Google vào website.** Chỉ dùng URL Web App của Apps Script.

1. Tạo một Google Sheet mới.
2. Mở **Tiện ích mở rộng → Apps Script**.
3. Sao chép toàn bộ nội dung file `google-apps-script.gs` vào trình soạn thảo `Code.gs`, thay nội dung mẫu nếu có, rồi Save.
4. Trong danh sách hàm, chọn `setupSheet` và bấm Run. Cấp quyền cho Apps Script khi Google yêu cầu. Hàm này tạo tab `DonHang` với các cột và checkbox.
5. Chọn **Deploy → New deployment → Web app**.
6. **Execute as:** Me (tài khoản của bạn). **Who has access:** chọn phạm vi truy cập mà Google Workspace/tài khoản của bạn cho phép; website công khai cần endpoint cho khách truy cập không đăng nhập. Chỉ triển khai endpoint nhận đơn mà bạn hiểu và kiểm thử.
7. Bấm Deploy, cấp quyền, sao chép URL Web App kết thúc bằng `/exec`.
8. Mở `script.js` trên GitHub và điền URL vào dòng:
   ```js
   const GOOGLE_SCRIPT_URL = "DAN_URL_WEB_APP_KET_THUC_BANG_exec_VAO_DAY";
   ```
9. Commit thay đổi và chờ GitHub Pages cập nhật.
10. Đặt thử một đơn với dữ liệu thử, sau đó kiểm tra tab `DonHang`. Không nhận đơn thật trước khi xác nhận thử nghiệm thành công.

### Theo dõi đơn trên Google Sheets

Mỗi đơn được ghi thành một hàng. Hai cột cuối cùng là checkbox:
- `Đã giao?`: tick sau khi giao đơn.
- `Đã thu tiền?`: tick sau khi thu tiền.

Các cột trạng thái văn bản mặc định là `Chưa giao` và `Chưa thu tiền`. Checkbox giúp đánh dấu thủ công. Nếu muốn các cột trạng thái tự đổi khi tick checkbox, bạn có thể dùng công thức hoặc bổ sung trigger Apps Script sau.

### Lưu ý kỹ thuật quan trọng

- Website tĩnh không có cơ sở dữ liệu riêng. Google Sheets/Apps Script là phần nhận đơn.
- Trình duyệt gửi request ở chế độ `no-cors`; website không thể đọc phản hồi xác nhận từ Apps Script. Do đó thông báo sau khi gửi chỉ có nghĩa là trình duyệt đã thử gửi, không phải bằng chứng chắc chắn đơn đã được ghi. Chủ shop phải kiểm tra Sheet.
- Endpoint công khai có thể bị spam. Trước khi dùng kinh doanh thực tế, cân nhắc thêm chống spam, xác thực, hoặc dùng dịch vụ backend/form chuyên dụng.
- Website mẫu chưa tích hợp thanh toán online, phí giao hàng, tồn kho, in hóa đơn, hoặc tạo file học liệu tự động.
- Giá là giá mẫu; bạn cần chỉnh trước khi kinh doanh.
- Chỉ tải ảnh bạn có quyền sử dụng.


## Nội dung quảng bá và biểu tượng bằng hình ảnh

Phần giới thiệu đầu trang dùng tiêu đề **“Học liệu in màu cho bé”** và nội dung: “Bé vừa học vừa chơi thông qua những hình ảnh màu sắc theo chủ đề bé thích. Bài tập đơn giản, kích thích trí thông minh, sự tò mò của bé. Các bài tập nâng cao dần phù hợp với khả năng của bé.”

Các biểu tượng trang trí được đổi sang ảnh trong thư mục `images/`. Tên file dùng chữ thường, không dấu, nối bằng dấu gạch ngang theo dạng `noi-dung-hinh-anh.svg` (ví dụ `con-vat.svg`, `hoc-qua-thuc-hanh.svg`). Ảnh bìa mỗi sản phẩm dùng tên theo mã chủ đề, ví dụ `to-mau-tu-do.jpg`.


## Danh mục sản phẩm mở rộng

Website hiện hỗ trợ 3 nhóm sản phẩm chính:
- **Worksheet bản in**: chọn 5, 10, 15 hoặc 20 trang và chủ đề minh họa.
- **Học liệu nam châm**: bộ số, chữ cái Việt/Anh, phép tính, hình khối, động vật và phương tiện.
- **Routine hằng ngày**: bảng/thẻ trực quan cho buổi sáng, trước khi ngủ, vệ sinh cá nhân, giờ ăn, chuẩn bị đi học, lịch ngày/tuần, cảm xúc và thói quen.

Giá chưa hiển thị trên website; shop xác nhận giá và phí giao hàng sau khi nhận đơn. Tên ảnh sản phẩm dùng `images/<ma-san-pham>.jpg`; nếu chưa có ảnh, website sẽ hiển thị biểu tượng dự phòng. Các mã sản phẩm và tên ảnh nằm trong mảng `PRODUCTS` ở `script.js`.

**Lưu ý tích hợp Google Sheets:** đơn hàng mới gửi thêm trường `productType`, `variant` và `optionSummary`. Nếu Google Apps Script hiện tại chỉ lưu các trường cũ, cần kiểm tra phần xử lý đơn để bảo đảm các lựa chọn mới được lưu vào bảng tính.
