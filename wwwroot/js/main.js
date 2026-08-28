/* =========================================================
   MIVELLA FASHION — main.js
   Data produk + interaksi (filter, cart, wishlist, quick view,
   checkout, search, mobile menu)
   ========================================================= */
(function () {
    "use strict";

    /* ---------------------------------------------------
       1. DATA PRODUK
       Ganti "img" dengan path foto asli kamu di /assets/products/
       --------------------------------------------------- */
    const PRODUCTS = [
        { id: "bra-01", name: "Bra Wireless Maroon", cat: "Bra", price: 45000, img: "https://picsum.photos/seed/bra-maroon/600/740", desc: "Bra tanpa kawat dengan bahan rayon adem, nyaman dipakai seharian tanpa bikin sesak.", sizes: ["S", "M", "L", "XL"], badge: "Best Seller" },
        { id: "bra-02", name: "Bra Sport Dusty Pink", cat: "Bra", price: 42000, img: "https://picsum.photos/seed/bra-dustypink/600/740", desc: "Desain sport dengan strap lebar, cocok untuk aktivitas santai di rumah.", sizes: ["S", "M", "L"] },
        { id: "bra-03", name: "Bra Lace Mocca", cat: "Bra", price: 48000, img: "https://picsum.photos/seed/bra-mocca/600/740", desc: "Sentuhan lace di bagian tepi untuk tampilan yang lebih feminin.", sizes: ["M", "L", "XL"] },
        { id: "bra-04", name: "Bra Basic Nude", cat: "Bra", price: 40000, img: "https://picsum.photos/seed/bra-nude/600/740", desc: "Warna netral yang mudah dipadukan dengan pakaian tipis sekalipun.", sizes: ["S", "M", "L", "XL"], badge: "New" },
        { id: "bra-05", name: "Bra Push Up Plum", cat: "Bra", price: 50000, img: "https://picsum.photos/seed/bra-plum/600/740", desc: "Bantalan tipis untuk siluet yang lebih rapi di balik pakaian.", sizes: ["S", "M", "L"] },
        { id: "bra-06", name: "Bra Katun Blush", cat: "Bra", price: 39000, img: "https://picsum.photos/seed/bra-blush/600/740", desc: "Bahan campuran katun-rayon yang lembut di kulit sensitif.", sizes: ["S", "M", "L", "XL"] },

        { id: "setelan-01", name: "Setelan Tanktop Mauve Ruffle", cat: "Setelan", price: 79000, img: "https://picsum.photos/seed/setelan-mauve/600/740", desc: "Set tanktop dan celana pendek dengan detail ruffle di bagian bawah.", sizes: ["S", "M", "L", "XL"], badge: "Best Seller" },
        { id: "setelan-02", name: "Setelan Baby Blue", cat: "Setelan", price: 82000, img: "https://picsum.photos/seed/setelan-babyblue/600/740", desc: "Warna baby blue yang menyegarkan, cocok untuk santai di rumah.", sizes: ["S", "M", "L"] },
        { id: "setelan-03", name: "Setelan Rayon Sand", cat: "Setelan", price: 78000, img: "https://picsum.photos/seed/setelan-sand/600/740", desc: "Nuansa netral yang serba guna, mudah dipadukan kapan saja.", sizes: ["M", "L", "XL"] },
        { id: "setelan-04", name: "Setelan Strap Olive", cat: "Setelan", price: 80000, img: "https://picsum.photos/seed/setelan-olive/600/740", desc: "Tali silang di bagian belakang untuk sentuhan detail yang manis.", sizes: ["S", "M", "L"], badge: "New" },
        { id: "setelan-05", name: "Setelan Motif Floral", cat: "Setelan", price: 85000, img: "https://picsum.photos/seed/setelan-floral/600/740", desc: "Motif bunga kecil yang lembut, cocok untuk suasana santai pagi hari.", sizes: ["S", "M", "L", "XL"] },

        { id: "daster-01", name: "Daster Blush Baru", cat: "Daster", price: 65000, img: "https://picsum.photos/seed/daster-blush/600/740", desc: "Potongan longgar yang adem, favorit untuk dipakai sehari-hari di rumah.", sizes: ["All Size"], badge: "Best Seller" },
        { id: "daster-02", name: "Daster Kancing Depan Mocca", cat: "Daster", price: 68000, img: "https://picsum.photos/seed/daster-kancing/600/740", desc: "Kancing depan memudahkan aktivitas menyusui atau ganti pakaian cepat.", sizes: ["All Size"] },
        { id: "daster-03", name: "Daster Motif Batik Kecil", cat: "Daster", price: 70000, img: "https://picsum.photos/seed/daster-batik/600/740", desc: "Motif batik kecil yang klasik namun tetap terasa modern.", sizes: ["All Size"] },

        { id: "dress-01", name: "Dress Slip Amara", cat: "Dress", price: 95000, img: "https://picsum.photos/seed/dress-amara/600/740", desc: "Dress slip satin dengan jatuhan kain yang halus dan elegan.", sizes: ["S", "M", "L"], badge: "New" },

        { id: "sleep-01", name: "Sleepwear Satin Nadine", cat: "Sleepwear", price: 88000, img: "https://picsum.photos/seed/sleep-nadine/600/740", desc: "Set piyama satin yang lembut di kulit, sempurna untuk tidur nyenyak.", sizes: ["S", "M", "L", "XL"], badge: "Best Seller" },
        { id: "sleep-02", name: "Sleepwear Rayon Lilac", cat: "Sleepwear", price: 76000, img: "https://picsum.photos/seed/sleep-lilac/600/740", desc: "Warna lilac lembut dengan bahan rayon yang sejuk sepanjang malam.", sizes: ["S", "M", "L"] },
        { id: "sleep-03", name: "Sleepwear Katun Stripe", cat: "Sleepwear", price: 72000, img: "https://picsum.photos/seed/sleep-stripe/600/740", desc: "Motif garis klasik dengan bahan katun yang menyerap keringat.", sizes: ["M", "L", "XL"] },
    ];

    const CATEGORY_META = {
        Bra: { count: "12 style" },
        Setelan: { count: "13 style" },
        Daster: { count: "9 style" },
        Dress: { count: "1 style" },
        Sleepwear: { count: "9 style" },
    };

    const CATEGORY_LABEL = {
        Bra: "Bra",
        Setelan: "Setelan Tanktop",
        Daster: "Daster",
        Dress: "Dress",
        Sleepwear: "Sleepwear",
    };

    const FREE_SHIP_THRESHOLD = 500000; // "Rp75.000 lagi" di label, threshold contoh
    const WHATSAPP_NUMBER = "6285283092499";
    const PAGE_SIZE = 8;

    /* ---------------------------------------------------
       2. STATE
       --------------------------------------------------- */
    const state = {
        filter: "Semua",
        visibleCount: PAGE_SIZE,
        cart: [],       // { productId, size, qty }
        wishlist: [],   // productId[]
        qv: { product: null, size: null, qty: 1 },
        checkout: { step: 1, pay: "wa" },
    };

    /* ---------------------------------------------------
       3. HELPERS
       --------------------------------------------------- */
    function formatRupiah(num) {
        return "Rp" + Math.round(num).toLocaleString("id-ID");
    }

    function findProduct(id) {
        return PRODUCTS.find(function (p) { return p.id === id; });
    }

    function showToast(msg) {
        const toast = document.getElementById("toast");
        const toastMsg = document.getElementById("toastMsg");
        if (!toast || !toastMsg) return;
        toastMsg.textContent = msg;
        toast.classList.add("show");
        clearTimeout(showToast._t);
        showToast._t = setTimeout(function () {
            toast.classList.remove("show");
        }, 2400);
    }

    function svgHeart(filled) {
        return '<svg viewBox="0 0 24 24" fill="' + (filled ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" aria-hidden="true">' +
            '<path d="M12.1 20.5s-7.6-4.6-9.9-9.1C.6 7.9 2.2 4.6 5.4 3.9c2-.5 3.9.3 5.1 1.9.2.3.7.3.9 0 1.2-1.6 3.1-2.4 5.1-1.9 3.2.7 4.8 4 3.2 7.5-2.3 4.5-9.9 9.1-9.9 9.1Z"></path></svg>';
    }

    /* ---------------------------------------------------
       4. RENDER: KATEGORI
       --------------------------------------------------- */
    function renderCategories() {
        const rail = document.getElementById("catRail");
        if (!rail) return;

        const cats = Object.keys(CATEGORY_META);
        rail.innerHTML = cats.map(function (cat, i) {
            const sample = PRODUCTS.find(function (p) { return p.cat === cat; });
            const img = sample ? sample.img : "https://picsum.photos/seed/" + cat + "/600/720";
            return (
                '<a href="#produk" class="cat-card reveal reveal-up" data-delay="' + (i * 80) + '" data-filter="' + cat + '" aria-label="Lihat kategori ' + cat + '">' +
                '<img src="' + img + '" alt="' + cat + ' Mivella Fashion" loading="lazy">' +
                '<div class="cat-info">' +
                '<span class="count">' + CATEGORY_META[cat].count + '</span>' +
                '<h3>' + CATEGORY_LABEL[cat] + '</h3>' +
                '</div>' +
                '</a>'
            );
        }).join("");

        rail.querySelectorAll("[data-filter]").forEach(function (el) {
            el.addEventListener("click", function (e) {
                e.preventDefault();
                setFilter(el.dataset.filter);
                document.getElementById("produk").scrollIntoView({ behavior: "smooth" });
            });
            observeReveal(el);
        });
    }

    /* ---------------------------------------------------
       5. RENDER: PRODUK
       --------------------------------------------------- */
    function getFilteredProducts() {
        if (state.filter === "Semua") return PRODUCTS;
        return PRODUCTS.filter(function (p) { return p.cat === state.filter; });
    }

    function productCardHTML(p) {
        const isWished = state.wishlist.indexOf(p.id) !== -1;
        return (
            '<div class="product-card" data-id="' + p.id + '">' +
            '<div class="product-media">' +
            (p.badge ? '<span class="badge ' + (p.badge === "New" ? "new" : "") + '">' + p.badge + '</span>' : "") +
            '<button class="wish-btn' + (isWished ? " active" : "") + '" type="button" data-action="wish" data-id="' + p.id + '" aria-label="Tambah ke wishlist">' + svgHeart(isWished) + '</button>' +
            '<img src="' + p.img + '" alt="' + p.name + '" loading="lazy">' +
            '<button class="quick-view-btn" type="button" data-action="quickview" data-id="' + p.id + '">Quick View</button>' +
            '</div>' +
            '<div class="product-info">' +
            '<span class="cat">' + CATEGORY_LABEL[p.cat] + '</span>' +
            '<h3>' + p.name + '</h3>' +
            '<div class="product-bottom">' +
            '<span class="price">' + formatRupiah(p.price) + '</span>' +
            '<button class="add-bag-btn" type="button" data-action="quickadd" data-id="' + p.id + '" aria-label="Tambah ke keranjang">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M6 8h12l-1 12H7L6 8Z"></path><path d="M9 8V6a3 3 0 0 1 6 0v2"></path></svg>' +
            '</button>' +
            '</div>' +
            '</div>' +
            '</div>'
        );
    }

    function renderProducts() {
        const grid = document.getElementById("productGrid");
        const loadMoreBtn = document.getElementById("loadMoreBtn");
        if (!grid) return;

        const filtered = getFilteredProducts();
        const visible = filtered.slice(0, state.visibleCount);

        if (visible.length === 0) {
            grid.innerHTML = '<p style="grid-column:1/-1; text-align:center; color:rgba(48,40,43,.55); padding:40px 0;">Belum ada produk di kategori ini.</p>';
        } else {
            grid.innerHTML = visible.map(productCardHTML).join("");
        }

        if (loadMoreBtn) {
            loadMoreBtn.style.display = state.visibleCount >= filtered.length ? "none" : "inline-flex";
        }

        grid.querySelectorAll('[data-action="wish"]').forEach(function (btn) {
            btn.addEventListener("click", function () { toggleWishlist(btn.dataset.id); });
        });
        grid.querySelectorAll('[data-action="quickview"]').forEach(function (btn) {
            btn.addEventListener("click", function () { openQuickView(btn.dataset.id); });
        });
        grid.querySelectorAll('[data-action="quickadd"]').forEach(function (btn) {
            btn.addEventListener("click", function () { quickAddToCart(btn.dataset.id); });
        });
        grid.querySelectorAll(".product-media img").forEach(function (img) {
            img.addEventListener("click", function () {
                const card = img.closest(".product-card");
                if (card) openQuickView(card.dataset.id);
            });
        });
    }

    function setFilter(cat) {
        state.filter = cat;
        state.visibleCount = PAGE_SIZE;
        document.querySelectorAll("#filterPills .pill").forEach(function (pill) {
            pill.classList.toggle("active", pill.dataset.filter === cat);
        });
        renderProducts();
    }

    /* ---------------------------------------------------
       6. RENDER: INSTAGRAM STRIP (pakai foto produk yang ada)
       --------------------------------------------------- */
    function renderInstaGrid() {
        const grid = document.getElementById("instaGrid");
        if (!grid) return;
        const shots = PRODUCTS.slice(0, 6);
        grid.innerHTML = shots.map(function (p, i) {
            return (
                '<a href="https://instagram.com/mivellafashion" target="_blank" rel="noopener noreferrer" class="reveal reveal-up" data-delay="' + (i * 80) + '" aria-label="Lihat Instagram Mivella Fashion">' +
                '<img src="' + p.img + '" alt="Mivella Fashion look ' + (i + 1) + '" loading="lazy">' +
                '</a>'
            );
        }).join("");
        grid.querySelectorAll(".reveal").forEach(observeReveal);
    }

    /* ---------------------------------------------------
       7. WISHLIST
       --------------------------------------------------- */
    function toggleWishlist(id) {
        const idx = state.wishlist.indexOf(id);
        if (idx === -1) {
            state.wishlist.push(id);
            showToast("Ditambahkan ke wishlist");
        } else {
            state.wishlist.splice(idx, 1);
            showToast("Dihapus dari wishlist");
        }
        updateWishlistCount();
        renderProducts();
        renderWishlistPanel();
    }

    function updateWishlistCount() {
        const el = document.getElementById("wishlistCount");
        if (el) el.textContent = String(state.wishlist.length);
        const tab = document.getElementById("tabWishCount");
        if (tab) tab.textContent = String(state.wishlist.length);
    }

    function renderWishlistPanel() {
        const wrap = document.getElementById("wishLines");
        if (!wrap) return;

        if (state.wishlist.length === 0) {
            wrap.innerHTML = emptyStateHTML("Wishlist kamu masih kosong", "heart");
            return;
        }

        wrap.innerHTML = state.wishlist.map(function (id) {
            const p = findProduct(id);
            if (!p) return "";
            return (
                '<div class="cart-line" data-id="' + p.id + '">' +
                '<img src="' + p.img + '" alt="' + p.name + '">' +
                '<div class="cart-line-info">' +
                '<span class="name">' + p.name + '</span>' +
                '<span class="meta">' + CATEGORY_LABEL[p.cat] + '</span>' +
                '<div class="row-bottom">' +
                '<span class="line-price">' + formatRupiah(p.price) + '</span>' +
                '<button class="btn btn-sm btn-dark" type="button" data-action="wish-to-cart" data-id="' + p.id + '">+ Keranjang</button>' +
                '</div>' +
                '</div>' +
                '<button class="line-remove" type="button" data-action="wish-remove" data-id="' + p.id + '" aria-label="Hapus dari wishlist">' +
                '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="5" y1="5" x2="19" y2="19"></line><line x1="19" y1="5" x2="5" y2="19"></line></svg>' +
                '</button>' +
                '</div>'
            );
        }).join("");

        wrap.querySelectorAll('[data-action="wish-remove"]').forEach(function (btn) {
            btn.addEventListener("click", function () { toggleWishlist(btn.dataset.id); });
        });
        wrap.querySelectorAll('[data-action="wish-to-cart"]').forEach(function (btn) {
            btn.addEventListener("click", function () { quickAddToCart(btn.dataset.id); });
        });
    }

    function emptyStateHTML(msg, icon) {
        const path = icon === "heart"
            ? '<path d="M12.1 20.5s-7.6-4.6-9.9-9.1C.6 7.9 2.2 4.6 5.4 3.9c2-.5 3.9.3 5.1 1.9.2.3.7.3.9 0 1.2-1.6 3.1-2.4 5.1-1.9 3.2.7 4.8 4 3.2 7.5-2.3 4.5-9.9 9.1-9.9 9.1Z"></path>'
            : '<path d="M6 8h12l-1 12H7L6 8Z"></path><path d="M9 8V6a3 3 0 0 1 6 0v2"></path>';
        return (
            '<div class="empty-state">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">' + path + '</svg>' +
            '<p>' + msg + '</p>' +
            '</div>'
        );
    }

    /* ---------------------------------------------------
       8. CART
       --------------------------------------------------- */
    function addToCart(productId, size, qty) {
        qty = qty || 1;
        const existing = state.cart.find(function (l) { return l.productId === productId && l.size === size; });
        if (existing) {
            existing.qty += qty;
        } else {
            state.cart.push({ productId: productId, size: size, qty: qty });
        }
        updateCartCount();
        renderCartLines();
        showToast("Berhasil masuk keranjang");
    }

    function quickAddToCart(id) {
        const p = findProduct(id);
        if (!p) return;
        const size = p.sizes[0];
        addToCart(id, size, 1);
    }

    function updateCartLineQty(productId, size, delta) {
        const line = state.cart.find(function (l) { return l.productId === productId && l.size === size; });
        if (!line) return;
        line.qty += delta;
        if (line.qty <= 0) {
            state.cart = state.cart.filter(function (l) { return l !== line; });
        }
        updateCartCount();
        renderCartLines();
    }

    function removeCartLine(productId, size) {
        state.cart = state.cart.filter(function (l) { return !(l.productId === productId && l.size === size); });
        updateCartCount();
        renderCartLines();
    }

    function cartSubtotal() {
        return state.cart.reduce(function (sum, l) {
            const p = findProduct(l.productId);
            return sum + (p ? p.price * l.qty : 0);
        }, 0);
    }

    function cartItemCount() {
        return state.cart.reduce(function (sum, l) { return sum + l.qty; }, 0);
    }

    function updateCartCount() {
        const el = document.getElementById("cartCount");
        if (el) el.textContent = String(cartItemCount());
        const tab = document.getElementById("tabBagCount");
        if (tab) tab.textContent = String(cartItemCount());
    }

    function renderCartLines() {
        const wrap = document.getElementById("cartLines");
        const foot = document.getElementById("cartFoot");
        if (!wrap) return;

        if (state.cart.length === 0) {
            wrap.innerHTML = emptyStateHTML("Keranjang kamu masih kosong", "bag");
            if (foot) foot.style.opacity = ".5";
        } else {
            if (foot) foot.style.opacity = "1";
            wrap.innerHTML = state.cart.map(function (line) {
                const p = findProduct(line.productId);
                if (!p) return "";
                return (
                    '<div class="cart-line" data-id="' + p.id + '" data-size="' + line.size + '">' +
                    '<img src="' + p.img + '" alt="' + p.name + '">' +
                    '<div class="cart-line-info">' +
                    '<span class="name">' + p.name + '</span>' +
                    '<span class="meta">Ukuran: ' + line.size + '</span>' +
                    '<div class="row-bottom">' +
                    '<div class="qty-stepper">' +
                    '<button type="button" data-action="cart-minus" data-id="' + p.id + '" data-size="' + line.size + '" aria-label="Kurangi jumlah">−</button>' +
                    '<span>' + line.qty + '</span>' +
                    '<button type="button" data-action="cart-plus" data-id="' + p.id + '" data-size="' + line.size + '" aria-label="Tambah jumlah">+</button>' +
                    '</div>' +
                    '<span class="line-price">' + formatRupiah(p.price * line.qty) + '</span>' +
                    '</div>' +
                    '</div>' +
                    '<button class="line-remove" type="button" data-action="cart-remove" data-id="' + p.id + '" data-size="' + line.size + '" aria-label="Hapus dari keranjang">' +
                    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="5" y1="5" x2="19" y2="19"></line><line x1="19" y1="5" x2="5" y2="19"></line></svg>' +
                    '</button>' +
                    '</div>'
                );
            }).join("");
        }

        wrap.querySelectorAll('[data-action="cart-minus"]').forEach(function (btn) {
            btn.addEventListener("click", function () { updateCartLineQty(btn.dataset.id, btn.dataset.size, -1); });
        });
        wrap.querySelectorAll('[data-action="cart-plus"]').forEach(function (btn) {
            btn.addEventListener("click", function () { updateCartLineQty(btn.dataset.id, btn.dataset.size, 1); });
        });
        wrap.querySelectorAll('[data-action="cart-remove"]').forEach(function (btn) {
            btn.addEventListener("click", function () { removeCartLine(btn.dataset.id, btn.dataset.size); });
        });

        const subtotal = cartSubtotal();
        const subtotalEl = document.getElementById("cartSubtotal");
        if (subtotalEl) subtotalEl.textContent = formatRupiah(subtotal);

        const shipFill = document.getElementById("shipFill");
        const shipLabel = document.getElementById("shipLabel");
        if (shipFill && shipLabel) {
            const pct = Math.min(100, (subtotal / FREE_SHIP_THRESHOLD) * 100);
            shipFill.style.width = pct + "%";
            if (subtotal >= FREE_SHIP_THRESHOLD) {
                shipLabel.innerHTML = "Yay! Kamu dapat <strong>gratis ongkir</strong>";
            } else {
                const remaining = FREE_SHIP_THRESHOLD - subtotal;
                shipLabel.innerHTML = "Belanja <strong>" + formatRupiah(remaining) + "</strong> lagi untuk gratis ongkir";
            }
        }

        const goCheckout = document.getElementById("goCheckout");
        if (goCheckout) goCheckout.disabled = state.cart.length === 0;
    }

    /* ---------------------------------------------------
       9. QUICK VIEW MODAL
       --------------------------------------------------- */
    function openQuickView(id) {
        const p = findProduct(id);
        if (!p) return;
        state.qv = { product: p, size: p.sizes[0], qty: 1 };
        renderQuickView();
        document.getElementById("qvOverlay").classList.add("open");
        document.getElementById("qvOverlay").setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    function closeQuickView() {
        document.getElementById("qvOverlay").classList.remove("open");
        document.getElementById("qvOverlay").setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }

    function renderQuickView() {
        const p = state.qv.product;
        if (!p) return;

        document.getElementById("qvImage").src = p.img;
        document.getElementById("qvImage").alt = p.name;
        document.getElementById("qvCat").textContent = CATEGORY_LABEL[p.cat];
        document.getElementById("qvName").textContent = p.name;
        document.getElementById("qvPrice").textContent = formatRupiah(p.price);
        document.getElementById("qvDesc").textContent = p.desc;
        document.getElementById("qvQty").textContent = String(state.qv.qty);

        const sizesWrap = document.getElementById("qvSizes");
        sizesWrap.innerHTML = p.sizes.map(function (s) {
            return '<button type="button" class="size-opt' + (s === state.qv.size ? " active" : "") + '" data-size="' + s + '">' + s + '</button>';
        }).join("");
        sizesWrap.querySelectorAll(".size-opt").forEach(function (btn) {
            btn.addEventListener("click", function () {
                state.qv.size = btn.dataset.size;
                sizesWrap.querySelectorAll(".size-opt").forEach(function (b) { b.classList.toggle("active", b === btn); });
            });
        });
    }

    /* ---------------------------------------------------
       10. DRAWER OPEN/CLOSE + TABS
       --------------------------------------------------- */
    function openDrawer() {
        document.getElementById("cartDrawer").classList.add("open");
        document.getElementById("overlay").classList.add("open");
        document.body.style.overflow = "hidden";
    }
    function closeDrawer() {
        document.getElementById("cartDrawer").classList.remove("open");
        document.getElementById("overlay").classList.remove("open");
        document.body.style.overflow = "";
        // reset ke tampilan cart saat ditutup
        showCartView();
    }

    function showCartView() {
        document.getElementById("cartView").style.display = "";
        document.getElementById("checkoutView").style.display = "none";
    }
    function showCheckoutView() {
        document.getElementById("cartView").style.display = "none";
        document.getElementById("checkoutView").style.display = "";
        goToStep(1);
    }

    function switchDrawerTab(tab) {
        document.querySelectorAll(".drawer-tab").forEach(function (btn) {
            btn.classList.toggle("active", btn.dataset.tab === tab);
        });
        document.getElementById("bagPanel").style.display = tab === "bag" ? "" : "none";
        document.getElementById("wishPanel").style.display = tab === "wishlist" ? "" : "none";
    }

    /* ---------------------------------------------------
       11. CHECKOUT FLOW
       --------------------------------------------------- */
    function goToStep(n) {
        state.checkout.step = n;

        document.querySelectorAll(".step-indicator .step").forEach(function (el) {
            const stepNum = Number(el.dataset.step);
            el.classList.toggle("active", stepNum === n);
            el.classList.toggle("done", stepNum < n);
        });

        document.getElementById("stepDetails").style.display = n === 1 ? "" : "none";
        document.getElementById("stepReview").style.display = n === 2 ? "" : "none";
        document.getElementById("stepDone").style.display = n === 3 ? "" : "none";

        const footNav = document.getElementById("checkoutFootNav");
        const backBtn = document.getElementById("checkoutBackBtn");
        const nextBtn = document.getElementById("checkoutNextBtn");

        if (n === 3) {
            footNav.style.display = "none";
        } else {
            footNav.style.display = "";
            backBtn.style.display = n === 1 ? "none" : "";
            nextBtn.textContent = n === 1 ? "Review Pesanan" : "Buat Pesanan";
        }

        if (n === 2) renderReview();
    }

    function validateDetails() {
        const name = document.getElementById("fName").value.trim();
        const phone = document.getElementById("fPhone").value.trim();
        const address = document.getElementById("fAddress").value.trim();

        let valid = true;
        [["fName", name], ["fPhone", phone], ["fAddress", address]].forEach(function (pair) {
            const field = document.getElementById(pair[0]).closest(".form-field");
            if (!pair[1]) {
                field.classList.add("field-error");
                valid = false;
            } else {
                field.classList.remove("field-error");
            }
        });
        return valid;
    }

    function renderReview() {
        const name = document.getElementById("fName").value.trim();
        const phone = document.getElementById("fPhone").value.trim();
        const address = document.getElementById("fAddress").value.trim();
        const note = document.getElementById("fNote").value.trim();

        document.getElementById("reviewCustomer").innerHTML =
            name + "<br>" + phone + "<br>" + address + (note ? "<br><em>Catatan: " + note + "</em>" : "");

        const itemsWrap = document.getElementById("reviewItems");
        itemsWrap.innerHTML = state.cart.map(function (line) {
            const p = findProduct(line.productId);
            if (!p) return "";
            return (
                '<div class="review-item-row"><span>' + p.name + ' (' + line.size + ') x' + line.qty + '</span><span>' + formatRupiah(p.price * line.qty) + '</span></div>'
            );
        }).join("");

        document.getElementById("reviewTotal").textContent = formatRupiah(cartSubtotal());
        document.getElementById("reviewPay").textContent = state.checkout.pay === "wa" ? "Chat WhatsApp" : "Transfer Bank BCA a.n. Mivella Fashion";
    }

    function generateOrderId() {
        const now = new Date();
        const y = now.getFullYear().toString().slice(-2);
        const m = String(now.getMonth() + 1).padStart(2, "0");
        const d = String(now.getDate()).padStart(2, "0");
        const rand = Math.floor(1000 + Math.random() * 9000);
        return "MV" + y + m + d + "-" + rand;
    }

    function buildWhatsAppMessage(orderId) {
        const name = document.getElementById("fName").value.trim();
        const phone = document.getElementById("fPhone").value.trim();
        const address = document.getElementById("fAddress").value.trim();
        const note = document.getElementById("fNote").value.trim();

        let lines = [];
        lines.push("Halo Mivella Fashion, saya ingin memesan:");
        lines.push("");
        lines.push("No. Pesanan: " + orderId);
        state.cart.forEach(function (line) {
            const p = findProduct(line.productId);
            if (!p) return;
            lines.push("- " + p.name + " (" + line.size + ") x" + line.qty + " = " + formatRupiah(p.price * line.qty));
        });
        lines.push("");
        lines.push("Total: " + formatRupiah(cartSubtotal()));
        lines.push("");
        lines.push("Nama: " + name);
        lines.push("No. WA: " + phone);
        lines.push("Alamat: " + address);
        if (note) lines.push("Catatan: " + note);
        lines.push("Metode Pembayaran: " + (state.checkout.pay === "wa" ? "Chat WhatsApp" : "Transfer Bank"));

        return encodeURIComponent(lines.join("\n"));
    }

    function completeOrder() {
        const orderId = generateOrderId();
        document.getElementById("orderId").textContent = "#" + orderId;
        document.getElementById("orderTotal").textContent = formatRupiah(cartSubtotal());

        document.getElementById("bankBox").style.display = state.checkout.pay === "bank" ? "" : "none";

        const waBtn = document.getElementById("waFinishBtn");
        waBtn.onclick = function () {
            const msg = buildWhatsAppMessage(orderId);
            window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + msg, "_blank");
        };

        goToStep(3);

        // Reset cart setelah order dibuat
        state.cart = [];
        updateCartCount();
        renderCartLines();
    }

    /* ---------------------------------------------------
       12. SCROLL REVEAL OBSERVER (untuk elemen yang dirender via JS)
       --------------------------------------------------- */
    let revealObserver = null;
    function observeReveal(el) {
        if (!revealObserver) {
            if (!("IntersectionObserver" in window)) {
                el.classList.add("visible");
                return;
            }
            revealObserver = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        const delay = entry.target.dataset.delay || 0;
                        setTimeout(function () { entry.target.classList.add("visible"); }, Number(delay));
                    } else {
                        entry.target.classList.remove("visible");
                    }
                });
            }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
        }
        revealObserver.observe(el);
    }

    /* ---------------------------------------------------
       13. EVENT BINDING (elemen statis di HTML)
       --------------------------------------------------- */
    function bindStaticEvents() {
        // Header icons
        document.getElementById("cartBtn").addEventListener("click", function () { openDrawer(); showCartView(); switchDrawerTab("bag"); });
        document.getElementById("wishlistBtn").addEventListener("click", function () { openDrawer(); showCartView(); switchDrawerTab("wishlist"); });
        document.getElementById("closeCart").addEventListener("click", closeDrawer);
        document.getElementById("closeCheckout").addEventListener("click", closeDrawer);
        document.getElementById("overlay").addEventListener("click", function () {
            closeDrawer();
            closeQuickView();
        });

        // Burger menu
        const burger = document.getElementById("burgerBtn");
        const nav = document.getElementById("mainNav");
        burger.addEventListener("click", function () {
            const isOpen = nav.classList.toggle("open");
            burger.setAttribute("aria-expanded", String(isOpen));
        });
        nav.querySelectorAll("a").forEach(function (a) {
            a.addEventListener("click", function () {
                nav.classList.remove("open");
                burger.setAttribute("aria-expanded", "false");
            });
        });

        // Search toggle — buat search bar sederhana di bawah header
        const searchBtn = document.getElementById("searchBtn");
        searchBtn.addEventListener("click", function () {
            let bar = document.getElementById("siteSearchBar");
            if (!bar) {
                bar = document.createElement("div");
                bar.className = "search-bar";
                bar.id = "siteSearchBar";
                bar.innerHTML = '<div class="container"><input type="text" id="siteSearchInput" placeholder="Cari produk, misal: daster, bra, dress..."></div>';
                document.querySelector(".site-header").appendChild(bar);
                document.getElementById("siteSearchInput").addEventListener("input", function (e) {
                    doSearch(e.target.value);
                });
            }
            bar.classList.toggle("open");
            if (bar.classList.contains("open")) {
                setTimeout(function () { document.getElementById("siteSearchInput").focus(); }, 100);
            }
        });

        // Drawer tabs
        document.querySelectorAll(".drawer-tab").forEach(function (btn) {
            btn.addEventListener("click", function () { switchDrawerTab(btn.dataset.tab); });
        });

        // Checkout entry
        document.getElementById("goCheckout").addEventListener("click", function () {
            if (state.cart.length === 0) return;
            showCheckoutView();
        });

        // Checkout nav
        document.getElementById("checkoutBackBtn").addEventListener("click", function () {
            if (state.checkout.step > 1) goToStep(state.checkout.step - 1);
        });
        document.getElementById("checkoutNextBtn").addEventListener("click", function () {
            if (state.checkout.step === 1) {
                if (!validateDetails()) {
                    showToast("Lengkapi data pemesan dulu ya");
                    return;
                }
                goToStep(2);
            } else if (state.checkout.step === 2) {
                completeOrder();
            }
        });

        // Payment method select
        document.querySelectorAll(".pay-opt").forEach(function (btn) {
            btn.addEventListener("click", function () {
                document.querySelectorAll(".pay-opt").forEach(function (b) { b.classList.remove("active"); });
                btn.classList.add("active");
                state.checkout.pay = btn.dataset.pay;
            });
        });

        document.getElementById("backToShopBtn").addEventListener("click", closeDrawer);

        // Quick View modal
        document.getElementById("qvClose").addEventListener("click", closeQuickView);
        document.getElementById("qvMinus").addEventListener("click", function () {
            state.qv.qty = Math.max(1, state.qv.qty - 1);
            document.getElementById("qvQty").textContent = String(state.qv.qty);
        });
        document.getElementById("qvPlus").addEventListener("click", function () {
            state.qv.qty += 1;
            document.getElementById("qvQty").textContent = String(state.qv.qty);
        });
        document.getElementById("qvAddBtn").addEventListener("click", function () {
            if (!state.qv.product) return;
            addToCart(state.qv.product.id, state.qv.size, state.qv.qty);
            closeQuickView();
            openDrawer();
            showCartView();
            switchDrawerTab("bag");
        });

        // Filter pills
        document.querySelectorAll("#filterPills .pill").forEach(function (btn) {
            btn.addEventListener("click", function () { setFilter(btn.dataset.filter); });
        });

        // Footer category links
        document.querySelectorAll('.footer-col a[data-filter]').forEach(function (a) {
            a.addEventListener("click", function (e) {
                e.preventDefault();
                setFilter(a.dataset.filter);
                document.getElementById("produk").scrollIntoView({ behavior: "smooth" });
            });
        });

        // Load more
        document.getElementById("loadMoreBtn").addEventListener("click", function () {
            state.visibleCount += PAGE_SIZE;
            renderProducts();
        });

        // Escape key closes overlays
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape") {
                closeDrawer();
                closeQuickView();
            }
        });
    }

    function doSearch(query) {
        const q = query.trim().toLowerCase();
        const grid = document.getElementById("productGrid");
        if (!grid) return;

        let results;
        if (!q) {
            results = getFilteredProducts().slice(0, state.visibleCount);
        } else {
            results = PRODUCTS.filter(function (p) {
                return p.name.toLowerCase().indexOf(q) !== -1 || p.cat.toLowerCase().indexOf(q) !== -1;
            });
        }

        if (results.length === 0) {
            grid.innerHTML = '<p style="grid-column:1/-1; text-align:center; color:rgba(48,40,43,.55); padding:40px 0;">Produk tidak ditemukan.</p>';
            return;
        }

        grid.innerHTML = results.map(productCardHTML).join("");
        grid.querySelectorAll('[data-action="wish"]').forEach(function (btn) {
            btn.addEventListener("click", function () { toggleWishlist(btn.dataset.id); });
        });
        grid.querySelectorAll('[data-action="quickview"]').forEach(function (btn) {
            btn.addEventListener("click", function () { openQuickView(btn.dataset.id); });
        });
        grid.querySelectorAll('[data-action="quickadd"]').forEach(function (btn) {
            btn.addEventListener("click", function () { quickAddToCart(btn.dataset.id); });
        });
    }

    /* ---------------------------------------------------
       14. INIT
       --------------------------------------------------- */
    function init() {
        renderCategories();
        renderProducts();
        renderInstaGrid();
        renderCartLines();
        renderWishlistPanel();
        updateCartCount();
        updateWishlistCount();
        bindStaticEvents();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();