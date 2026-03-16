class Item {
    #discount = 0.1; 

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    get finalPrice() {
        return this.price - (this.price * this.#discount);
    }
}

const laptop = new Item("laptop", 1000);
console.log(laptop.finalPrice);