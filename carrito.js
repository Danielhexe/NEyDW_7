const cart = [
    { section: "Alimentos", image: "img/mermelada.jpg", brand: "Marca A", name: "Producto A", quantity: "500g", price: "$10" },
    { section: "Proteínas", image: "img/vitalproteins.jpg", brand: "Marca B", name: "Producto B", quantity: "1kg", price: "$20" },
    { section: "Proteínas", image: "img/gardenoflife.jpg", brand: "Marca C", name: "Proteína C", quantity: "750g", price: "$30" },
    { section: "Proteínas", image: "img/orgain.jpg", brand: "Marca D", name: "Proteína D", quantity: "500g", price: "$25" }
];


const products = document.getElementById('productos');
cart.forEach(({ image, brand, name, quantity, price }) => {
    const productCard = document.createElement('div');
    productCard.classList.add('producto');
    productCard.innerHTML = `
        <img src="${image}" alt="producto">
        <div class="info-producto">
            <h3>${name}</h3>
            <p>${quantity}</p>
        </div>
        <div class="precio-producto">
            <p>${price}</p>
            <span>Total: $30.0 mxn</span>
            <div class="cantidad">
                <input type="number" min="0" max="10" maxlength="2" value="3">
            </div>
        </div>
    `;
    products.appendChild(productCard);
});
