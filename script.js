class Product {
    constructor(id, name , price, image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
    }
}

const products = [
    new Product(1, "Sony WH-1000XM6", 24,990.00, "1.jpeg"),
    new Product(2, "Bose QC Ultra", 26,500.00, "2.jpeg"),
    new Product(3, "Sennheiser Momentum 4", 26000.00, "3.jpeg"),
    new Product(4, "AirPods Max ", 32,990.00, "4.jpeg"),
];