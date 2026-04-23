document.addEventListener('click', (e) => {
    if (!window.myCart) window.myCart = [];

    // BOTÓN AÑADIR (Desde la tienda)
    if (e.target && e.target.classList.contains('add-to-cart-btn')) {
        const btn = e.target;
        const productId = btn.getAttribute('data-id');
        const existingItem = window.myCart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            window.myCart.push({
                id: productId,
                name: btn.getAttribute('data-name'),
                price: parseFloat(btn.getAttribute('data-price')),
                quantity: 1
            });
        }
        renderCart();
    }

    // BOTÓN MÁS (+) (Dentro de la cesta)
    if (e.target && e.target.classList.contains('qty-plus')) {
        const id = e.target.getAttribute('data-id');
        const item = window.myCart.find(item => item.id === id);
        if (item) item.quantity += 1;
        renderCart();
    }

    // BOTÓN MENOS (-) (Dentro de la cesta)
    if (e.target && e.target.classList.contains('qty-minus')) {
        const id = e.target.getAttribute('data-id');
        const item = window.myCart.find(item => item.id === id);
        if (item && item.quantity > 1) {
            item.quantity -= 1;
        } else {
            // Si es 1 y dan a menos, lo eliminamos
            window.myCart = window.myCart.filter(i => i.id !== id);
        }
        renderCart();
    }

    // BOTÓN ELIMINAR (La X)
    if (e.target && e.target.classList.contains('remove-btn')) {
        const id = e.target.getAttribute('data-id');
        window.myCart = window.myCart.filter(item => item.id !== id);
        renderCart();
    }
});

function renderCart() {
    const container = document.getElementById('cart-items');
    const countDisplay = document.getElementById('cart-count');
    const totalDisplay = document.getElementById('cart-total-price');

    if (!container) return;
    container.innerHTML = '';
    let total = 0;
    let totalItemsCount = 0;

    if (window.myCart.length === 0) {
        container.innerHTML = '<p class="empty-cart-msg">Tu cesta está vacía.</p>';
    } else {
        window.myCart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            totalItemsCount += item.quantity;

            const div = document.createElement('div');
            div.className = 'cart-item';
            div.style.cssText = 'display:flex; justify-content:space-between; align-items:center; margin-bottom:15px; padding-bottom:10px; border-bottom:1px solid #333;';
            
            div.innerHTML = `
                <div style="flex-grow: 1;">
                    <p style="margin:0; font-size:0.9rem;"><strong>${item.name}</strong></p>
                    <div style="display:flex; align-items:center; gap:10px; margin-top:5px;">
                        <button class="qty-minus" data-id="${item.id}" style="cursor:pointer; width:25px; height:25px; border:1px solid #555; background:none; color:white; border-radius:4px;">-</button>
                        <span style="font-size:0.9rem;">${item.quantity}</span>
                        <button class="qty-plus" data-id="${item.id}" style="cursor:pointer; width:25px; height:25px; border:1px solid #555; background:none; color:white; border-radius:4px;">+</button>
                        <span style="color:#00f0ff; margin-left:10px;">$${itemTotal.toFixed(2)}</span>
                    </div>
                </div>
                <button class="remove-btn" data-id="${item.id}" style="cursor:pointer; background:none; border:none; color:#ff0033; font-size:1.2rem; margin-left:10px;">×</button>
            `;
            container.appendChild(div);
        });
    }

    if (countDisplay) countDisplay.textContent = totalItemsCount;
    if (totalDisplay) totalDisplay.textContent = `$${total.toFixed(2)}`;
}