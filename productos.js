const priceFormatter = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN'
});

fetch('obtener_productos.php')
    .then(res => res.json())
    .then(products => {
        // Agrupar productos por sección
        const groupedProducts = products.reduce((acc, product) => {
            if (!acc[product.section]) {
            acc[product.section] = [];
            }
            acc[product.section].push(product);
            return acc;
        }, {});

        // Generar las secciones dinámicamente
        const productSections = document.getElementById('product-sections');
        Object.keys(groupedProducts).forEach(section => {
            // Crear título de la sección
            const sectionTitle = document.createElement('div');
            sectionTitle.classList.add('section-title');
            sectionTitle.textContent = section;
            productSections.appendChild(sectionTitle);

            // Crear contenedor para las tarjetas
            const productContainer = document.createElement('div');
            productContainer.classList.add('row', 'g-4', 'mb-4');
            groupedProducts[section].forEach((product) => {

                const {img, name, quantity, price } = product;
                // Crear tarjeta de producto
                const productCard = document.createElement('div');
                productCard.classList.add('col-md-3', 'product-card');
                productCard.innerHTML = `
                    <div class="card">
                        <img src="Imagenes/${img}" class="card-img-top" alt="${name}">
                        <div class="card-body text-align: left">
                            <p>Producto: ${name}</p>
                            <p>Cantidad: ${quantity}</p>
                            <p class="fw-bold">Precio: ${priceFormatter.format(price)}</p>
                            <button class="add-to-cart-btn">Añadir al carrito</button>
                        </div>
                    </div>
                `;

                const addToCartBtn = productCard.querySelector('.add-to-cart-btn');
                addToCartBtn.addEventListener('click', () => {
                    addToCart(product);
                })

                productContainer.appendChild(productCard);
            });
            productSections.appendChild(productContainer);
        });
    })
    .catch(error => console.error('Error al cargar los productos:', error))

// Agregar al carrito
const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingProduct = cart.find(p => p.id === product.id);
    if(existingProduct) {
        existingProduct.quantityInCart += 1;
    }else{
        let productToCart = {...product, quantityInCart: 1};
        cart.push(productToCart)
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartSizeNotification();
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
updateCartSizeNotification();