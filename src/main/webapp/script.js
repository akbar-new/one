// Product Data
const products = {
    televisions: [
        {
            id: 1,
            title: "Samsung QLED 4K Smart TV",
            description: "55-inch QLED 4K UHD Smart TV with Quantum Dot Technology",
            price: 899.99,
            image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            id: 2,
            title: "LG OLED 4K TV",
            description: "65-inch OLED 4K UHD Smart TV with AI ThinQ",
            price: 1499.99,
            image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            id: 3,
            title: "Sony Bravia 8K LED TV",
            description: "75-inch 8K HDR Smart LED TV with Android TV",
            price: 2499.99,
            image: "https://images.unsplash.com/photo-1571415060716-baff5f717c37?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            id: 4,
            title: "TCL Roku Smart TV",
            description: "50-inch 4K UHD Roku Smart LED TV",
            price: 399.99,
            image: "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        }
    ],
    laptops: [
        {
            id: 5,
            title: "MacBook Pro 16-inch",
            description: "Apple MacBook Pro with M1 Pro chip, 16GB RAM, 512GB SSD",
            price: 2399.99,
            image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            id: 6,
            title: "Dell XPS 15",
            description: "Dell XPS 15 Touchscreen Laptop, Intel Core i7, 16GB RAM, 1TB SSD",
            price: 1799.99,
            image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            id: 7,
            title: "HP Spectre x360",
            description: "HP Spectre x360 2-in-1 Laptop, Intel Core i7, 12GB RAM, 512GB SSD",
            price: 1299.99,
            image: "https://images.unsplash.com/photo-1618410320924-37a101fdd9e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            id: 8,
            title: "ASUS ROG Zephyrus",
            description: "ASUS ROG Zephyrus Gaming Laptop, AMD Ryzen 9, 32GB RAM, 1TB SSD",
            price: 1999.99,
            image: "https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        }
    ],
    accessories: [
        {
            id: 9,
            title: "Wireless Keyboard & Mouse",
            description: "Logitech Wireless Keyboard and Mouse Combo",
            price: 49.99,
            image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            id: 10,
            title: "Bluetooth Headphones",
            description: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
            price: 349.99,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            id: 11,
            title: "External SSD 1TB",
            description: "Samsung T7 Portable SSD 1TB - Up to 1050MB/s",
            price: 149.99,
            image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            id: 12,
            title: "4K Webcam",
            description: "Logitech Brio 4K Webcam with HDR and Windows Hello",
            price: 199.99,
            image: "https://images.unsplash.com/photo-1592155931584-901ac15763e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        }
    ]
};

// Shopping Cart
let cart = [];

// DOM Elements
const tvContainer = document.getElementById('tv-container');
const laptopContainer = document.getElementById('laptop-container');
const accessoryContainer = document.getElementById('accessory-container');
const cartIcon = document.querySelector('.cart-icon');
const cartModal = document.getElementById('cartModal');
const closeModal = document.querySelector('.close-modal');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotalElement = document.getElementById('cartTotal');
const cartCountElement = document.querySelector('.cart-count');

// Display Products
function displayProducts() {
    // Display TVs
    products.televisions.forEach(tv => {
        tvContainer.appendChild(createProductCard(tv));
    });

    // Display Laptops
    products.laptops.forEach(laptop => {
        laptopContainer.appendChild(createProductCard(laptop));
    });

    // Display Accessories
    products.accessories.forEach(accessory => {
        accessoryContainer.appendChild(createProductCard(accessory));
    });
}

// Create Product Card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.title}">
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-description">${product.description}</p>
            <p class="product-price">$${product.price.toFixed(2)}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        </div>
    `;
    
    return card;
}

// Add to Cart
function addToCart(productId) {
    // Find the product in all categories
    let product = null;
    
    for (const category in products) {
        const foundProduct = products[category].find(p => p.id === productId);
        if (foundProduct) {
            product = foundProduct;
            break;
        }
    }
    
    if (!product) return;
    
    // Check if product already in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCart();
}

// Update Cart
function updateCart() {
    // Update cart count
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.textContent = totalItems;
    
    // Update cart modal
    renderCartItems();
}

// Render Cart Items
function renderCartItems() {
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        cartTotalElement.textContent = '0.00';
        return;
    }
    
    cartItemsContainer.innerHTML = '';
    
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="cart-item-image">
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.title}</h4>
                <p class="cart-item-price">$${item.price.toFixed(2)}</p>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn minus" data-id="${item.id}">-</button>
                <span class="quantity">${item.quantity}</span>
                <button class="quantity-btn plus" data-id="${item.id}">+</button>
            </div>
            <span class="remove-item" data-id="${item.id}"><i class="fas fa-trash"></i></span>
        `;
        
        cartItemsContainer.appendChild(cartItem);
    });
    
    cartTotalElement.textContent = total.toFixed(2);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    
    // Add to cart buttons
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            addToCart(productId);
            
            // Show a quick notification
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.textContent = 'Item added to cart!';
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
            }, 2000);
        }
        
        // Cart icon click
        if (e.target.closest('.cart-icon')) {
            cartModal.style.display = 'flex';
        }
        
        // Close modal
        if (e.target.classList.contains('close-modal')) {
            cartModal.style.display = 'none';
        }
        
        // Quantity buttons
        if (e.target.classList.contains('quantity-btn')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            const item = cart.find(item => item.id === productId);
            
            if (e.target.classList.contains('minus')) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    cart = cart.filter(item => item.id !== productId);
                }
            } else if (e.target.classList.contains('plus')) {
                item.quantity += 1;
            }
            
            updateCart();
        }
        
        // Remove item
        if (e.target.classList.contains('remove-item') || e.target.closest('.remove-item')) {
            const productId = parseInt(e.target.getAttribute('data-id') || 
                              e.target.closest('.remove-item').getAttribute('data-id'));
            cart = cart.filter(item => item.id !== productId);
            updateCart();
        }
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });
});

// Add some quick animation for notifications
const style = document.createElement('style');
style.textContent = `
    .notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #2ecc71;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        animation: slideIn 0.5s, fadeOut 0.5s 1.5s;
        z-index: 1000;
    }
    
    @keyframes slideIn {
        from { transform: translateX(100%); }
        to { transform: translateX(0); }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(style);
