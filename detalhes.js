const urlAtual = window.location.search;
let urlParams = new URLSearchParams(urlAtual);
let id = urlParams.get("id");
if (id == "null" || id == null) {
  window.location.href = `index.html`;
}

fetch(`https://fakestoreapi.com/products/${id}`)
  .then((res) => res.json())
  .then((produto) => {
    let html = `<img src="${produto.image}">
    <span>
    <div>
    <h1 class="titulo">${produto.title}</h1>
      <p class="preco">$${produto.price}</p>
      <p class="descricao">${produto.description}</p>
      </div>
    </span>`;

    document.getElementById("produto-detalhes").innerHTML = html;
  });
