const products = [
  {
    name: "Iphone",
    price: 10000,
    qte: 0,
    img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp",
  },
  {
    name: "Samsung",
    price: 2000,
    qte: 0,
    img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp",
  },
  {
    name: "Mac Pro",
    price: 5000,
    qte: 0,
    img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp",
  },
];

var theRooot = document.getElementById("root");

function buildDOM() {
  products.forEach((product) => {
    var productroot = document.createElement("div");
    productroot.classList.add("pdt");

    // Name of Product
    var productTitle = document.createElement("h1");
    productTitle.innerHTML = product.name;

    // Price of Product
    var productPrice = document.createElement("h4");
    productPrice.innerHTML = product.price;

    // Image of Product
    var productIMG = document.createElement("img");
    productIMG.setAttribute("src", product.img);

    var InputQte = document.createElement("input");
    InputQte.setAttribute("type", "number");
    InputQte.setAttribute("value", product.qte);

    InputQte.addEventListener("change", (e) => {
      product.qte = e.target.value;
      document.querySelector("#totalPrices").value = totalPrices();
    });

    theRooot.appendChild(productroot);
    productroot.appendChild(productTitle);
    productroot.appendChild(productPrice);
    productroot.appendChild(productIMG);
    productroot.appendChild(InputQte);

    // // Quantity of Product
    // var productqte = document.createElement('h1');
    // product.classList.add("produit")
    // productqte.innerHTML=item.product;

    // Read Only Input

    // Remove element
    let delete_item = document.createElement("i");
    delete_item.classList.add(["fa-solid"]);
    delete_item.classList.add(["fa-xmark"]);

    delete_item.style.color = "red";

    productroot.appendChild(delete_item);
    delete_item.addEventListener("click", function () {
      theRooot.removeChild(productroot);
    });

    let heart = document.createElement("i");
    heart.classList.add(["fa-heart"]);
    heart.classList.add(["fa-regular"]);

    productroot.appendChild(heart);

    heart.addEventListener("click", function () {
      heart.classList.toggle("fa-solid");
      heart.style.color = "red";
    });
  });
}

buildDOM();

(total = document.createElement("input")),
  total.setAttribute("readonly", "readonly");
total.setAttribute("id", "totalPrices");
total.setAttribute("placeholder", "total price");
theRooot.appendChild(total);

function totalPrices() {
  return products.reduce((s, p) => s + p.price * p.qte, 0);
}
