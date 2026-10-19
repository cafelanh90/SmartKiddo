/*
 * SmartKiddo - Cấu hình hệ thống & Xử lý Frontend
 */

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbztOhIx_AbRT4IFpaf08V559fo6geFjbbgVae1YNXCjkK1h-xoKD2iYjyDloCKKDfIP/exec";
const PRICE_PER_PAGE = 1500;
const PAGE_OPTIONS = [5, 10, 15];

const PRODUCTS = [
  // Toán học
  { id: "toan-1", name: "Học nhận biết số 1-10", category: "Toán học", description: "Làm quen mặt số và số lượng từ 1 đến 10.", image: "images/toan-1.jpg" },
  { id: "toan-2", name: "Học nhận biết số 10-20", category: "Toán học", description: "Mở rộng số đếm từ 10 đến 20.", image: "images/toan-2.jpg" },
  { id: "toan-3", name: "Học nhận biết số 1-100", category: "Toán học", description: "Bảng số 1-100 tổng quan cho bé.", image: "images/toan-3.jpg" },
  { id: "toan-4", name: "Học viết số 1-10", category: "Toán học", description: "Luyện nét và tập viết nét số chuẩn.", image: "images/toan-4.jpg" },
  { id: "toan-5", name: "Học viết số 2 chữ số và 100", category: "Toán học", description: "Luyện viết số tròn chục và số lớn.", image: "images/toan-5.jpg" },
  { id: "toan-6", name: "Học đếm số phạm vi 10 và nối số", category: "Toán học", description: "Dành cho bé chưa biết viết số, gạch đếm trực quan.", image: "images/toan-6.jpg" },
  { id: "toan-7", name: "Học đếm số phạm vi 10 và viết số", category: "Toán học", description: "Tập đếm và tự viết số thích hợp.", image: "images/toan-7.jpg" },
  { id: "toan-8", name: "Học đếm số phạm vi 20 (chỉ tay đếm)", category: "Toán học", description: "Hướng dẫn chỉ tay đếm đếm chính xác.", image: "images/toan-8.jpg" },
  { id: "toan-9", name: "Học đếm phạm vi 100 theo nhóm", category: "Toán học", description: "Đếm nhanh nhóm 2, nhóm 5 và nhóm 10.", image: "images/toan-9.jpg" },
  { id: "toan-10", name: "Cộng trừ phạm vi 10", category: "Toán học", description: "Các phép tính cộng trừ cơ bản.", image: "images/toan-10.jpg" },
  { id: "toan-11", name: "Cộng trừ phạm vi 20", category: "Toán học", description: "Phép tính mở rộng trong phạm vi 20.", image: "images/toan-11.jpg" },
  { id: "toan-12", name: "Bài tập điền số còn thiếu", category: "Toán học", description: "Điền số thiếu vào dãy số nguyên.", image: "images/toan-12.jpg" },
  { id: "toan-13", name: "Trò chơi tìm số theo thứ tự (2 người chơi)", category: "Toán học", description: "Tương tác rèn phản xạ nhận biết số.", image: "images/toan-13.jpg" },
  { id: "toan-14", name: "Đếm hiện có và tô màu đủ 10, 20", category: "Toán học", description: "Luyện tính tổng số lượng tô màu.", image: "images/toan-14.jpg" },
  { id: "toan-15", name: "(Bảng từ) Thêm 1, bớt 1", category: "Toán học", description: "Tăng giảm số lượng 1 đơn vị.", image: "images/toan-15.jpg" },
  { id: "toan-16", name: "Cộng thêm từ 10 (12 = 10 + 2)", category: "Toán học", description: "Cấu tạo số thập phân cơ bản.", image: "images/toan-16.jpg" },
  { id: "toan-17", name: "Cộng từ số tròn chục (30 + 4 = 34)", category: "Toán học", description: "Tính cộng nhẩm số tròn chục.", image: "images/toan-17.jpg" },
  { id: "toan-18", name: "Điền số còn thiếu vào ô trống, đoàn tàu, con sâu", category: "Toán học", description: "Điền số quy luật chuỗi hình ảnh.", image: "images/toan-18.jpg" },
  { id: "toan-19", name: "Đọc số và khoanh tròn vật thể", category: "Toán học", description: "Luyện đọc đề và nhóm đủ số lượng.", image: "images/toan-19.jpg" },
  { id: "toan-20", name: "Viết số liền trước, số liền sau, ở giữa", category: "Toán học", description: "Xác định thứ tự các số.", image: "images/toan-20.jpg" },
  { id: "toan-21", name: "Đếm ngược", category: "Toán học", description: "Luyện đếm ngược từ 10, 20 về 1.", image: "images/toan-21.jpg" },
  { id: "toan-22", name: "Số chẵn và số lẻ", category: "Toán học", description: "Phân biệt số chẵn, số lẻ.", image: "images/toan-22.jpg" },
  { id: "toan-23", name: "Số lớn hơn, số bé hơn (Khoanh dấu >, <, =)", category: "Toán học", description: "So sánh giá trị các số.", image: "images/toan-23.jpg" },
  { id: "toan-24", name: "Số tròn chục", category: "Toán học", description: "Làm quen 10, 20, 30... 90.", image: "images/toan-24.jpg" },
  { id: "toan-25", name: "Đếm đơn vị 2-4-6, 3-5-7, 10-20-30", category: "Toán học", description: "Đếm cách khoảng dốc tư duy.", image: "images/toan-25.jpg" },
  { id: "toan-26", name: "Nhận biết các hình dạng hình học", category: "Toán học", description: "Vuông, tròn, tam giác, chữ nhật...", image: "images/toan-26.jpg" },

  // Sáng tạo
  { id: "st-1", name: "Tô màu theo chủ đề bé thích", category: "Sáng tạo", description: "Ghi chú chủ đề bé thích (xe, công chúa, động vật...) khi đặt hàng.", image: "images/sang-tao-1.jpg" },
  { id: "st-2", name: "Vẽ tranh bằng nối số", category: "Sáng tạo", description: "Nối số hoàn thiện bức tranh.", image: "images/sang-tao-2.jpg" },

  // Luyện viết
  { id: "lv-1", name: "Luyện viết chữ cái tiếng Việt", category: "Luyện viết", description: "Nét đứt tô chữ cái tiếng Việt.", image: "images/luyen-viet-1.jpg" },
  { id: "lv-2", name: "Luyện viết chữ cái tiếng Anh", category: "Luyện viết", description: "Tập viết bảng chữ cái Alphabet.", image: "images/luyen-viet-2.jpg" },

  // Tư duy Logic
  { id: "td-1", name: "Nối bóng với hình", category: "Tư Duy Logic", description: "Quan sát bóng và tìm hình tương ứng.", image: "images/tu-duy-1.jpg" },
  { id: "td-2", name: "Trò chơi Mê cung", category: "Tư Duy Logic", description: "Tìm đường thoát mê cung.", image: "images/tu-duy-2.jpg" },
  { id: "td-3", name: "Hình khối và không gian", category: "Tư Duy Logic", description: "Tư duy góc nhìn và xoay hình khối.", image: "images/tu-duy-3.jpg" },
  { id: "td-4", name: "Tìm hình tiếp theo theo quy luật", category: "Tư Duy Logic", description: "Điền hình tiếp theo chuỗi quy luật.", image: "images/tu-duy-4.jpg" },
  { id: "td-5", name: "Phân tích hình ảnh", category: "Tư Duy Logic", description: "Bóc tách từng mảnh ghép của hình.", image: "images/tu-duy-5.jpg" },
  { id: "td-6", name: "Tìm điểm khác biệt", category: "Tư Duy Logic", description: "So sánh 2 bức tranh tìm điểm khác.", image: "images/tu-duy-6.jpg" },
  { id: "td-7", name: "Sudoku hình ảnh", category: "Tư Duy Logic", description: "Xếp hình Sudoku đơn giản cho bé.", image: "images/tu-duy-7.jpg" },

  // Kiến thức Khoa học
  { id: "kh-1", name: "Cây cối và con vật", category: "Kiến thức Khoa học", description: "Tìm hiểu thế giới động thực vật.", image: "images/khoa-hoc-1.jpg" },
  { id: "kh-2", name: "Cơ thể chúng ta", category: "Kiến thức Khoa học", description: "Nhận biết các bộ phận cơ thể.", image: "images/khoa-hoc-2.jpg" },
  { id: "kh-3", name: "Đồ ăn và dinh dưỡng", category: "Kiến thức Khoa học", description: "Phân biệt thực phẩm tốt cho sức khỏe.", image: "images/khoa-hoc-3.jpg" },
  { id: "kh-4", name: "Thời tiết và các mùa trong năm", category: "Kiến thức Khoa học", description: "Khám phá hiện tượng thiên nhiên.", image: "images/khoa-hoc-4.jpg" },
  { id: "kh-5", name: "Năng lượng", category: "Kiến thức Khoa học", description: "Làm quen với ánh sáng, nhiệt độ.", image: "images/khoa-hoc-5.jpg" },
  { id: "kh-6", name: "Lực (Đẩy và Kéo), hướng lực", category: "Kiến thức Khoa học", description: "Khái niệm lực đẩy và lực kéo cơ bản.", image: "images/khoa-hoc-6.jpg" },

  // So sánh và sắp xếp
  { id: "ss-1", name: "So sánh kích thước (To/nhỏ, Cao/thấp, Dài/ngắn, Nặng/nhẹ)", category: "So sánh và Sắp xếp", description: "Phân biệt các đặc tính vật lý.", image: "images/so-sanh-1.jpg" },
  { id: "ss-2", name: "Giống nhau và khác nhau (Vật thể, Hình dạng, Chữ khác loại)", category: "So sánh và Sắp xếp", description: "Tìm vật khác loại trong nhóm.", image: "images/so-sanh-2.jpg" },
  { id: "ss-3", name: "Trái ngược và tương đồng", category: "So sánh và Sắp xếp", description: "Nối cặp đối lập và đồng dạng.", image: "images/so-sanh-3.jpg" },
  { id: "ss-4", name: "Vị trí (Trên/dưới, Trái/phải, Trong/ngoài, Trước/sau)", category: "So sánh và Sắp xếp", description: "Định hướng vị trí không gian.", image: "images/so-sanh-4.jpg" },
  { id: "ss-5", name: "Cắt và phân loại vật thể", category: "So sánh và Sắp xếp", description: "Bài tập cắt dán phân loại thuộc tính.", image: "images/so-sanh-5.jpg" }
];

const $ = (selector, root = document) => root.querySelector(selector); const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
const formatVND = num => new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(num);

let activeCategory = "all";
let cart = [];
let orderBusy = false;

function renderProducts() {
  const grid = $("#productGrid");
  if (!grid) return;

  const searchInput = $("#searchInput");
  const countEl = $("#productCount");
  const emptyState = $("#emptyState");

  const term = (searchInput ? searchInput.value : "").trim().toLocaleLowerCase("vi");
  const shown = PRODUCTS.filter(p => (activeCategory === "all" || p.category === activeCategory) &&
    `${p.name} ${p.description} ${p.category}`.toLocaleLowerCase("vi").includes(term));
  
  grid.innerHTML = shown.map(p => `
    <article class="product-card">
      <div class="product-image-wrap">
        <img class="product-image" src="${escapeHtml(p.image)}" alt="${escapeHtml(p.name)}" loading="lazy" onerror="this.src='https://picsum.photos/300/200?random=${p.id}'">
      </div>
      <div class="product-card-body">
        <span class="product-category">${escapeHtml(p.category)}</span>
        <h3>${escapeHtml(p.name)}</h3>
        <p>${escapeHtml(p.description)}</p>
        <div class="price-info">
          <span>Đơn giá: 1.500đ / trang</span>
        </div>
        <div class="product-options">
          <label>Số lượng trang
            <select class="page-select" aria-label="Số trang cho ${escapeHtml(p.name)}">
              ${PAGE_OPTIONS.map(pg => `<option value="${pg}">${pg} trang (${formatVND(pg * PRICE_PER_PAGE)})</option>`).join("")}
            </select>
          </label>
          <button class="add-button" data-add="${escapeHtml(p.id)}">＋ Thêm vào giỏ</button>
        </div>
      </div>
    </article>`).join("");
  
  if (countEl) countEl.textContent = shown.length;
  if (emptyState) emptyState.classList.toggle("hidden", shown.length > 0);
}

function addToCart(id, card) {
  const p = PRODUCTS.find(item => item.id === id);
  if (!p) return;

  const pages = Number($(".page-select", card).value);
  const key = `${id}|${pages}`;

  const found = cart.find(item => item.key === key);
  if (found) {
    found.qty += 1;
  } else {
    cart.push({ key, id: p.id, name: p.name, category: p.category, pages, qty: 1 });
  }

  renderCart();
  openCart();
}

function calculateCartTotals() {
  const totalPages = cart.reduce((sum, item) => sum + (item.pages * item.qty), 0);
  const rawTotal = totalPages * PRICE_PER_PAGE;
  let discountPercent = 0;

  if (totalPages >= 100) {
    discountPercent = 0.10;
  } else if (totalPages >= 50) {
    discountPercent = 0.05;
  }

  const discountAmount = rawTotal * discountPercent;
  const finalTotal = rawTotal - discountAmount;

  return { totalPages, rawTotal, discountPercent, discountAmount, finalTotal };
}

function renderCart() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  if ($("#cartCount")) $("#cartCount").textContent = count;
  if ($("#drawerCount")) $("#drawerCount").textContent = `(${count})`;

  const { totalPages, rawTotal, discountPercent, discountAmount, finalTotal } = calculateCartTotals();
  
  const cartItemsEl = $("#cartItems");
  if (cartItemsEl) {
    cartItemsEl.innerHTML = cart.map(item => `
      <article class="cart-item">
        <div class="cart-thumb">
          <img src="images/${item.id}.jpg" alt="" onerror="this.src='https://picsum.photos/100/100'">
        </div>
        <div style="flex:1;">
          <h4 style="font-size:0.95rem;">${escapeHtml(item.name)}</h4>
          <small style="color:#666;">${item.pages} trang · ${formatVND(item.pages * PRICE_PER_PAGE)}</small>
          <div class="cart-item-actions">
            <button class="qty-btn" data-qty="${escapeHtml(item.key)}" data-delta="-1">−</button>
            <span>${item.qty}</span>
            <button class="qty-btn" data-qty="${escapeHtml(item.key)}" data-delta="1">+</button>
            <button class="remove-btn" data-remove="${escapeHtml(item.key)}">Xóa</button>
          </div>
        </div>
        <div style="font-weight:bold; font-size:0.9rem;">${formatVND(item.pages * item.qty * PRICE_PER_PAGE)}</div>
      </article>`).join("");
  }
  
  const cartSummaryEl = $("#cartSummary");
  if (cartSummaryEl) {
    cartSummaryEl.innerHTML = `
      <div style="padding: 10px 0; border-top: 1px dashed #ccc; margin-bottom: 10px;">
        <div style="display:flex; justify-content:space-between;"><span>Tổng số trang:</span><strong>${totalPages} trang</strong></div>
        <div style="display:flex; justify-content:space-between;"><span>Tạm tính:</span><span>${formatVND(rawTotal)}</span></div>
        ${discountPercent > 0 ? `<div style="display:flex; justify-content:space-between; color:#d32f2f;"><span>Giảm giá (${discountPercent * 100}\%):</span><span>-${formatVND(discountAmount)}</span></div>` : ''}
        <div style="display:flex; justify-content:space-between; font-weight:bold; color:#2e7d32; font-size:1.1rem; margin-top:5px;"><span>Tổng tiền:</span><span>${formatVND(finalTotal)}</span></div>
      </div>`;
  }

  if ($("#checkoutTotal")) $("#checkoutTotal").textContent = formatVND(finalTotal);
  if ($("#cartEmpty")) $("#cartEmpty").classList.toggle("hidden", cart.length > 0);
  if ($("#cartItems")) $("#cartItems").classList.toggle("hidden", cart.length === 0);
  if ($("#cartBottom")) $("#cartBottom").classList.toggle("hidden", cart.length === 0);
}

function openCart() {
  $("#cartDrawer")?.classList.add("open");
  $("#overlay")?.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  $("#cartDrawer")?.classList.remove("open");
  $("#overlay")?.classList.add("hidden");
  document.body.style.overflow = "";
}

function openCheckout() {
  if (!cart.length) return;
  closeCart();
  $("#checkoutFormWrap")?.classList.remove("hidden");
  $("#successScreen")?.classList.add("hidden");
  $("#formErrorMessage")?.classList.add("hidden");
  $("#checkoutModal")?.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeCheckout() {
  $("#checkoutModal")?.classList.add("hidden");
  document.body.style.overflow = "";
}

function validatePhone(phone) {
  const phoneRegex = /^(0|84|\+84)(3|5|7|8|9)[0-9]{8}$/;
  return phoneRegex.test(phone.trim());
}

async function submitOrder(event) {
  event.preventDefault();
  if (orderBusy || !cart.length) return;

  const form = event.currentTarget;
  const phoneInput = form.querySelector('[name="phone"]');
  const phoneError = $("#phoneError");
  const formErrorMessage = $("#formErrorMessage");

  // Reset errors
  phoneError?.classList.add("hidden");
  formErrorMessage?.classList.add("hidden");

  if (phoneInput && !validatePhone(phoneInput.value)) {
    phoneError?.classList.remove("hidden");
    phoneInput.focus();
    return;
  }

  const { totalPages, rawTotal, discountPercent, discountAmount, finalTotal } = calculateCartTotals();
  const fd = new FormData(form);
  const orderId = `SK-${Date.now().toString().slice(-8)}`;

  const items = cart.map(item => ({
    productId: item.id,
    productName: item.name,
    category: item.category,
    pages: item.pages,
    quantity: item.qty,
    subtotal: item.pages * item.qty * PRICE_PER_PAGE
  }));

  const orderData = {
    orderId,
    createdAt: new Date().toISOString(),
    customerName: String(fd.get("customerName") || "").trim(),
    phone: String(fd.get("phone") || "").trim(),
    address: String(fd.get("address") || "").trim(),
    notes: String(fd.get("notes") || "").trim(),
    items,
    itemSummary: items.map(i => `${i.productName} (${i.pages}tr) x${i.quantity}`).join(" | "),
    totalPages,
    rawTotal: formatVND(rawTotal),
    discountPercent: `${discountPercent * 100}%`,
    discountAmount: formatVND(discountAmount),
    total: formatVND(finalTotal)
  };

  const button = $("#submitOrder");
  orderBusy = true;
  if (button) { button.disabled = true; button.textContent = "Đang gửi đơn hàng..."; }

  try {
    if (GOOGLE_SCRIPT_URL.trim()) {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(orderData)
      });
    }

    // Ẩn form và hiện kết quả
    $("#checkoutFormWrap")?.classList.add("hidden");
    
    const orderDetailsBox = $("#orderDetailsBox");
    if (orderDetailsBox) {
      orderDetailsBox.innerHTML = `
        <p style="margin-bottom:6px;">📋 <strong>Mã đơn hàng:</strong> <span style="color:#d32f2f; font-weight:bold;">${orderData.orderId}</span></p>
        <p style="margin-bottom:6px;">👤 <strong>Người nhận:</strong> ${escapeHtml(orderData.customerName)}</p>
        <p style="margin-bottom:6px;">📞 <strong>Số điện thoại:</strong> ${escapeHtml(orderData.phone)}</p>
        <p style="margin-bottom:6px;">📍 <strong>Địa chỉ:</strong> ${escapeHtml(orderData.address)}</p>
        ${orderData.notes ? `<p style="margin-bottom:6px;">📝 <strong>Ghi chú:</strong> ${escapeHtml(orderData.notes)}</p>` : ''}
        <hr style="margin:10px 0; border:none; border-top:1px dashed #ccc;">
        <p style="margin-bottom:6px;">📚 <strong>Danh sách bài tập:</strong></p>
        <ul style="padding-left:20px; font-size:0.9rem;">
          ${orderData.items.map(i => `<li>${escapeHtml(i.productName)} (${i.pages} trang) x${i.quantity}</li>`).join('')}
        </ul>
        <div style="font-size:1.1rem; color:#2e7d32; font-weight:bold; text-align:right; margin-top:10px;">
          Tổng thanh toán: ${orderData.total}
        </div>
      `;
    }

    $("#successScreen")?.classList.remove("hidden");
    cart = [];
    renderCart();
    form.reset();

  } catch (error) {
    if (formErrorMessage) {
      formErrorMessage.classList.remove("hidden");
      formErrorMessage.textContent = "Có lỗi xảy ra khi kết nối. Mẹ vui lòng thử lại nhé!";
    }
  } finally {
    orderBusy = false;
    if (button) { button.disabled = false; button.innerHTML = 'Gửi đơn hàng <span>→</span>'; }
  }
}

function initApp() {
  const productGrid = $("#productGrid");
  if (!productGrid) return;

  productGrid.addEventListener("click", event => {
    const button = event.target.closest("[data-add]");
    if (button) addToCart(button.dataset.add, button.closest(".product-card"));
  });

  $("#categoryFilters")?.addEventListener("click", event => { const button = event.target.closest("[data-category]"); if (!button) return; activeCategory = button.dataset.category; $$(".filter", $("#categoryFilters")).forEach(el => el.classList.toggle("active", el === button));
    renderProducts();
  });

  $("#searchInput")?.addEventListener("input", renderProducts);

  $("#cartItems")?.addEventListener("click", event => {
    const qtyButton = event.target.closest("[data-qty]");
    const removeButton = event.target.closest("[data-remove]");
    if (qtyButton) {
      const item = cart.find(i => i.key === qtyButton.dataset.qty);
      if (item) item.qty += Number(qtyButton.dataset.delta);
      cart = cart.filter(i => i.qty > 0);
      renderCart();
    }
    if (removeButton) {
      cart = cart.filter(i => i.key !== removeButton.dataset.remove);
      renderCart();
    }
  });

  $("#openCart")?.addEventListener("click", openCart);
  $("#closeCart")?.addEventListener("click", closeCart);
  $("#overlay")?.addEventListener("click", closeCart);
  $("#continueShopping")?.addEventListener("click", closeCart);
  $("#goCheckout")?.addEventListener("click", openCheckout);
  $("#closeCheckout")?.addEventListener("click", closeCheckout);

  $("#checkoutModal")?.addEventListener("click", event => {
    if (event.target === $("#checkoutModal")) closeCheckout();
  });

  $("#checkoutForm")?.addEventListener("submit", submitOrder);

  $("#menuToggle")?.addEventListener("click", () => {
    $("#mainNav")?.classList.toggle("open");
  });

  if ($("#year")) $("#year").textContent = new Date().getFullYear();

  renderProducts();
  renderCart();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
