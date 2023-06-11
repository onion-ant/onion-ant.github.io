let divProdutos = document.getElementById("produtos");
fetch("https://fakestoreapi.com/products/")
  .then((res) => res.json())
  .then((data) => {
    let str = "";
    let produto;
    for (let i = 0; i < 8; i++) {
      produto = data[i];
      str += `<div class = "produto col-md-3 col-sm-6" onclick="openDatails(${produto.id})">
      <div><img src="${produto.image}"></div>
      <span>
        <h1>${produto.title}</h1>
        <p>$${produto.price}</p>
        <p>${produto.category}</p>
      </span>
</div>`;
    }
    for (let i = 14; i < 20; i++) {
      produto = data[i];
      str += `<div class = "produto col-md-3 col-sm-6" onclick="openDatails(${produto.id})">
      <div><img src="${produto.image}"></div>
      <span>
        <h1>${produto.title}</h1>
        <p>$${produto.price}</p>
        <p>${produto.category}</p>
      </span>
</div>`;
    }
    divProdutos.innerHTML = str;

    let pesquisa = document.querySelector("#pesquisa");
    let botão = document.querySelector("#pesquisa-botão");
    let produts = document.querySelectorAll(".produto");
    let nãoEncontrado = document.querySelector("#non");
    pesquisa.addEventListener("input", function () {
      const valor = pesquisa.value;
      if (valor) {
        pesquisa.addEventListener("keyup", function (e) {
          let key = e.which || e.keyCode;
          if (key == 13) {
            for (let produto of produts) {
              let titulo = produto.querySelector(".produto h1");
              titulo = titulo.textContent.toLowerCase();
              let filterText = pesquisa.value.toLowerCase();

              if (!titulo.includes(filterText)) {
                produto.classList.add("hide");
              } else {
                produto.classList.remove("hide");
              }
            }
          }
        });
        botão.addEventListener("click", function () {
          for (let produto of produts) {
            let titulo = produto.querySelector(".produto h1");
            titulo = titulo.textContent.toLowerCase();
            let filterText = pesquisa.value.toLowerCase();

            if (!titulo.includes(filterText)) {
              produto.classList.add("hide");
            } else {
              produto.classList.remove("hide");
            }
          }
        });
      } else {
        for (let produto of produts) {
          produto.classList.remove("hide");
        }
      }
    });
  });

function openDatails(id) {
  window.location.href = `detalhes.html?id=${id}`;
}
