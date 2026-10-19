/*
 * Nhà Bé Học — cấu hình website đa dạng học liệu
 * Sản phẩm gồm: worksheet bản in, học liệu nam châm và bộ hình ảnh routine.
 * Giá không hiển thị trên website; shop xác nhận giá và phí giao hàng sau khi nhận đơn.
 */
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbztOhIx_AbRT4IFpaf08V559fo6geFjbbgVae1YNXCjkK1h-xoKD2iYjyDloCKKDfIP/exec";
const THEMES = ["Con Vật", "Công Chúa", "Bánh Kẹo", "Kem", "Phương tiện giao thông", "Mix nhiều chủ đề"];
const PAGE_OPTIONS = [5, 10, 15, 20];

// type: worksheet | magnetic | routine | learning-tool
// image dùng tên file images/<noi-dung-hinh-anh>.jpg
const PRODUCTS = [
  { id:"to-mau-theo-hinh-mau", name:"Tô màu theo hình mẫu", category:"Sáng tạo", type:"worksheet", description:"Bé quan sát mẫu màu và tô theo gợi ý.", image:"images/to-mau-theo-hinh-mau.jpg", icon:"🎨" },
  { id:"to-mau-tu-do", name:"Tô màu tự do", category:"Sáng tạo", type:"worksheet", description:"Những bức tranh để bé thỏa sức sáng tạo.", image:"images/to-mau-tu-do.jpg", icon:"🖍️" },
  { id:"tap-dem-1-10", name:"Tập đếm 1–10", category:"Toán học", type:"worksheet", description:"Làm quen số từ 1 đến 10 qua hình ảnh đáng yêu.", image:"images/tap-dem-1-10.jpg", icon:"🔢" },
  { id:"be-hoc-dem-va-viet-so", name:"Bé học đếm và viết số", category:"Toán học", type:"worksheet", description:"Làm quen chữ số, thực hành đếm và tập viết nét số cơ bản.", image:"images/be-hoc-dem-va-viet-so.jpg", icon:"✏️" },
  { id:"tap-cong-pham-vi-10", name:"Tập cộng phạm vi 10", category:"Toán học", type:"worksheet", description:"Bước đầu làm quen với phép cộng.", image:"images/tap-cong-pham-vi-10.jpg", icon:"➕" },
  { id:"tap-tru-pham-vi-10", name:"Tập trừ phạm vi 10", category:"Toán học", type:"worksheet", description:"Luyện tập phép trừ qua bài tập trực quan.", image:"images/tap-tru-pham-vi-10.jpg", icon:"➖" },
  { id:"tap-dem-10-20", name:"Tập đếm 10–20", category:"Toán học", type:"worksheet", description:"Làm quen số từ 10 đến 20 qua hình ảnh.", image:"images/tap-dem-10-20.jpg", icon:"🔟" },
  { id:"tap-cong-pham-vi-10-20", name:"Tập cộng phạm vi 10–20", category:"Toán học", type:"worksheet", description:"Thực hành phép cộng với các số lớn hơn.", image:"images/tap-cong-pham-vi-10-20.jpg", icon:"🧮" },
  { id:"tap-tru-pham-vi-10-20", name:"Tập trừ phạm vi 10–20", category:"Toán học", type:"worksheet", description:"Luyện phép trừ trong phạm vi 10–20.", image:"images/tap-tru-pham-vi-10-20.jpg", icon:"➖" },
  { id:"tap-dem-den-100", name:"Tập đếm đến 100", category:"Toán học", type:"worksheet", description:"Khám phá các số đến 100 theo cách dễ hiểu.", image:"images/tap-dem-den-100.jpg", icon:"💯" },
  { id:"tap-cong-pham-vi-100", name:"Tập cộng phạm vi 100", category:"Toán học", type:"worksheet", description:"Bài tập cộng giúp bé rèn kỹ năng tính toán.", image:"images/tap-cong-pham-vi-100.jpg", icon:"➕" },
  { id:"tap-tru-pham-vi-100", name:"Tập trừ phạm vi 100", category:"Toán học", type:"worksheet", description:"Thực hành phép trừ trong phạm vi 100.", image:"images/tap-tru-pham-vi-100.jpg", icon:"➖" },
  { id:"lam-quen-chu-cai-viet-nam", name:"Làm quen chữ cái Việt Nam", category:"Tập viết", type:"worksheet", description:"Làm quen và luyện viết chữ cái tiếng Việt.", image:"images/lam-quen-chu-cai-viet-nam.jpg", icon:"🔤" },
  { id:"tap-viet-chu-cai-tieng-anh", name:"Tập viết chữ cái tiếng Anh", category:"Tập viết", type:"worksheet", description:"Nhận diện và luyện viết chữ cái tiếng Anh.", image:"images/tap-viet-chu-cai-tieng-anh.jpg", icon:"🔡" },
  { id:"tap-viet-so", name:"Tập viết số", category:"Tập viết", type:"worksheet", description:"Luyện nét và viết các chữ số.", image:"images/tap-viet-so.jpg", icon:"✏️" },
  { id:"tu-duy-hinh-khoi", name:"Tư duy hình khối", category:"Tư duy", type:"worksheet", description:"Nhận diện hình dạng và rèn tư duy không gian.", image:"images/tu-duy-hinh-khoi.jpg", icon:"🔷" },
  { id:"tro-choi-me-cung", name:"Trò chơi mê cung", category:"Tư duy", type:"worksheet", description:"Tìm đường đi và luyện khả năng quan sát.", image:"images/tro-choi-me-cung.jpg", icon:"🌀" },
  { id:"sudoku-hinh-anh", name:"Sudoku hình ảnh", category:"Tư duy", type:"worksheet", description:"Sắp xếp hình ảnh theo quy luật đơn giản.", image:"images/sudoku-hinh-anh.jpg", icon:"🧩" },
  { id:"tro-choi-tu-duy-logic", name:"Trò chơi rèn luyện tư duy logic", category:"Tư duy", type:"worksheet", description:"Những thử thách vui để bé suy luận.", image:"images/tro-choi-tu-duy-logic.jpg", icon:"🧠" },
  { id:"noi-bong-va-hinh-anh", name:"Nối bóng và hình ảnh", category:"Tư duy", type:"worksheet", description:"Tìm hình phù hợp với chiếc bóng tương ứng.", image:"images/noi-bong-va-hinh-anh.jpg", icon:"🌤️" },
  { id:"phan-biet-so-chan-le", name:"Phân biệt số chẵn, số lẻ", category:"Toán học", type:"worksheet", description:"Nhận biết số chẵn và số lẻ qua ví dụ.", image:"images/phan-biet-so-chan-le.jpg", icon:"🔢" },
  { id:"so-sanh-so-lon-be", name:"So sánh số lớn, số bé", category:"Toán học", type:"worksheet", description:"Luyện so sánh và sắp xếp các số.", image:"images/so-sanh-so-lon-be.jpg", icon:"⚖️" },

  { id:"bo-so-nam-cham", name:"Bộ số nam châm 0–20", category:"Học liệu nam châm", type:"magnetic", description:"Bộ chữ số nhiều màu giúp bé nhận biết số, đếm và sắp xếp trên bề mặt kim loại hoặc bảng từ.", image:"images/bo-so-nam-cham.jpg", icon:"🔢", variants:["Bộ số 0–10","Bộ số 0–20","Bộ số 0–100"] },
  { id:"bo-chu-cai-viet-nam-nam-cham", name:"Bộ chữ cái tiếng Việt nam châm", category:"Học liệu nam châm", type:"magnetic", description:"Chữ cái tiếng Việt dạng nam châm để bé nhận diện, ghép vần và tạo từ đơn giản.", image:"images/bo-chu-cai-viet-nam-nam-cham.jpg", icon:"🔤", variants:["Chữ thường","Chữ in hoa","Bộ chữ hoa và chữ thường"] },
  { id:"bo-chu-cai-tieng-anh-nam-cham", name:"Bộ chữ cái tiếng Anh nam châm", category:"Học liệu nam châm", type:"magnetic", description:"Bộ chữ cái A–Z giúp bé làm quen mặt chữ và ghép từ tiếng Anh cơ bản.", image:"images/bo-chu-cai-tieng-anh-nam-cham.jpg", icon:"🔡", variants:["Chữ thường","Chữ in hoa","Bộ chữ hoa và chữ thường"] },
  { id:"bo-phep-tinh-nam-cham", name:"Bộ số và phép tính nam châm", category:"Học liệu nam châm", type:"magnetic", description:"Số và ký hiệu phép tính để bé thực hành cộng, trừ bằng cách sắp xếp trực quan.", image:"images/bo-phep-tinh-nam-cham.jpg", icon:"➕", variants:["Bộ cơ bản","Bộ số và phép tính mở rộng"] },
  { id:"bo-hinh-khoi-mau-sac-nam-cham", name:"Bộ hình khối và màu sắc nam châm", category:"Học liệu nam châm", type:"magnetic", description:"Các hình khối nhiều màu giúp bé nhận biết hình dạng, màu sắc và tạo mẫu hình.", image:"images/bo-hinh-khoi-mau-sac-nam-cham.jpg", icon:"🔷", variants:["Bộ hình cơ bản","Bộ hình mở rộng"] },
  { id:"bo-dong-vat-phuong-tien-nam-cham", name:"Bộ hình ảnh động vật và phương tiện nam châm", category:"Học liệu nam châm", type:"magnetic", description:"Hình ảnh trực quan để bé gọi tên, phân loại và kể chuyện theo chủ đề.", image:"images/bo-dong-vat-phuong-tien-nam-cham.jpg", icon:"🐻", variants:["Động vật","Phương tiện giao thông","Kết hợp hai chủ đề"] },

  { id:"bang-routine-buoi-sang", name:"Bộ routine buổi sáng", category:"Routine hằng ngày", type:"routine", description:"Thẻ hình ảnh theo trình tự giúp bé làm quen với các việc cần làm vào buổi sáng.", image:"images/bang-routine-buoi-sang.jpg", icon:"🌞", variants:["Bộ thẻ cơ bản","Bảng routine kèm thẻ","Bộ đầy đủ có thẻ hoàn thành"] },
  { id:"bang-routine-truoc-khi-di-ngu", name:"Bộ routine trước khi đi ngủ", category:"Routine hằng ngày", type:"routine", description:"Hình ảnh trực quan hỗ trợ xây dựng trình tự thư giãn và chuẩn bị đi ngủ.", image:"images/bang-routine-truoc-khi-di-ngu.jpg", icon:"🌙", variants:["Bộ thẻ cơ bản","Bảng routine kèm thẻ","Bộ đầy đủ có thẻ hoàn thành"] },
  { id:"bang-routine-ve-sinh-ca-nhan", name:"Bộ routine vệ sinh cá nhân", category:"Routine hằng ngày", type:"routine", description:"Thẻ minh họa các bước như rửa tay, đánh răng, tắm và chải tóc.", image:"images/bang-routine-ve-sinh-ca-nhan.jpg", icon:"🪥", variants:["Rửa tay và đánh răng","Vệ sinh cá nhân đầy đủ"] },
  { id:"bang-routine-an-uong", name:"Bộ routine giờ ăn", category:"Routine hằng ngày", type:"routine", description:"Hình ảnh gợi nhắc các bước trước, trong và sau bữa ăn để bé tập thói quen tự lập.", image:"images/bang-routine-an-uong.jpg", icon:"🍽️", variants:["Bộ thẻ cơ bản","Bảng routine kèm thẻ"] },
  { id:"bang-routine-di-hoc", name:"Bộ routine chuẩn bị đi học", category:"Routine hằng ngày", type:"routine", description:"Thẻ theo trình tự giúp bé chuẩn bị đồ dùng, mặc quần áo và sẵn sàng ra khỏi nhà.", image:"images/bang-routine-di-hoc.jpg", icon:"🎒", variants:["Bộ thẻ cơ bản","Bảng routine kèm thẻ","Bộ đầy đủ có thẻ hoàn thành"] },
  { id:"bang-lich-truc-quan-hang-ngay", name:"Bảng lịch trực quan hằng ngày", category:"Routine hằng ngày", type:"routine", description:"Bảng sắp xếp hoạt động trong ngày để bé dễ hình dung việc tiếp theo.", image:"images/bang-lich-truc-quan-hang-ngay.jpg", icon:"🗓️", variants:["Lịch một ngày","Lịch một tuần","Lịch ngày và tuần"] },
  { id:"the-cam-xuc-va-nhu-cau", name:"Thẻ cảm xúc và nhu cầu", category:"Routine hằng ngày", type:"routine", description:"Thẻ hình ảnh giúp bé nhận biết cảm xúc và diễn đạt điều mình cần.", image:"images/the-cam-xuc-va-nhu-cau.jpg", icon:"💛", variants:["Bộ cảm xúc cơ bản","Bộ cảm xúc và nhu cầu"] },
  { id:"bang-theo-doi-thoi-quen", name:"Bảng theo dõi thói quen", category:"Routine hằng ngày", type:"routine", description:"Bảng đánh dấu các thói quen bé đang luyện tập, khuyến khích sự chủ động từng bước.", image:"images/bang-theo-doi-thoi-quen.jpg", icon:"⭐", variants:["Bảng tuần","Bảng tháng","Bảng tuần kèm thẻ thưởng"] }
];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
let activeCategory = "all";
let cart = [];
let orderBusy = false;

function productImageMarkup(p, extraClass = "") {
  return `<img class="${extraClass}" src="${escapeHtml(p.image)}" alt="${escapeHtml(p.name)}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.classList.remove('hidden')"><div class="image-fallback hidden"><span class="placeholder-icon">${escapeHtml(p.icon)}</span><strong>${escapeHtml(p.name)}</strong><small>Ảnh minh họa sẽ được cập nhật</small></div>`;
}
function productOptionsMarkup(p) {
  if (p.type === "worksheet") {
    return `<label>Số lượng trang<select class="page-select" aria-label="Số trang cho ${escapeHtml(p.name)}">${PAGE_OPTIONS.map(pg => `<option value="${pg}">${pg} trang</option>`).join("")}</select></label>
      <label>Chủ đề minh họa<select class="theme-select" aria-label="Chủ đề minh họa cho ${escapeHtml(p.name)}">${THEMES.map(t => `<option value="${escapeHtml(t)}">${escapeHtml(t)}</option>`).join("")}</select></label>`;
  }
  const label = p.type === "magnetic" ? "Loại bộ sản phẩm" : p.type === "routine" ? "Quy cách bộ" : "Lựa chọn sản phẩm";
  return `<label>${label}<select class="variant-select" aria-label="${label} cho ${escapeHtml(p.name)}">${(p.variants || ["Bộ tiêu chuẩn"]).map(v => `<option value="${escapeHtml(v)}">${escapeHtml(v)}</option>`).join("")}</select></label>`;
}
function renderProducts() {
  const grid = $("#productGrid");
  if (!grid) return;
  const term = (($('#searchInput') || {}).value || "").trim().toLocaleLowerCase("vi");
  const shown = PRODUCTS.filter(p => (activeCategory === "all" || p.category === activeCategory) && `${p.name} ${p.description} ${p.category} ${p.type}`.toLocaleLowerCase("vi").includes(term));
  grid.innerHTML = shown.map(p => `
    <article class="product-card" data-product-id="${escapeHtml(p.id)}">
      <div class="product-image-wrap">${productImageMarkup(p,"product-image")}</div>
      <div class="product-card-body">
        <span class="product-category">${escapeHtml(p.category)}</span>
        <h3>${escapeHtml(p.name)}</h3><p>${escapeHtml(p.description)}</p>
        <div class="product-options">${productOptionsMarkup(p)}
          <button class="add-button" data-add="${escapeHtml(p.id)}">＋ Thêm vào giỏ hàng</button>
        </div>
      </div>
    </article>`).join("");
  const countEl = $("#productCount");
  if (countEl) countEl.textContent = shown.length;
  const empty = $("#emptyState");
  if (empty) empty.classList.toggle("hidden", shown.length > 0);
}
function addToCart(id, card) {
  const p = PRODUCTS.find(item => item.id === id);
  if (!p) return;
  const pages = p.type === "worksheet" ? Number(($('.page-select', card) || {}).value || PAGE_OPTIONS[1]) : null;
  const theme = p.type === "worksheet" ? (($('.theme-select', card) || {}).value || THEMES[0]) : "";
  const variant = p.type === "worksheet" ? "" : (($('.variant-select', card) || {}).value || "Bộ tiêu chuẩn");
  const optionSummary = p.type === "worksheet" ? `${pages} trang · ${theme}` : variant;
  const key = `${id}|${pages || ""}|${theme}|${variant}`;
  const found = cart.find(item => item.key === key);
  if (found) found.qty += 1;
  else cart.push({key, id, name:p.name, category:p.category, type:p.type, image:p.image, icon:p.icon, pages, theme, variant, optionSummary, qty:1});
  renderCart(); openCart();
}
function renderCart() {
  const count = cart.reduce((sum,item) => sum + item.qty, 0);
  if ($("#cartCount")) $("#cartCount").textContent = count;
  if ($("#drawerCount")) $("#drawerCount").textContent = `(${count})`;
  if ($("#cartTotal")) $("#cartTotal").textContent = "Shop xác nhận sau";
  if ($("#checkoutTotal")) $("#checkoutTotal").textContent = "Shop xác nhận sau";
  const itemsEl = $("#cartItems");
  if (itemsEl) itemsEl.innerHTML = cart.map(item => `
    <article class="cart-item"><div class="cart-thumb"><img src="${escapeHtml(item.image)}" alt="" onerror="this.style.display='none';this.parentElement.textContent='${escapeHtml(item.icon)}'"></div>
      <div><h4>${escapeHtml(item.name)}</h4><small>${escapeHtml(item.optionSummary)}</small>
        <div class="cart-item-actions"><button class="qty-btn" data-qty="${escapeHtml(item.key)}" data-delta="-1" aria-label="Giảm số lượng">−</button><span>${item.qty}</span><button class="qty-btn" data-qty="${escapeHtml(item.key)}" data-delta="1" aria-label="Tăng số lượng">+</button><button class="remove-btn" data-remove="${escapeHtml(item.key)}">Xóa</button></div>
      </div></article>`).join("");
  if ($("#cartEmpty")) $("#cartEmpty").classList.toggle("hidden", cart.length > 0);
  if (itemsEl) itemsEl.classList.toggle("hidden", cart.length === 0);
  if ($("#cartBottom")) $("#cartBottom").classList.toggle("hidden", cart.length === 0);
}
function openCart() {
  const drawer = $("#cartDrawer"); if (drawer) { drawer.classList.add("open"); drawer.setAttribute("aria-hidden","false"); }
  if ($("#overlay")) $("#overlay").classList.remove("hidden"); document.body.style.overflow = "hidden";
}
function closeCart() {
  const drawer = $("#cartDrawer"); if (drawer) { drawer.classList.remove("open"); drawer.setAttribute("aria-hidden","true"); }
  if ($("#overlay")) $("#overlay").classList.add("hidden"); document.body.style.overflow = "";
}
function openCheckout() {
  if (!cart.length) return; closeCart();
  if ($("#formMessage")) { $("#formMessage").textContent = ""; $("#formMessage").className = "form-message"; }
  if ($("#checkoutModal")) $("#checkoutModal").classList.remove("hidden"); document.body.style.overflow = "hidden";
}
function closeCheckout() { if ($("#checkoutModal")) $("#checkoutModal").classList.add("hidden"); document.body.style.overflow = ""; }
function buildOrder(form) {
  const fd = new FormData(form);
  const orderId = `NBH-${Date.now().toString().slice(-9)}`;
  const items = cart.map(item => ({productId:item.id, productName:item.name, category:item.category, productType:item.type, pages:item.pages, theme:item.theme, variant:item.variant, optionSummary:item.optionSummary, quantity:item.qty}));
  return {orderId, createdAt:new Date().toISOString(), customerName:String(fd.get("customerName") || "").trim(), phone:String(fd.get("phone") || "").trim(), address:String(fd.get("address") || "").trim(), notes:String(fd.get("notes") || "").trim(), items, itemSummary:items.map(i=>`${i.productName} (${i.optionSummary}) x${i.quantity}`).join(" | "), total:"Shop xác nhận sau", deliveryStatus:"Chưa giao", paymentStatus:"Chưa thu tiền"};
}
async function submitOrder(event) {
  event.preventDefault(); if (orderBusy || !cart.length) return;
  const form = event.currentTarget, order = buildOrder(form), message = $("#formMessage"), button = $("#submitOrder");
  if (!GOOGLE_SCRIPT_URL.trim()) { if (message) { message.className="form-message error"; message.textContent="Website chưa được cấu hình Google Sheets. Đơn chưa được gửi."; } return; }
  orderBusy = true; if (button) { button.disabled=true; button.textContent="Đang gửi đơn..."; } if (message) message.className="form-message";
  try {
    await fetch(GOOGLE_SCRIPT_URL,{method:"POST",mode:"no-cors",redirect:"follow",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(order)});
    if (message) { message.className="form-message success"; message.textContent=`Đã gửi yêu cầu đặt hàng ${order.orderId}. Shop sẽ kiểm tra đơn và liên hệ xác nhận sản phẩm, giá và phí giao hàng.`; }
    cart=[]; renderCart(); form.reset();
  } catch (error) {
    if (message) { message.className="form-message error"; message.textContent="Chưa gửi được đơn do lỗi kết nối. Vui lòng thử lại hoặc liên hệ shop."; }
  } finally { orderBusy=false; if (button) { button.disabled=false; button.innerHTML='Gửi đơn hàng <span>→</span>'; } }
}
function initApp() {
  const productGrid = $("#productGrid"); if (!productGrid) return;
  productGrid.addEventListener("click", event => { const button=event.target.closest("[data-add]"); if (button) addToCart(button.dataset.add,button.closest(".product-card")); });
  const categoryFilters=$("#categoryFilters"); if (categoryFilters) categoryFilters.addEventListener("click",event=>{const button=event.target.closest("[data-category]");if(!button)return;activeCategory=button.dataset.category;$$(".filter",categoryFilters).forEach(el=>el.classList.toggle("active",el===button));renderProducts();});
  const searchInput=$("#searchInput"); if(searchInput) searchInput.addEventListener("input",renderProducts);
  const cartItems=$("#cartItems"); if(cartItems) cartItems.addEventListener("click",event=>{const qtyButton=event.target.closest("[data-qty]"),removeButton=event.target.closest("[data-remove]");if(qtyButton){const item=cart.find(i=>i.key===qtyButton.dataset.qty);if(item)item.qty+=Number(qtyButton.dataset.delta);cart=cart.filter(i=>i.qty>0);renderCart();}if(removeButton){cart=cart.filter(i=>i.key!==removeButton.dataset.remove);renderCart();}});
  if($("#openCart")) $("#openCart").addEventListener("click",openCart); if($("#closeCart")) $("#closeCart").addEventListener("click",closeCart); if($("#overlay")) $("#overlay").addEventListener("click",closeCart); if($("#continueShopping")) $("#continueShopping").addEventListener("click",closeCart); if($("#goCheckout")) $("#goCheckout").addEventListener("click",openCheckout); if($("#closeCheckout")) $("#closeCheckout").addEventListener("click",closeCheckout);
  const checkoutModal=$("#checkoutModal"); if(checkoutModal) checkoutModal.addEventListener("click",event=>{if(event.target===checkoutModal)closeCheckout();});
  const checkoutForm=$("#checkoutForm"); if(checkoutForm) checkoutForm.addEventListener("submit",submitOrder);
  const menuToggle=$("#menuToggle"),mainNav=$("#mainNav"); if(menuToggle&&mainNav){menuToggle.addEventListener("click",()=>mainNav.classList.toggle("open"));mainNav.addEventListener("click",event=>{if(event.target.closest("a"))mainNav.classList.remove("open");});}
  document.addEventListener("keydown",event=>{if(event.key==="Escape"){closeCart();closeCheckout();}});
  const yearEl=$("#year"); if(yearEl)yearEl.textContent=new Date().getFullYear(); renderProducts();renderCart();
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",initApp);else initApp();
