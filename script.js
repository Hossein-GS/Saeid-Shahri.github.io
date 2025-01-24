function toggleMobileNav() {
    const mobileNav = document.getElementById("mobile-nav");
    mobileNav.classList.toggle("open");
}

function handleProductClick(productName) {
    //alert(`You clicked on ${productName}`);
    // Add your redirection or additional logic here
    if (productName === "Dry Fruits & Nuts") {
        window.location.href = "shop.html#dry-fruits-nuts";
    } 
    else if (productName === "Spices & Herbs") {
        window.location.href = "shop.html#spices-herbs";
    } 
    else if (productName === "Coffee & Tea") {
        window.location.href = "shop.html#coffee-tea";
    } 
    else if (productName === "Chocolate & Confectionary") {
        window.location.href = "shop.html#chocolate-confectionary";
    } else {
        alert("Product not found");
    }
}


// Show button when scrolling down 100px
window.onscroll = function() { showBackToTopButton() };

function showBackToTopButton() {
    const button = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


function addToCart(productName, productPrice) {
    alert(`${productName} has been added to your cart for $${productPrice.toFixed(2)}!`);
}


//let quantity = 1; // Initial quantity

/*
function changeQuantity(amount) {
    const maxQuantity = 50; // Set your maximum limit
    const minQuantity = 1;  // Set your minimum limit

    quantity += amount;

    // Ensure quantity stays within the valid range
    if (quantity < minQuantity) {
        quantity = minQuantity;
    } else if (quantity > maxQuantity) {
        quantity = maxQuantity;
    }

    // Update the displayed quantity
    document.getElementById("quantity-display").textContent = quantity;
}*/

function changeQuantity(amount, productId) {
    const maxQuantity = 50; // Set your maximum limit
    const minQuantity = 1;  // Set your minimum limit

    let quantity = parseInt(document.getElementById(`quantity-display-${productId}`).textContent);
    console.log(quantity);
    quantity += amount;

    // Ensure quantity stays within the valid range
    if (quantity < minQuantity) {
        quantity = minQuantity;
    } else if (quantity > maxQuantity) {
        quantity = maxQuantity;
    }

    // Update the displayed quantity
    document.getElementById(`quantity-display-${productId}`).textContent = quantity;
}

