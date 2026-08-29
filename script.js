// ============================================================
// ROYAL COLLECTION - FINAL SCRIPT
// ============================================================


// ============================================================
// CART STORAGE
// ============================================================

function getCart() {

    return JSON.parse(localStorage.getItem("cart")) || [];

}


function saveCart(cart) {

    localStorage.setItem("cart", JSON.stringify(cart));

}


// ============================================================
// PRICE CONVERTER
// ============================================================

function getPriceNumber(price) {

    if (typeof price === "number") {
        return price;
    }

    return Number(
        String(price)
            .replace("₹", "")
            .replace(/,/g, "")
            .trim()
    ) || 0;

}


// ============================================================
// CART COUNT
// ============================================================

function updateCartCount() {

    const cart = getCart();

    const cartCount =
        document.getElementById("cartcount");

    if (!cartCount) {
        return;
    }


    let totalQuantity = 0;

    cart.forEach(function (product) {

        totalQuantity +=
            Number(product.quantity) || 1;

    });


    cartCount.textContent = totalQuantity;

}


// ============================================================
// ADD PRODUCT TO CART
// ============================================================

function addProductToCart(product, quantity) {

    let cart = getCart();

    quantity = Number(quantity) || 1;


    const existingProduct =
        cart.find(function (item) {

            return item.name === product.name;

        });


    if (existingProduct) {

        existingProduct.quantity =
            (Number(existingProduct.quantity) || 1)
            + quantity;

    } else {

        cart.push({

            name: product.name,

            price: product.price,

            image: product.image,

            description: product.description || "",

            quantity: quantity

        });

    }


    saveCart(cart);

    updateCartCount();

}


// ============================================================
// PRODUCT DESCRIPTIONS
// ============================================================

const productDescriptions = {

    // NEW ARRIVALS

    "Pakistani Cotton Lawn Suit Set":
        "A graceful Pakistani-inspired cotton lawn suit set designed for comfortable everyday wear. Lightweight fabric, elegant styling and a beautiful traditional look make it perfect for casual outings and festive occasions.",

    "Elegant Faux Leather Sling Bag":
        "A stylish faux leather sling bag with a compact yet practical design. Perfect for carrying your daily essentials while adding a polished touch to your outfit.",

    "Dual-Brand Luxury Bag Set":
        "A stylish luxury-inspired bag set designed for fashionable everyday use. Its versatile design makes it easy to pair with both casual and dressed-up outfits.",

    "Black & Red Contrast Salwar Suit":
        "A striking black and red salwar suit featuring a classic ethnic silhouette with a bold colour combination. A beautiful choice for festive gatherings and special occasions.",


    // BAGS

    "Compact Daily Bag":
        "A compact everyday bag designed to keep your essentials organised without feeling bulky. Lightweight, practical and easy to carry for shopping, college or casual outings.",

    "Everyday Canvas Tote Bag":
        "A spacious canvas tote made for everyday use. Its comfortable design makes it perfect for carrying books, accessories, shopping essentials and other daily items.",

    "Minimalist Bag":
        "A clean and minimalist everyday bag with a simple, versatile appearance. Easy to style with different outfits and suitable for casual daily use.",

    "Multi-Pocket Travel Pouch":
        "A practical multi-pocket travel pouch designed to keep small essentials organised. Great for travel, makeup, accessories, chargers and other everyday necessities.",


    // KIDS

    "Haldi Special Floral Kids Kurti":
        "A cheerful floral kids kurti designed especially for festive occasions such as Haldi functions. Comfortable, colourful and easy to wear for little ones.",

    "Kids Powder Blue Salwar Suit":
        "A pretty powder blue salwar suit for kids with a comfortable festive look. Perfect for family celebrations, functions and traditional occasions.",


    // WOMEN

    "Everyday Cord-Set":
        "A comfortable everyday co-ord set designed for effortless styling. Its coordinated look gives a polished appearance while keeping your outfit relaxed and easy to wear.",

    "Summer Cotton Floral Dress":
        "A lightweight floral cotton dress designed for warm-weather comfort. Soft, breathable styling makes it a lovely choice for casual summer outings.",

    "Kurta and Palazzo Co-ord Set":
        "A stylish kurta and palazzo co-ord set combining traditional charm with a modern silhouette. Comfortable enough for everyday wear and suitable for casual occasions.",

    "Boutique Boxy Oversized Tee":
        "A relaxed boxy oversized tee designed for a comfortable and contemporary look. Easy to pair with jeans, trousers or casual bottoms.",

    "Modest Hijab Fashion 2-Piece Tunic Set":
        "A modest two-piece tunic set designed for comfortable everyday styling. The relaxed silhouette makes it easy to wear while maintaining an elegant and graceful look.",

    "Elegant Navy Blue Pure Satin Rayon Heavy Ivory Embroidered Kaftan & Pant Set":
        "An elegant navy blue satin rayon kaftan and pant set featuring heavy ivory embroidery. A graceful statement outfit for festive gatherings and special occasions.",


    // TRADITIONAL

    "Luxe Floral Border Palazzo Set":
        "A graceful palazzo set featuring a beautiful floral border detail. Designed for an elegant ethnic look while keeping the outfit comfortable and easy to wear.",

    "Embroidered Silk Gown":
        "An elegant silk-style gown featuring embroidered detailing for a sophisticated festive appearance. Perfect for celebrations and special occasions.",

    "Tan Brown Festive Indo-Western Set":
        "A stylish tan brown Indo-Western set that blends traditional details with contemporary fashion. A versatile choice for festive gatherings and celebrations.",

    "Floral Border Flared Palazzo Suit":
        "A beautifully flared palazzo suit featuring floral border detailing. Designed to create a graceful ethnic silhouette for festive and traditional occasions.",

    "Georgette Multi-Color Anarkali Suit Set":
        "A vibrant multi-colour georgette Anarkali suit set with an elegant flowing silhouette. Perfect for festive events, family functions and celebrations.",


    // ACCESSORIES

    "Layered Butterfly Charm Bracelet":
        "A delicate layered bracelet featuring a charming butterfly-inspired design. A beautiful everyday accessory that adds a subtle stylish touch to your outfit.",

    "Gold Crystal Floral Bracelet":
        "An elegant gold-tone bracelet featuring delicate floral and crystal-inspired detailing. Perfect for adding a refined touch to both casual and festive looks.",

    "Chic Pearl Chain Ring Bracelet":
        "A chic pearl-inspired chain bracelet with a fashionable ring connection. Designed as a statement accessory for stylish everyday and occasion wear.",

    "Dainty Linked Finger Bracelet":
        "A delicate linked finger bracelet designed for a unique and feminine look. Lightweight styling makes it easy to pair with different outfits.",

    "Minimalist Gold Hand Harness":
        "A minimalist gold-tone hand harness designed to create an elegant statement. Its sleek design makes it a fashionable accessory for special occasions.",

    "Geometric Ring Hand Harness":
        "A modern geometric hand harness combining ring and bracelet styling. A bold yet elegant accessory for creating a fashionable statement look.",

    "Chic Star Charm Ring Bracelet":
        "A charming star-detail ring bracelet designed to add a playful and stylish accent to your outfit. Perfect for everyday fashion and casual occasions."

};


// ============================================================
// GET DESCRIPTION
// ============================================================

function getProductDescription(name) {

    if (productDescriptions[name]) {

        return productDescriptions[name];

    }


    return "A beautiful Royal Collection product designed with style, comfort and everyday elegance in mind.";

}


// ============================================================
// PRODUCT SELECTORS
// ============================================================

const productPageSettings = [

    {
        button: ".quick-add-btn",
        card: ".product-card",
        image: ".img-front",
        title: ".product-title",
        price: ".price"
    },

    {
        button: ".bags-cart-btn",
        card: ".bags-product-card",
        image: ".bags-img-front",
        title: ".bags-title",
        price: ".bags-cost"
    },

    {
        button: ".kids-cart-btn",
        card: ".kids-product-card",
        image: ".kids-img-front",
        title: ".kids-title",
        price: ".kids-cost"
    },

    {
        button: ".women-cart-btn",
        card: ".women-product-card",
        image: ".women-img-front",
        title: ".women-title",
        price: ".women-cost"
    },

    {
        button: ".traditional-cart-btn",
        card: ".traditional-product-card",
        image: ".traditional-img-front",
        title: ".traditional-title",
        price: ".traditional-cost"
    },

    {
        button: ".accessories-cart-btn",
        card: ".accessories-product-card",
        image: ".accessories-img-front",
        title: ".accessories-title",
        price: ".accessories-cost"
    }

];


// ============================================================
// CREATE UNIVERSAL PRODUCT POPUP
// ============================================================

function createProductPopup() {

    let popup =
        document.getElementById("universalProductPopup");


    if (popup) {
        return popup;
    }


    popup = document.createElement("div");

    popup.id = "universalProductPopup";

    popup.innerHTML = `

        <div class="universal-popup-box">

            <button
                class="universal-popup-close"
                id="universalPopupClose">
                ×
            </button>

            <div class="universal-popup-image">

                <img
                    id="universalPopupImage"
                    src=""
                    alt="Product">

            </div>


            <div class="universal-popup-details">

                <span class="universal-popup-label">
                    ROYAL COLLECTION
                </span>

                <h2 id="universalPopupTitle"></h2>

                <h3 id="universalPopupPrice"></h3>

                <p id="universalPopupDescription"></p>


                <div class="quantity-area">

                    <span>Quantity</span>

                    <div class="quantity-control">

                        <button id="universalQtyMinus">
                            −
                        </button>

                        <span id="universalQty">
                            1
                        </span>

                        <button id="universalQtyPlus">
                            +
                        </button>

                    </div>

                </div>


                <button
                    id="universalAddCart"
                    class="universal-add-cart">

                    ADD TO CART

                </button>

            </div>

        </div>

    `;


    document.body.appendChild(popup);

    return popup;

}


// ============================================================
// POPUP STYLING
// ============================================================

function addPopupStyles() {

    if (document.getElementById("universalPopupStyles")) {
        return;
    }


    const style =
        document.createElement("style");

    style.id = "universalPopupStyles";


    style.textContent = `

        #universalProductPopup {

            position: fixed;

            inset: 0;

            width: 100%;
            height: 100%;

            background: rgba(0,0,0,0.65);

            display: flex;

            align-items: center;
            justify-content: center;

            padding: 20px;

            opacity: 0;
            visibility: hidden;

            pointer-events: none;

            transition: 0.3s ease;

            z-index: 10000;

        }


        #universalProductPopup.show {

            opacity: 1;

            visibility: visible;

            pointer-events: auto;

        }


        .universal-popup-box {

            position: relative;

            width: min(900px, 95%);

            max-height: 90vh;

            background: #fff;

            border-radius: 18px;

            overflow: hidden;

            display: grid;

            grid-template-columns: 45% 55%;

            box-shadow:
                0 25px 70px rgba(0,0,0,0.35);

            transform: scale(0.85);

            transition: 0.3s ease;

        }


        #universalProductPopup.show
        .universal-popup-box {

            transform: scale(1);

        }


        .universal-popup-image {

            min-height: 500px;

            background: #f5f5f5;

        }


        .universal-popup-image img {

            width: 100%;

            height: 100%;

            min-height: 500px;

            object-fit: cover;

            display: block;

        }


        .universal-popup-details {

            padding: 45px;

            display: flex;

            flex-direction: column;

            justify-content: center;

        }


        .universal-popup-label {

            font-size: 12px;

            letter-spacing: 2px;

            font-weight: 600;

            color: #999;

            margin-bottom: 12px;

        }


        #universalPopupTitle {

            font-size: 30px;

            line-height: 1.25;

            color: #222;

            margin: 0 0 15px;

        }


        #universalPopupPrice {

            font-size: 25px;

            color: #9b6a35;

            margin: 0 0 20px;

        }


        #universalPopupDescription {

            color: #666;

            font-size: 15px;

            line-height: 1.7;

            margin: 0 0 25px;

        }


        .quantity-area {

            display: flex;

            align-items: center;

            justify-content: space-between;

            margin-bottom: 25px;

        }


        .quantity-area > span {

            font-size: 15px;

            font-weight: 600;

            color: #333;

        }


        .quantity-control {

            display: flex;

            align-items: center;

            border: 1px solid #ddd;

            border-radius: 7px;

            overflow: hidden;

        }


        .quantity-control button {

            width: 40px;

            height: 38px;

            border: none;

            background: #f5f5f5;

            font-size: 20px;

            cursor: pointer;

        }


        .quantity-control button:hover {

            background: #e9e9e9;

        }


        #universalQty {

            width: 45px;

            text-align: center;

            font-weight: 600;

        }


        .universal-add-cart {

            width: 100%;

            padding: 15px;

            border: none;

            border-radius: 7px;

            background: #222;

            color: white;

            font-size: 14px;

            font-weight: 600;

            letter-spacing: 1px;

            cursor: pointer;

            transition: 0.25s ease;

        }


        .universal-add-cart:hover {

            background: #9b6a35;

            transform: translateY(-2px);

        }


        .universal-popup-close {

            position: absolute;

            top: 15px;

            right: 15px;

            width: 40px;

            height: 40px;

            border: none;

            border-radius: 50%;

            background: rgba(255,255,255,0.95);

            color: #222;

            font-size: 27px;

            cursor: pointer;

            z-index: 5;

        }


        .universal-popup-close:hover {

            background: #222;

            color: white;

        }


        @media(max-width: 768px) {

            .universal-popup-box {

                grid-template-columns: 1fr;

                max-height: 92vh;

                overflow-y: auto;

            }


            .universal-popup-image {

                min-height: 280px;

                height: 280px;

            }


            .universal-popup-image img {

                min-height: 280px;

                height: 280px;

            }


            .universal-popup-details {

                padding: 28px 25px;

            }


            #universalPopupTitle {

                font-size: 24px;

            }


            #universalPopupPrice {

                font-size: 21px;

            }

        }


        @media(max-width: 480px) {

            #universalProductPopup {

                padding: 10px;

            }


            .universal-popup-box {

                width: 100%;

                border-radius: 14px;

            }


            .universal-popup-image {

                height: 220px;

                min-height: 220px;

            }


            .universal-popup-image img {

                height: 220px;

                min-height: 220px;

            }


            .universal-popup-details {

                padding: 22px 18px;

            }


            #universalPopupTitle {

                font-size: 20px;

            }


            #universalPopupDescription {

                font-size: 14px;

            }

        }

    `;


    document.head.appendChild(style);

}


// ============================================================
// CURRENT POPUP PRODUCT
// ============================================================

let currentPopupProduct = null;

let currentPopupQuantity = 1;


// ============================================================
// OPEN UNIVERSAL POPUP
// ============================================================

function openUniversalPopup(product) {

    const popup =
        createProductPopup();

    addPopupStyles();


    const image =
        document.getElementById("universalPopupImage");

    const title =
        document.getElementById("universalPopupTitle");

    const price =
        document.getElementById("universalPopupPrice");

    const description =
        document.getElementById("universalPopupDescription");

    const quantity =
        document.getElementById("universalQty");


    currentPopupProduct = product;

    currentPopupQuantity = 1;


    image.src = product.image;

    title.textContent = product.name;

    price.textContent = product.price;

    description.textContent =
        product.description;


    quantity.textContent = "1";


    popup.classList.add("show");

    document.body.style.overflow = "hidden";

}


// ============================================================
// CLOSE UNIVERSAL POPUP
// ============================================================

function closeUniversalPopup() {

    const popup =
        document.getElementById("universalProductPopup");


    if (!popup) {
        return;
    }


    popup.classList.remove("show");

    document.body.style.overflow = "";

    currentPopupProduct = null;

    currentPopupQuantity = 1;

}


// ============================================================
// INITIALIZE PRODUCT POPUPS
// ============================================================

function initializeProductPopups() {

    productPageSettings.forEach(function (setting) {

        const buttons =
            document.querySelectorAll(setting.button);


        buttons.forEach(function (button) {

            button.addEventListener("click", function (event) {

                event.preventDefault();

                event.stopPropagation();


                const card =
                    button.closest(setting.card);


                if (!card) {
                    return;
                }


                const image =
                    card.querySelector(setting.image);

                const title =
                    card.querySelector(setting.title);

                const price =
                    card.querySelector(setting.price);


                if (!image || !title || !price) {
                    return;
                }


                const product = {

                    name:
                        title.textContent.trim(),

                    price:
                        price.textContent.trim(),

                    image:
                        image.src,

                    description:
                        getProductDescription(
                            title.textContent.trim()
                        )

                };


                openUniversalPopup(product);

            });

        });

    });

}


// ============================================================
// POPUP BUTTONS
// ============================================================

function initializePopupButtons() {

    const popup =
        createProductPopup();


    addPopupStyles();


    const closeButton =
        document.getElementById("universalPopupClose");

    const minusButton =
        document.getElementById("universalQtyMinus");

    const plusButton =
        document.getElementById("universalQtyPlus");

    const quantity =
        document.getElementById("universalQty");

    const addButton =
        document.getElementById("universalAddCart");


    if (closeButton) {

        closeButton.addEventListener("click", function () {

            closeUniversalPopup();

        });

    }


    if (popup) {

        popup.addEventListener("click", function (event) {

            if (event.target === popup) {

                closeUniversalPopup();

            }

        });

    }


    if (minusButton) {

        minusButton.addEventListener("click", function () {

            if (currentPopupQuantity > 1) {

                currentPopupQuantity--;

            }


            quantity.textContent =
                currentPopupQuantity;

        });

    }


    if (plusButton) {

        plusButton.addEventListener("click", function () {

            if (currentPopupQuantity < 20) {

                currentPopupQuantity++;

            }


            quantity.textContent =
                currentPopupQuantity;

        });

    }


    if (addButton) {

        addButton.addEventListener("click", function () {

            if (!currentPopupProduct) {
                return;
            }


            addProductToCart(
                currentPopupProduct,
                currentPopupQuantity
            );


            closeUniversalPopup();


            alert(
                currentPopupProduct.name +
                " added to cart! 🛍️"
            );

        });

    }

}


// ============================================================
// ESC KEY
// ============================================================

function initializeEscapeKey() {

    document.addEventListener("keydown", function (event) {

        if (event.key !== "Escape") {
            return;
        }


        closeUniversalPopup();


        const bagPopup =
            document.getElementById("bagPopup");


        if (
            bagPopup &&
            bagPopup.classList.contains("show")
        ) {

            bagPopup.classList.remove("show");

            document.body.style.overflow = "";

        }

    });

}


// ============================================================
// OLD BAG POPUP SUPPORT
// ============================================================

function initializeOldBagPopup() {

    const bagPopup =
        document.getElementById("bagPopup");


    if (!bagPopup) {
        return;
    }


    const image =
        document.getElementById("bagPopupImg");

    const name =
        document.getElementById("bagPopupName");

    const price =
        document.getElementById("bagPopupPrice");

    const description =
        document.getElementById("bagPopupDescription");

    const close =
        document.getElementById("bagPopupClose");

    const add =
        document.getElementById("bagAddCart");


    const buttons =
        document.querySelectorAll(".bags-cart-btn");


    let selectedBag = null;

    let selectedQuantity = 1;


    buttons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.preventDefault();

            event.stopPropagation();


            const card =
                button.closest(".bags-product-card");


            const bagImage =
                card.querySelector(".bags-img-front");

            const bagName =
                card.querySelector(".bags-title");

            const bagPrice =
                card.querySelector(".bags-cost");


            selectedQuantity = 1;


            selectedBag = {

                name:
                    bagName.textContent.trim(),

                price:
                    bagPrice.textContent.trim(),

                image:
                    bagImage.src,

                description:
                    getProductDescription(
                        bagName.textContent.trim()
                    )

            };


            if (image) {
                image.src = selectedBag.image;
            }


            if (name) {
                name.textContent = selectedBag.name;
            }


            if (price) {
                price.textContent = selectedBag.price;
            }


            if (description) {

                description.textContent =
                    selectedBag.description;

            }


            bagPopup.classList.add("show");

            document.body.style.overflow =
                "hidden";

        });

    });


    if (close) {

        close.addEventListener("click", function () {

            bagPopup.classList.remove("show");

            document.body.style.overflow = "";

            selectedBag = null;

        });

    }


    bagPopup.addEventListener("click", function (event) {

        if (event.target === bagPopup) {

            bagPopup.classList.remove("show");

            document.body.style.overflow = "";

            selectedBag = null;

        }

    });


    if (add) {

        add.addEventListener("click", function () {

            if (!selectedBag) {
                return;
            }


            addProductToCart(
                selectedBag,
                selectedQuantity
            );


            bagPopup.classList.remove("show");

            document.body.style.overflow = "";


            alert(
                selectedBag.name +
                " added to cart! 👜"
            );


            selectedBag = null;

        });

    }

}


// ============================================================
// CART PAGE
// ============================================================

function renderCartPage() {

    const cartPageItems =
        document.getElementById("cartPageItems");


    if (!cartPageItems) {
        return;
    }


    const subtotalElement =
        document.getElementById("cartSubtotal");

    const totalElement =
        document.getElementById("cartTotal");


    let cart = getCart();


    // EMPTY CART

    if (cart.length === 0) {

        cartPageItems.innerHTML = `

            <div class="empty-cart">

                <h3>Your Cart is Empty 🛒</h3>

                <p>
                    You haven't added any products yet.
                </p>

                <a href="new.html">
                    CONTINUE SHOPPING
                </a>

            </div>

        `;


        if (subtotalElement) {

            subtotalElement.textContent = "₹0";

        }


        if (totalElement) {

            totalElement.textContent = "₹0";

        }


        updateCartCount();

        return;

    }


    cartPageItems.innerHTML = "";

    let subtotal = 0;


    // PRODUCTS

    cart.forEach(function (product, index) {

        const price =
            getPriceNumber(product.price);


        const quantity =
            Number(product.quantity) || 1;


        const productTotal =
            price * quantity;


        subtotal += productTotal;


        const productBox =
            document.createElement("div");


        productBox.className =
            "cart-product-item";


        productBox.innerHTML = `

            <div class="cart-product-image-box">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="cart-product-image">

            </div>


            <div class="cart-product-info">

                <h3>
                    ${product.name}
                </h3>


                <p class="cart-product-price">
                    ${product.price}
                </p>


                <div class="cart-quantity-control">

                    <button
                        class="cart-minus"
                        data-index="${index}">
                        −
                    </button>


                    <span class="cart-quantity">
                        ${quantity}
                    </span>


                    <button
                        class="cart-plus"
                        data-index="${index}">
                        +
                    </button>

                </div>


                <p class="cart-item-total">

                    Item Total:
                    ₹${productTotal.toLocaleString("en-IN")}

                </p>


                <button
                    class="remove-cart-btn"
                    data-index="${index}">

                    REMOVE

                </button>

            </div>

        `;


        cartPageItems.appendChild(productBox);

    });


    // SHIPPING

    const shipping = 70;

    const total =
        subtotal + shipping;


    // SUMMARY

    if (subtotalElement) {

        subtotalElement.textContent =
            "₹" +
            subtotal.toLocaleString("en-IN");

    }


    if (totalElement) {

        totalElement.textContent =
            "₹" +
            total.toLocaleString("en-IN");

    }


    // QUANTITY MINUS

    document
        .querySelectorAll(".cart-minus")
        .forEach(function (button) {

            button.addEventListener("click", function () {

                const index =
                    Number(button.dataset.index);


                let cart =
                    getCart();


                const product =
                    cart[index];


                if (!product) {
                    return;
                }


                product.quantity =
                    (Number(product.quantity) || 1)
                    - 1;


                if (product.quantity <= 0) {

                    cart.splice(index, 1);

                }


                saveCart(cart);

                updateCartCount();

                renderCartPage();

            });

        });


    // QUANTITY PLUS

    document
        .querySelectorAll(".cart-plus")
        .forEach(function (button) {

            button.addEventListener("click", function () {

                const index =
                    Number(button.dataset.index);


                let cart =
                    getCart();


                const product =
                    cart[index];


                if (!product) {
                    return;
                }


                product.quantity =
                    (Number(product.quantity) || 1)
                    + 1;


                if (product.quantity > 20) {

                    product.quantity = 20;

                }


                saveCart(cart);

                updateCartCount();

                renderCartPage();

            });

        });


    // REMOVE

    document
        .querySelectorAll(".remove-cart-btn")
        .forEach(function (button) {

            button.addEventListener("click", function () {

                const index =
                    Number(button.dataset.index);


                let cart =
                    getCart();


                cart.splice(index, 1);


                saveCart(cart);

                updateCartCount();

                renderCartPage();

            });

        });


    updateCartCount();

}


// ============================================================
// CART PAGE EXTRA CSS
// ============================================================

function addCartStyles() {

    if (document.getElementById("cartExtraStyles")) {
        return;
    }


    const style =
        document.createElement("style");


    style.id =
        "cartExtraStyles";


    style.textContent = `

        .cart-product-item {

            display: flex;

            gap: 25px;

            padding: 20px;

            margin-bottom: 20px;

            background: #fff;

            border-radius: 12px;

        }


        .cart-product-image-box {

            width: 150px;

            height: 180px;

            flex-shrink: 0;

        }


        .cart-product-image {

            width: 100%;

            height: 100%;

            object-fit: cover;

            border-radius: 8px;

        }


        .cart-product-info {

            flex: 1;

        }


        .cart-product-info h3 {

            margin: 0 0 10px;

        }


        .cart-product-price {

            font-weight: 600;

            margin-bottom: 15px;

        }


        .cart-quantity-control {

            display: flex;

            align-items: center;

            width: fit-content;

            border: 1px solid #ddd;

            border-radius: 6px;

            overflow: hidden;

            margin-bottom: 12px;

        }


        .cart-quantity-control button {

            width: 38px;

            height: 35px;

            border: none;

            background: #f5f5f5;

            cursor: pointer;

            font-size: 19px;

        }


        .cart-quantity {

            width: 45px;

            text-align: center;

            font-weight: 600;

        }


        .cart-item-total {

            font-weight: 600;

            margin-bottom: 15px;

        }


        .remove-cart-btn {

            border: none;

            background: transparent;

            color: #b00020;

            font-size: 12px;

            font-weight: 600;

            cursor: pointer;

            letter-spacing: 1px;

        }


        .remove-cart-btn:hover {

            text-decoration: underline;

        }


        @media(max-width: 600px) {

            .cart-product-item {

                gap: 15px;

                padding: 15px;

            }


            .cart-product-image-box {

                width: 100px;

                height: 130px;

            }


            .cart-product-info h3 {

                font-size: 16px;

            }

        }


        @media(max-width: 400px) {

            .cart-product-item {

                flex-direction: column;

            }


            .cart-product-image-box {

                width: 100%;

                height: 220px;

            }

        }

    `;


    document.head.appendChild(style);

}


// ============================================================
// CHECKOUT
// ============================================================

function checkoutAction() {

    const cart =
        getCart();


    if (cart.length === 0) {

        alert(
            "Your cart is empty! 🛒"
        );

        return;

    }


    let subtotal = 0;


    cart.forEach(function (product) {

        const price =
            getPriceNumber(product.price);

        const quantity =
            Number(product.quantity) || 1;


        subtotal +=
            price * quantity;

    });


    const total =
        subtotal + 70;


    alert(

        "Order Summary 🛍️\n\n" +

        "Subtotal: ₹" +
        subtotal.toLocaleString("en-IN") +

        "\nShipping: ₹70" +

        "\nTotal: ₹" +
        total.toLocaleString("en-IN") +

        "\n\nCOD Order Ready!"

    );

}


// ============================================================
// SIDE MENU
// ============================================================

function openMenu() {

    const sideMenu =
        document.querySelector(".side-menu");


    if (sideMenu) {

        sideMenu.classList.add("active");

    }

}


function closeMenu() {

    const sideMenu =
        document.querySelector(".side-menu");


    if (sideMenu) {

        sideMenu.classList.remove("active");

    }

}


function initializeSideMenu() {

    const closeButton =
        document.querySelector(".close-btn");


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeMenu
        );

    }

}


// ============================================================
// SORT PRODUCTS
// ============================================================

function initializeSorting() {

    const sortSelects =
        document.querySelectorAll(
            "#sort-products, #sort-bags, #sort-kids, #sort-women, #sort-traditional, #sort-accessories"
        );


    sortSelects.forEach(function (select) {

        select.addEventListener("change", function () {

            let grid =
                select.closest("body").querySelector(
                    ".products-grid, " +
                    ".bags-products-grid, " +
                    ".kids-products-grid, " +
                    ".women-products-grid, " +
                    ".traditional-products-grid, " +
                    ".accessories-products-grid"
                );


            if (!grid) {
                return;
            }


            const cards =
                Array.from(grid.children);


            if (
                select.value === "price-low" ||
                select.value === "price-high"
            ) {

                cards.sort(function (a, b) {

                    const priceA =
                        getCardPrice(a);

                    const priceB =
                        getCardPrice(b);


                    if (select.value === "price-low") {

                        return priceA - priceB;

                    } else {

                        return priceB - priceA;

                    }

                });


                cards.forEach(function (card) {

                    grid.appendChild(card);

                });

            }

        });

    });

}


function getCardPrice(card) {

    const priceElement =
        card.querySelector(
            ".price, " +
            ".bags-cost, " +
            ".kids-cost, " +
            ".women-cost, " +
            ".traditional-cost, " +
            ".accessories-cost"
        );


    if (!priceElement) {
        return 0;
    }


    return getPriceNumber(
        priceElement.textContent
    );

}

// ============================================================
// ROYAL COLLECTION - LOGIN SYSTEM
// ============================================================

// ============================================================
// LOGIN / PROFILE SYSTEM
// ============================================================


// ============================================================
// USER ICON — LOGIN / PROFILE
// ============================================================

function updateUserIcon() {

    const userLinks = document.querySelectorAll(
        'a[href="user.html"], a[href="profile.html"]'
    );

    const isLoggedIn =
        localStorage.getItem("royalLoggedIn") === "true";


    userLinks.forEach(function (userLink) {

        if (isLoggedIn) {

            userLink.href = "profile.html";

        } else {

            userLink.href = "user.html";

        }

    });

}


// ============================================================
// LOGIN / CREATE ACCOUNT
// ============================================================

function initializeLogin() {

    const loginForm =
        document.getElementById("loginForm");


    if (!loginForm) {
        return;
    }


    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("userName").value.trim();

        const email =
            document.getElementById("userEmail").value.trim().toLowerCase();

        const phone =
            document.getElementById("userPhone").value.trim();

        const address =
            document.getElementById("userAddress").value.trim();

        const password =
            document.getElementById("userPassword").value;


        // ====================================================
        // VALIDATION
        // ====================================================

        if (
            !name ||
            !email ||
            !phone ||
            !address ||
            !password
        ) {

            alert("Please fill all details.");

            return;

        }


        if (!/^[0-9]{10}$/.test(phone)) {

            alert(
                "Please enter a valid 10 digit phone number."
            );

            return;

        }


        // ====================================================
        // GET ALL USERS
        // ====================================================

        let users =
            JSON.parse(
                localStorage.getItem("royalUsers")
            ) || [];


        // ====================================================
        // CHECK EMAIL
        // ====================================================

        const existingUser =
            users.find(function (user) {

                return user.email === email;

            });


        // ====================================================
        // EXISTING USER → LOGIN
        // ====================================================

        if (existingUser) {


            // Wrong password

            if (existingUser.password !== password) {

                alert(
                    "Incorrect password ❌"
                );

                return;

            }


            // Correct password

            localStorage.setItem(
                "royalUser",
                JSON.stringify(existingUser)
            );


            localStorage.setItem(
                "royalLoggedIn",
                "true"
            );


            alert(
                "Login successful! 👑"
            );


            // DIRECT HOME PAGE

            window.location.href =
                "index.html";


            return;

        }


        // ====================================================
        // NEW USER → CREATE ACCOUNT
        // ====================================================

        const newUser = {

            name: name,

            email: email,

            phone: phone,

            address: address,

            password: password

        };


        users.push(newUser);


        // Save all users

        localStorage.setItem(
            "royalUsers",
            JSON.stringify(users)
        );


        // Save current user

        localStorage.setItem(
            "royalUser",
            JSON.stringify(newUser)
        );


        // Login status

        localStorage.setItem(
            "royalLoggedIn",
            "true"
        );


        alert(
            "Account created successfully! 👑"
        );


        // DIRECT HOME PAGE

        window.location.href =
            "index.html";

    });

}


// ============================================================
// LOAD PROFILE
// ============================================================

function loadProfile() {

    const profileName =
        document.getElementById("profileName");


    // Profile page nahi hai

    if (!profileName) {
        return;
    }


    const isLoggedIn =
        localStorage.getItem("royalLoggedIn") === "true";


    const savedUser =
        JSON.parse(
            localStorage.getItem("royalUser")
        );


    // ========================================================
    // NOT LOGGED IN
    // ========================================================

    if (!isLoggedIn || !savedUser) {

        window.location.href =
            "user.html";

        return;

    }


    // ========================================================
    // PROFILE INFORMATION
    // ========================================================

    const profileEmail =
        document.getElementById("profileEmail");

    const profileFullName =
        document.getElementById("profileFullName");

    const profileEmailValue =
        document.getElementById("profileEmailValue");

    const profilePhone =
        document.getElementById("profilePhone");

    const profileAddress =
        document.getElementById("profileAddress");

    const profileInitial =
        document.getElementById("profileInitial");


    if (profileName) {

        profileName.textContent =
            savedUser.name;

    }


    if (profileEmail) {

        profileEmail.textContent =
            savedUser.email;

    }


    if (profileFullName) {

        profileFullName.textContent =
            savedUser.name;

    }


    if (profileEmailValue) {

        profileEmailValue.textContent =
            savedUser.email;

    }


    if (profilePhone) {

        profilePhone.textContent =
            savedUser.phone;

    }


    if (profileAddress) {

        profileAddress.textContent =
            savedUser.address;

    }


    if (profileInitial) {

        profileInitial.textContent =
            savedUser.name
                .charAt(0)
                .toUpperCase();

    }

}


// ============================================================
// EDIT PROFILE
// ============================================================

function editProfile() {

    const savedUser =
        JSON.parse(
            localStorage.getItem("royalUser")
        );


    if (!savedUser) {

        window.location.href =
            "user.html";

        return;

    }


    const newName =
        prompt(
            "Enter your name:",
            savedUser.name
        );


    if (newName === null) {
        return;
    }


    const newPhone =
        prompt(
            "Enter your phone number:",
            savedUser.phone
        );


    if (newPhone === null) {
        return;
    }


    const newAddress =
        prompt(
            "Enter your address:",
            savedUser.address
        );


    if (newAddress === null) {
        return;
    }


    // Phone validation

    if (!/^[0-9]{10}$/.test(newPhone.trim())) {

        alert(
            "Please enter a valid 10 digit phone number."
        );

        return;

    }


    savedUser.name =
        newName.trim();

    savedUser.phone =
        newPhone.trim();

    savedUser.address =
        newAddress.trim();


    // Save current user

    localStorage.setItem(
        "royalUser",
        JSON.stringify(savedUser)
    );


    // Update users database

    let users =
        JSON.parse(
            localStorage.getItem("royalUsers")
        ) || [];


    const userIndex =
        users.findIndex(function (user) {

            return user.email === savedUser.email;

        });


    if (userIndex !== -1) {

        users[userIndex] =
            savedUser;

    }


    localStorage.setItem(
        "royalUsers",
        JSON.stringify(users)
    );


    alert(
        "Profile updated successfully! ✓"
    );


    loadProfile();

}


// ============================================================
// LOGOUT
// ============================================================

function logoutUser() {

    const confirmLogout =
        confirm(
            "Are you sure you want to logout?"
        );


    if (!confirmLogout) {
        return;
    }


    localStorage.removeItem(
        "royalLoggedIn"
    );


    localStorage.removeItem(
        "royalUser"
    );


    alert(
        "You have been logged out."
    );


    window.location.href =
        "user.html";

}


// ============================================================
// MY ORDERS
// ============================================================

function viewOrders() {

    window.location.href =
        "orders.html";

}


// ============================================================
// PAGE LOAD
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        // User icon update
        updateUserIcon();

        // Login form
        initializeLogin();

        // Profile
        loadProfile();

    }
);


// ============================================================
// LOGOUT
// ============================================================

function logoutUser() {

    const confirmLogout =
        confirm(
            "Are you sure you want to logout?"
        );


    if (!confirmLogout) {
        return;
    }


    localStorage.removeItem(
        "royalLoggedIn"
    );


    // User icon automatically user.html par jayega

    window.location.href =
        "user.html";

}


// ============================================================
// MY ORDERS
// ============================================================

function viewOrders() {

    window.location.href =
        "orders.html";

}


// ============================================================
// RUN PROFILE PROTECTION
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        protectProfilePage();

    }
);

// ============================================================
// LOAD PROFILE
// ============================================================

function loadProfile() {

    const profileName =
        document.getElementById("profileName");


    if (!profileName) {
        return;
    }


    const isLoggedIn =
        localStorage.getItem("royalLoggedIn") === "true";


    const savedUser =
        JSON.parse(
            localStorage.getItem("royalUser")
        );


    // NOT LOGGED IN

    if (!isLoggedIn || !savedUser) {

        window.location.href =
            "user.html";

        return;

    }


    // HEADER

    profileName.textContent =
        savedUser.name;


    const profileEmail =
        document.getElementById("profileEmail");


    if (profileEmail) {

        profileEmail.textContent =
            savedUser.email;

    }


    // FULL NAME

    const profileFullName =
        document.getElementById("profileFullName");


    if (profileFullName) {

        profileFullName.textContent =
            savedUser.name;

    }


    // EMAIL

    const profileEmailValue =
        document.getElementById("profileEmailValue");


    if (profileEmailValue) {

        profileEmailValue.textContent =
            savedUser.email;

    }


    // PHONE

    const profilePhone =
        document.getElementById("profilePhone");


    if (profilePhone) {

        profilePhone.textContent =
            savedUser.phone;

    }


    // ADDRESS

    const profileAddress =
        document.getElementById("profileAddress");


    if (profileAddress) {

        profileAddress.textContent =
            savedUser.address;

    }


    // INITIAL

    const profileInitial =
        document.getElementById("profileInitial");


    if (profileInitial) {

        profileInitial.textContent =
            savedUser.name
                .charAt(0)
                .toUpperCase();

    }

}


// ============================================================
// EDIT PROFILE
// ============================================================

function editProfile() {

    const savedUser =
        JSON.parse(
            localStorage.getItem("royalUser")
        );


    const isLoggedIn =
        localStorage.getItem("royalLoggedIn") === "true";


    if (!savedUser || !isLoggedIn) {

        window.location.href =
            "user.html";

        return;

    }


    const newName =
        prompt(
            "Enter your name:",
            savedUser.name
        );


    if (newName === null) {
        return;
    }


    const newPhone =
        prompt(
            "Enter your phone number:",
            savedUser.phone
        );


    if (newPhone === null) {
        return;
    }


    const newAddress =
        prompt(
            "Enter your address:",
            savedUser.address
        );


    if (newAddress === null) {
        return;
    }


    if (!/^[0-9]{10}$/.test(newPhone)) {

        alert(
            "Please enter a valid 10 digit phone number."
        );

        return;

    }


    savedUser.name =
        newName.trim();


    savedUser.phone =
        newPhone.trim();


    savedUser.address =
        newAddress.trim();


    localStorage.setItem(
        "royalUser",
        JSON.stringify(savedUser)
    );


    alert(
        "Profile updated successfully! ✓"
    );


    loadProfile();

}


// ============================================================
// LOGOUT
// ============================================================

function logoutUser() {

    const confirmLogout =
        confirm(
            "Are you sure you want to logout?"
        );


    if (!confirmLogout) {
        return;
    }


    // LOGIN STATUS REMOVE

    localStorage.removeItem(
        "royalLoggedIn"
    );


    // USER DETAILS DELETE NAHI HONGI

    window.location.href =
        "user.html";

}


// ============================================================
// MY ORDERS
// ============================================================

function viewOrders() {

    window.location.href =
        "orders.html";

}


// ============================================================
// USER ICON - LOGIN / PROFILE
// ============================================================

function updateUserIcon() {

    const userLinks =
        document.querySelectorAll(
            'a[href="user.html"], a[href="profile.html"]'
        );


    if (!userLinks.length) {
        return;
    }


    const isLoggedIn =
        localStorage.getItem("royalLoggedIn") === "true";


    userLinks.forEach(function (userLink) {

        if (isLoggedIn) {

            userLink.href =
                "profile.html";

        } else {

            userLink.href =
                "user.html";

        }

    });

}


// ============================================================
// PAGE LOAD
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        // CART

        updateCartCount();


        // PRODUCT POPUPS

        initializeProductPopups();


        // UNIVERSAL POPUP

        initializePopupButtons();


        // OLD BAG POPUP

        initializeOldBagPopup();


        // CART PAGE

        addCartStyles();

        renderCartPage();


        // SIDE MENU

        initializeSideMenu();


        // SORTING

        initializeSorting();


        // ESC

        initializeEscapeKey();


        // LOGIN

        initializeLoginSystem();


        // PROFILE

        loadProfile();


        // USER ICON

        updateUserIcon();

    }
);

// ============================================================
// CHECKOUT / PLACE ORDER
// ============================================================

function checkoutAction() {

    const cart = getCart();

    // Cart empty
    if (cart.length === 0) {

        alert("Your cart is empty! 🛒");

        return;

    }


    // ========================================================
    // CHECK LOGIN
    // ========================================================

    const isLoggedIn =
        localStorage.getItem("royalLoggedIn") === "true";

    const savedUser =
        JSON.parse(localStorage.getItem("royalUser"));


    if (!isLoggedIn || !savedUser) {

        alert("Please login before placing your order. 👤");

        window.location.href = "user.html";

        return;

    }


    // ========================================================
    // CALCULATE TOTAL
    // ========================================================

    let subtotal = 0;

    cart.forEach(function (product) {

        const price =
            getPriceNumber(product.price);

        const quantity =
            Number(product.quantity) || 1;

        subtotal += price * quantity;

    });


    const shipping = 70;

    const total =
        subtotal + shipping;


    // ========================================================
    // CREATE ORDER ID
    // ========================================================

    const orderId =
        "RC" +
        Date.now().toString().slice(-8);


    // ========================================================
    // CREATE TRACKING ID
    // ========================================================

    const trackingId =
        "RC-TRK-" +
        Math.random()
            .toString(36)
            .substring(2, 8)
            .toUpperCase();


    // ========================================================
    // CREATE ORDER
    // ========================================================

    const order = {

        orderId: orderId,

        trackingId: trackingId,

        date:
            new Date().toLocaleString("en-IN"),

        status: "confirmed",

        payment: "Cash on Delivery",

        products: cart,

        subtotal: subtotal,

        shipping: shipping,

        total: total,


        // USER INFORMATION
        customer: {

            name:
                savedUser.name,

            email:
                savedUser.email,

            phone:
                savedUser.phone,

            address:
                savedUser.address

        }

    };


    // ========================================================
    // GET OLD ORDERS
    // ========================================================

    let orders =
        JSON.parse(
            localStorage.getItem("royalOrders")
        ) || [];


    // ========================================================
    // SAVE NEW ORDER
    // ========================================================

    orders.unshift(order);


    localStorage.setItem(
        "royalOrders",
        JSON.stringify(orders)
    );


    // ========================================================
    // CLEAR CART
    // ========================================================

    localStorage.removeItem("cart");


    // Update cart count
    updateCartCount();


    // ========================================================
    // ORDER CONFIRMATION POPUP
    // ========================================================

    alert(

        "🎉 ORDER CONFIRMED!\n\n" +

        "Order ID: " +
        orderId +

        "\n\nTracking ID: " +
        trackingId +

        "\n\nTotal: ₹" +
        total.toLocaleString("en-IN") +

        "\n\nThank you for shopping with Royal Collection! 👑"

    );


    // ========================================================
    // GO TO ORDERS PAGE
    // ========================================================

    window.location.href =
        "orders.html";

}

// ============================================================
// MY ORDERS - SHOW ORDERS
// ============================================================

function renderOrdersPage() {

    const ordersList =
        document.getElementById("ordersList");

    const noOrders =
        document.getElementById("noOrders");


    // orders.html nahi hai
    if (!ordersList) {
        return;
    }


    const orders =
        JSON.parse(
            localStorage.getItem("royalOrders")
        ) || [];


    // ========================================================
    // NO ORDERS
    // ========================================================

    if (orders.length === 0) {

        ordersList.innerHTML = "";

        if (noOrders) {
            noOrders.style.display = "block";
        }

        return;

    }


    // Orders hain
    if (noOrders) {
        noOrders.style.display = "none";
    }


    ordersList.innerHTML = "";


    // ========================================================
    // SHOW EACH ORDER
    // ========================================================

    orders.forEach(function (order) {

        const orderBox =
            document.createElement("div");

        orderBox.className =
            "order-card";


        // Products
        let productsHTML = "";


        order.products.forEach(function (product) {

            const quantity =
                Number(product.quantity) || 1;


            productsHTML += `

                <div class="order-product">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >

                    <div class="order-product-info">

                        <h3>
                            ${product.name}
                        </h3>

                        <p>
                            ${product.price}
                        </p>

                        <span>
                            Quantity: ${quantity}
                        </span>

                    </div>

                </div>

            `;

        });


        orderBox.innerHTML = `

            <div class="order-card-header">

                <div>

                    <span>
                        ORDER ID
                    </span>

                    <strong>
                        #${order.orderId}
                    </strong>

                </div>


                <div class="order-status">

                    <i class="fa-solid fa-circle-check"></i>

                    Order Confirmed

                </div>

            </div>


            <div class="order-date">

                <i class="fa-regular fa-calendar"></i>

                ${order.date}

            </div>


            <div class="order-products">

                ${productsHTML}

            </div>


            <div class="order-card-bottom">

                <div>

                    <span>
                        Tracking ID
                    </span>

                    <strong>
                        ${order.trackingId}
                    </strong>

                </div>


                <div>

                    <span>
                        Total
                    </span>

                    <strong>
                        ₹${Number(order.total)
                            .toLocaleString("en-IN")}
                    </strong>

                </div>


                <button
                    class="view-order-btn"
                    onclick="openOrderDetails('${order.orderId}')">

                    VIEW DETAILS

                </button>

            </div>

        `;


        ordersList.appendChild(orderBox);

    });

}


// ============================================================
// ORDER DETAILS POPUP
// ============================================================

function openOrderDetails(orderId) {

    const orders =
        JSON.parse(
            localStorage.getItem("royalOrders")
        ) || [];


    const order =
        orders.find(function (item) {

            return item.orderId === orderId;

        });


    if (!order) {
        return;
    }


    const popup =
        document.getElementById("orderDetailsPopup");


    if (!popup) {
        return;
    }


    // ========================================================
    // ORDER ID
    // ========================================================

    const popupOrderId =
        document.getElementById("popupOrderId");

    if (popupOrderId) {

        popupOrderId.textContent =
            "#" + order.orderId;

    }


    // ========================================================
    // DATE
    // ========================================================

    const popupOrderDate =
        document.getElementById("popupOrderDate");

    if (popupOrderDate) {

        popupOrderDate.textContent =
            order.date;

    }


    // ========================================================
    // TOTAL
    // ========================================================

    const popupOrderTotal =
        document.getElementById("popupOrderTotal");

    if (popupOrderTotal) {

        popupOrderTotal.textContent =
            "₹" +
            Number(order.total)
                .toLocaleString("en-IN");

    }


    // ========================================================
    // ADDRESS
    // ========================================================

    const popupAddress =
        document.getElementById("popupAddress");

    if (popupAddress) {

        popupAddress.textContent =
            order.customer.address;

    }


    // ========================================================
    // PRODUCTS
    // ========================================================

    const popupProducts =
        document.getElementById("popupProducts");


    if (popupProducts) {

        popupProducts.innerHTML = "";


        order.products.forEach(function (product) {

            const quantity =
                Number(product.quantity) || 1;


            popupProducts.innerHTML += `

                <div class="popup-product">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >


                    <div>

                        <h4>
                            ${product.name}
                        </h4>

                        <p>
                            ${product.price}
                        </p>

                        <span>
                            Quantity: ${quantity}
                        </span>

                    </div>

                </div>

            `;

        });

    }


    // ========================================================
    // TRACKING
    // ========================================================

    const trackingSteps =
        popup.querySelectorAll(".tracking-step");


    trackingSteps.forEach(function (step) {

        step.classList.remove("active");

    });


    const confirmedStep =
        popup.querySelector(
            '[data-status="confirmed"]'
        );


    if (confirmedStep) {

        confirmedStep.classList.add("active");

    }


    // ========================================================
    // SHOW POPUP
    // ========================================================

    popup.classList.add("show");

    document.body.style.overflow = "hidden";

}


// ============================================================
// CLOSE ORDER DETAILS
// ============================================================

function closeOrderDetails() {

    const popup =
        document.getElementById("orderDetailsPopup");


    if (!popup) {
        return;
    }


    popup.classList.remove("show");

    document.body.style.overflow = "";

}


// ============================================================
// ORDERS PAGE LOAD
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        renderOrdersPage();


        const closeButton =
            document.getElementById(
                "orderPopupClose"
            );


        if (closeButton) {

            closeButton.addEventListener(
                "click",
                closeOrderDetails
            );

        }


        const popup =
            document.getElementById(
                "orderDetailsPopup"
            );


        if (popup) {

            popup.addEventListener(
                "click",
                function (event) {

                    if (event.target === popup) {

                        closeOrderDetails();

                    }

                }
            );

        }

    }
);

const menuBtn = document.querySelector(".menu-btn");
const sideMenu = document.querySelector(".side-menu");
const closeBtn = document.querySelector(".close-btn");


menuBtn.addEventListener("click", function () {
    sideMenu.classList.add("active");
});


closeBtn.addEventListener("click", function () {
    sideMenu.classList.remove("active");
});