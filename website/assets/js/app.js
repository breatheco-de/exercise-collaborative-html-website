let filterItem = document.querySelectorAll(".filter-item")
let products = document.querySelectorAll(".prod-card")

filterItem.forEach(function(filterBtn) {
    filterBtn.addEventListener("click", function(){
        
        filterItem.forEach(function(btnPill){
            btnPill.classList.remove("active")
        })
        filterItem.classList.add("active")

        let filter = filterBtn.dataset.filter

        products.forEach(function(productCard) {
            if (filter === "todo") {
                productCard.style.display = "block"

            } else if (productCard.dataset.categoria === filter) {
                productCard.style.display = "block"
            
            } else {
                productCard.style.display = "none"
            }
        })
    })
})

let cart = []
let addCart = document.querySelectorAll(".add-btn")
let cartButton = document.querySelector(".cart-btn")

addCart.forEach(function(boton){
    boton.addEventListener("click", function() {

        let card = boton.closest(".product-card")
        let cardName = card.querySelector(".product-name").textContent
        let price =  card.querySelector(".product-price").textContent

        let existingProduct = cart.find(function(addedProducts) {
            return addedProducts.name === cardName
        })

        if (existingProduct) {
            existingProduct.quantity = existingProduct.quantity + 1
        } else {
            cart.push({ name: cardName, price: price, quantity: 1})
        }

        let totalProducts = cart.reduce(function(total, products) {
            return total + products.quantity
        }, 0)

        cartButton.textContent = "Cart (" + totalProducts + ")"
        console.log(cart)
    })
})

 