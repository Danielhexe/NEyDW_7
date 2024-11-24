// Datos simulados con atributo "section"
const products = [
    { section: "Alimentos", image: "img/mermelada.jpg", brand: "Marca A", name: "Producto A", quantity: "500g", price: "$10" },
    { section: "Proteínas", image: "img/vitalproteins.jpg", brand: "Marca B", name: "Producto B", quantity: "1kg", price: "$20" },
    { section: "Proteínas", image: "img/gardenoflife.jpg", brand: "Marca C", name: "Proteína C", quantity: "750g", price: "$30" },
    { section: "Proteínas", image: "img/orgain.jpg", brand: "Marca D", name: "Proteína D", quantity: "500g", price: "$25" }
];

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
    groupedProducts[section].forEach(({ image, brand, name, quantity, price }) => {
        // Crear tarjeta de producto
        const productCard = document.createElement('div');
        productCard.classList.add('col-md-3', 'product-card');
        productCard.innerHTML = `
            <div class="card">
                <img src="${image}" class="card-img-top" alt="${name}">
                <div class="card-body text-align: left">
                    <p>Producto: ${name}</p>
                    <p>Cantidad: ${quantity}</p>
                    <p class="fw-bold">Precio: ${price}</p>
                    <button class="add-to-cart-btn">Añadir al carrito</button>
                </div>
            </div>
        `;
        productContainer.appendChild(productCard);
    });
    productSections.appendChild(productContainer);
});
