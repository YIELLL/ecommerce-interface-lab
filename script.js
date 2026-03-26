class Product {
    constructor(id, name, price, image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
    }
}

const products = [
    new Product(1, "Sony WH-1000XM6", 24990.00, "1.jpeg"),
    new Product(2, "Bose QC Ultra", 26500.00, "2.jpeg"),
    new Product(3, "Sennheiser Momentum 4", 26000.00, "3.jpeg"),
    new Product(4, "AirPods Max", 32990.00, "4.jpeg")
];

const productGrid = document.querySelector('.product-grid');

products.forEach(product => {
    const article = document.createElement('article');

    const img = document.createElement('img');
    img.src = `images/$ {product.image}`; 
    img.alt = product.name;

    const title = document.createElement('h3');
    title.textContent = product.name;

    const price = document.createElement('p');
    price.textContent = `$${product.price.toFixed(2)}`; 

    // Added the button required for Task 3 to work
    const btn = document.createElement('button');
    btn.textContent = "Add to Cart";
    btn.classList.add('add-to-cart');
    btn.setAttribute('data-id', product.id);

    article.appendChild(img);
    article.appendChild(title);
    article.appendChild(price);
    article.appendChild(btn);

    productGrid.appendChild(article);
});

let cart = [];

document.body.addEventListener('click', (event) => {
    if (event.target.classList.contains('add-to-cart')) {
        const productId = parseInt(event.target.getAttribute('data-id'));
        const product = products.find(p => p.id === productId);
        
        if (product) {
            const existingItem = cart.find(item => item.id === productId);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            renderCart();
        }
    }
});

function renderCart() {
    const cartList = document.querySelector('.cart-list');
    const totalDisplay = document.querySelector('.cart-total');
    
    if (!cartList) return;

    cartList.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        
        const nameSpan = document.createElement('span');
        nameSpan.textContent = `${item.name} - $${item.price.toFixed(2)} x`;
        
        const qtyInput = document.createElement('input');
        qtyInput.type = 'number';
        qtyInput.value = item.quantity;
        qtyInput.min = 0;
        
        qtyInput.addEventListener('change', () => {
            const newQty = parseInt(qtyInput.value);
            if (newQty <= 0) {
                cart = cart.filter(i => i.id !== item.id);
            } else {
                item.quantity = newQty;
            }
            renderCart();
        });

        li.appendChild(nameSpan);
        li.appendChild(qtyInput);
        cartList.appendChild(li);
    });

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (totalDisplay) {
        totalDisplay.textContent = `Total: ${total.toFixed(2)}`;
    }
}