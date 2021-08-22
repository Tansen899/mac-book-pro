const bestPrice = document.getElementById("best-price");
const extraMemoryCost = document.getElementById("memory-cost");
const extraStorageCost = document.getElementById("storage-cost");
const deliveryCost = document.getElementById("delivery-cost");
const totalPrice = document.getElementById("total-price");
const totalPriceToo = document.getElementById("total-price-too");

// Total Price
function totalFullPrice() {
    totalPrice.innerText =
        parseInt(bestPrice.innerText) +
        parseInt(extraMemoryCost.innerText) +
        parseInt(extraStorageCost.innerText) +
        parseInt(deliveryCost.innerText);

    totalPriceToo.innerText =
        parseInt(bestPrice.innerText) +
        parseInt(extraMemoryCost.innerText) +
        parseInt(extraStorageCost.innerText) +
        parseInt(deliveryCost.innerText);
}

// 0 dollar all function

function smallest(small) {
    const extraMemoryCost = document.getElementById(small);
    extraMemoryCost.innerText = 0;
    totalFullPrice();
};

// 180$ cost all function

function cost180(cost) {
    cost.innerText = 180;
    totalFullPrice();
}

// Memory 16gb part

document.getElementById("memory-16gb").addEventListener("click", function () {
    cost180(extraMemoryCost);
});

// Storage 256gb part

document.getElementById("storage-256gb").addEventListener("click", function () {
    extraStorageCost.innerText = 100;
    totalFullPrice();
});

// Storage 1tb part

document.getElementById("storage-1tb").addEventListener("click", function () {
    cost180(extraStorageCost);
});

// Fast delivery part

document.getElementById("fast-delivery").addEventListener("click", function () {
    deliveryCost.innerText = 20;
    totalFullPrice();
});

// promo code apply

document.getElementById("promo-apply").addEventListener("click", function () {
    const promoCode = document.getElementById("promo-code");
    if (promoCode.value == "stevekaku") {
        const tax = (totalPrice.innerText * 20) / 100;
        totalPriceToo.innerText = totalPriceToo.innerText - tax;
        promoCode.value = "";
        document.getElementById("promo-apply").disabled = true;
    }
});