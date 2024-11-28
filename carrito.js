let cart = JSON.parse(localStorage.getItem('cart')) || [];
console.log(cart);

const priceFormatter = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN'
});

const products = document.getElementById('productos');

const renderCart = () => {
    products.innerHTML = '';
    if(cart.length > 0){
        cart.forEach(({ img, name, quantity, price, quantityInCart}, index) => {
            const productCard = document.createElement('div');
            productCard.classList.add('producto');
            productCard.innerHTML = `
                <img src="Imagenes/${img}" alt="producto">
                <div class="info-producto">
                    <h3>${name}</h3>
                    <p>${quantity}</p>
                </div>
                <div class="precio-producto">
                    <p>${priceFormatter.format(price)} mxn</p>
                    <span class="total-producto">Total: ${priceFormatter.format(quantityInCart * price)} mxn</span>
                    <div class="cantidad"> 
                        <label for="quant${index}">Cantidad: </label>
                        <input id="quant${index}" type="number" min="0" max="10" maxlength="2" value="${quantityInCart}" data-index="${index}">
                        <button data-index="${index}" class="del-btn">
                           Borrar
                        </button>
                    </div>
                </div>
            `;
            products.appendChild(productCard);
        });    

        updateCartTotal();
    }else{
        const text = document.createElement('p');
        text.innerHTML = "Carrito vacio";
        text.classList.add('carrito-vacio');
        products.appendChild(text);
    }
}

const addListeners = () => {
    const inputs = document.querySelectorAll('.cantidad input');
    inputs.forEach(input => {
        input.addEventListener('change', handleQuantChange);
    })

    const deleteButtons = document.querySelectorAll('.del-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', handleDeleteProduct);
    });
}

const handleQuantChange = (event) => {
    const input = event.target;
    let newQuant = parseInt(input.value);
    const index = parseInt(input.getAttribute('data-index'));

    if(isNaN(newQuant) || newQuant < 1) {
        newQuant = 1;
        input.value = 1;
    }else if(newQuant > 10){
        newQuant = 10;
        input.value = 10;
    }

    cart[index].quantityInCart = newQuant;

    localStorage.setItem('cart', JSON.stringify(cart));

    updateProductTotalPrice(index);
    updateCartTotal();
}

const updateProductTotalPrice = (index) => {
    const productTotalElement = products.querySelectorAll('.total-producto')[index];
    const product = cart[index];
    const totalPrice = product.quantityInCart * product.price;
    productTotalElement.textContent = `Total: ${priceFormatter.format(totalPrice)} mxn`;
}

const updateCartTotal = () => {
    let total = 0;
    cart.forEach(product => {
        total += product.quantityInCart * product.price;
    });
    const cartTotalElement = document.querySelector('.cart-total');
    if (cartTotalElement) {
        cartTotalElement.innerHTML = `Total: ${priceFormatter.format(total)}`;
    }
}

const handleDeleteProduct = (event) => {
    const index = parseInt(event.target.getAttribute('data-index'));
    cart.splice(index, 1);

    localStorage.setItem('cart', JSON.stringify(cart));

    updateCartSizeNotification();
    updateCartTotal()
    renderCart();
    addListeners();
}

const updateCartSizeNotification = () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const size = cart.length;
    const notification = document.querySelector('.cart-size');
    if(size > 0){
        notification.style.visibility = 'visible';
        notification.innerHTML = size;
    }else{
        notification.style.visibility = 'hidden';
    }
}

const checkout = () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if(cart.length > 0){
        window.location.href = './formulario.html';
    }
}

updateCartSizeNotification();
renderCart();
addListeners();