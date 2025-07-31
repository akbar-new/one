<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TechShop - Your Electronics Store</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <header>
        <div class="logo">
            <h1>TechShop</h1>
        </div>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#televisions">Televisions</a></li>
                <li><a href="#laptops">Laptops</a></li>
                <li><a href="#accessories">Accessories</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        <div class="cart-icon">
            <i class="fas fa-shopping-cart"></i>
            <span class="cart-count">0</span>
        </div>
    </header>

    <main>
        <section id="home" class="hero">
            <div class="hero-content">
                <h2>Welcome to TechShop</h2>
                <p>Your one-stop shop for all electronics needs</p>
                <button class="shop-now">Shop Now</button>
            </div>
        </section>

        <section id="televisions" class="product-section">
            <h2 class="section-title">Televisions</h2>
            <div class="products-container" id="tv-container">
                <!-- TV products will be loaded here by JavaScript -->
            </div>
        </section>

        <section id="laptops" class="product-section">
            <h2 class="section-title">Laptops</h2>
            <div class="products-container" id="laptop-container">
                <!-- Laptop products will be loaded here by JavaScript -->
            </div>
        </section>

        <section id="accessories" class="product-section">
            <h2 class="section-title">Accessories</h2>
            <div class="products-container" id="accessory-container">
                <!-- Accessory products will be loaded here by JavaScript -->
            </div>
        </section>

        <section id="contact" class="contact-section">
            <h2>Contact Us</h2>
            <form>
                <input type="text" placeholder="Your Name" required>
                <input type="email" placeholder="Your Email" required>
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </section>
    </main>

    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h3>About TechShop</h3>
                <p>We provide the latest electronics at competitive prices with excellent customer service.</p>
            </div>
            <div class="footer-section">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#televisions">Televisions</a></li>
                    <li><a href="#laptops">Laptops</a></li>
                    <li><a href="#accessories">Accessories</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Contact Info</h3>
                <p><i class="fas fa-map-marker-alt"></i> 123 Tech Street, Silicon Valley</p>
                <p><i class="fas fa-phone"></i> (123) 456-7890</p>
                <p><i class="fas fa-envelope"></i> info@techshop.com</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2023 TechShop. All rights reserved.</p>
        </div>
    </footer>

    <div class="cart-modal" id="cartModal">
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>Your Shopping Cart</h2>
            <div class="cart-items" id="cartItems">
                <!-- Cart items will be displayed here -->
            </div>
            <div class="cart-total">
                <p>Total: $<span id="cartTotal">0.00</span></p>
                <button class="checkout-btn">Proceed to Checkout</button>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
