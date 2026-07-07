// =======================
// Products Database
// =======================

let products = [
    { name: "Dalda Cooking Oil", unit: "Liter", price: 585 },
    { name: "Dalda Corn Oil ", unit: "Liter", price: 760 },
    { name: "Meezan Cooking Oil", unit: "Liter", price: 535 },
    { name: "Eva Cooking Oil", unit: "Liter", price: 590 },
    { name: "Sufi Cooking/Canola Oil ", unit: "Liter", price: 575 },
    { name: "Kashmir Premium Gold", unit: "Liter", price: 600 },
    { name: "Soya Supreme Oil", unit: "Liter", price: 495 },
    { name: "Chakki Atta", unit: "Kg", price: 140 },
    { name: "Basmati Rice", unit: "Kg", price: 310 },
    { name: "Sugar", unit: "Kg", price: 155 },
    { name: "Chana Daal", unit: "Kg", price: 260 },
    { name: "Mash Daal", unit: "Kg", price: 420 },
    { name: "White Chana ", unit: "Kg", price: 300 },
    { name: "Baisan Atta", unit: "Kg", price: 260 },
    { name: "Red Chili Powder", unit: "Kg", price: 1000 },
    { name: "Haldi", unit: "Kg", price: 960 },
    { name: "Dhania", unit: "Kg", price: 1000 },
    { name: "Iodized Salt", unit: "Kg", price: 70 },
    { name: "Tetra Pack Milk", unit: "Liter", price: 290 },
    { name: "Eggs", unit: "Dozen", price: 240 },
    { name: "Tea (Tapal/Lipton)", unit: "Kg", price: 3000 },
    { name: "Desi Ghee", unit: "Kg", price: 2750 },
    { name: "Chicken", unit: "Kg", price: 580 },
    { name: "Beef", unit: "Kg", price: 1800 },
    { name: "Mutton", unit: "Kg", price: 2100 },
    { name: "Potato", unit: "Kg", price: 80 },
    { name: "Onion", unit: "Kg", price: 80 },
    { name: "Tomato", unit: "Kg", price: 400 }
];

// Shopping Cart Array
let cart = [];

// =======================
// Fill Datalist
// =======================

let productList = document.getElementById("productList");

products.forEach(function (product) {
    productList.innerHTML += `<option value="${product.name}">`;
});

// =======================
// Auto Fill Unit & Price
// =======================

document.getElementById("item").addEventListener("input", function () {

    let itemName = this.value;

    let product = products.find(function (p) {
        return p.name.toLowerCase() === itemName.toLowerCase();
    });

    if (product) {
        document.getElementById("unit").value = product.unit;
        document.getElementById("price").value = product.price;
    } else {
        document.getElementById("unit").value = "";
        document.getElementById("price").value = "";
    }

});

// =======================
// Add Item
// =======================

function addItem() {

    let item = document.getElementById("item").value.trim();
    let qty = Number(document.getElementById("qty").value);
    let unit = document.getElementById("unit").value;
    let price = Number(document.getElementById("price").value);

    if (item === "" || qty <= 0 || unit === "" || price <= 0) {
        alert("Please select an item and enter quantity.");
        return;
    }

    let total = qty * price;

    cart.push({
        item: item,
        qty: qty,
        unit: unit,
        total: total
    });

    displayItems();

    // Clear Inputs
    document.getElementById("item").value = "";
    document.getElementById("qty").value = "";
    document.getElementById("unit").value = "";
    document.getElementById("price").value = "";

}

// =======================
// Display Items
// =======================

function displayItems() {

    let list = document.getElementById("list");

    list.innerHTML = "";

    let grandTotal = 0;

    for (let i = 0; i < cart.length; i++) {

        grandTotal += cart[i].total;

        list.innerHTML += `
            <div class="row">

                <div>${cart[i].item}</div>

                <div>${cart[i].qty}</div>

                <div>${cart[i].unit}</div>

                <div>Rs ${cart[i].total}</div>

                <div>
                    <button class="remove-btn" onclick="removeItem(${i})">
                        Remove
                    </button>
                </div>

            </div>
        `;
    }

    document.getElementById("totalItems").innerHTML =
        "Total Items : " + cart.length;

    document.getElementById("totalPrice").innerHTML =
        "Total Price : Rs " + grandTotal;

}

// =======================
// Remove Item
// =======================

function removeItem(index) {

    cart.splice(index, 1);

    displayItems();

}