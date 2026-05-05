const products = [
  {
    name: "ROYA Oud Noir",
    price: 89,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "ROYA Rose Impériale",
    price: 74,
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "ROYA Ambre Royal",
    price: 96,
    image: "https://images.unsplash.com/photo-1615634262417-678b8b6a9be9?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "ROYA Citrus Élégance",
    price: 68,
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?auto=format&fit=crop&w=800&q=80"
  }
];

const catalogue = document.getElementById("catalogue");
const cartCount = document.getElementById("cartCount");
let cart = 0;

products.forEach((product) => {
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <div class="card-content">
      <h3>${product.name}</h3>
      <p class="price">${product.price} €</p>
      <button class="cart-btn">Ajouter au panier</button>
    </div>
  `;

  card.querySelector("button").addEventListener("click", () => {
    cart += 1;
    cartCount.textContent = cart;
  });

  catalogue.appendChild(card);
});
