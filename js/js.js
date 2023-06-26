
const champions = [
    {
      nombre: "Viego",
      descripcion: "el es el rey arruinado",
    },
    {
      nombre: "Nasus",
      descripcion: "El gran sabio de shurima",
    },
    {
      nombre: "Vayne",
      descripcion: "Una cazadora letal",
    },
  ];
  

  function generarListaCampeones() {
    const championList = document.getElementById("champion-list");
  
    champions.forEach((champion) => {
      const listItem = document.createElement("li");
      listItem.textContent = champion.nombre;
      championList.appendChild(listItem);
    });
  }
  

  window.addEventListener("DOMContentLoaded", generarListaCampeones);

const runas = [
    {
      nombre: "Conquistador",
      descripcion: "",
    },
    {
      nombre: "Lluvia de espadas",
      descripcion: "",
    },
    {
      nombre: "Agarre del perpetuo",
      descripcion: "",
    },
  ];

  function generarCartasRunas() {
    const runasContainer = document.getElementById("runas-container");
  
    runas.forEach((runa) => {
      const runaCard = document.createElement("div");
      runaCard.classList.add("runa-card");
  
      const runaImage = document.createElement("img");
      runaImage.src = "runa.jpg";
      runaImage.alt = "Runa";
      runaCard.appendChild(runaImage);
  
      const runaTitle = document.createElement("h3");
      runaTitle.textContent = runa.nombre;
      runaCard.appendChild(runaTitle);
  
      const runaDescription = document.createElement("p");
      runaDescription.textContent = runa.descripcion;
      runaCard.appendChild(runaDescription);
  
      runasContainer.appendChild(runaCard);
    });
  }
  
  window.addEventListener("DOMContentLoaded", generarCartasRunas);


const objetos = [
    {
      nombre: "Statik",
      descripcion: "",
    },
    {
      nombre: "Espada del rey arruinado",
      descripcion: "",
    },
    {
      nombre: "MataKrakens",
      descripcion: "",
    },
  ];
  
  function generarCartasObjetos() {
    const objetosContainer = document.getElementById("objetos-container");
  
    objetos.forEach((objeto) => {
      const objetoCard = document.createElement("div");
      objetoCard.classList.add("objeto-card");
  
      const objetoImage = document.createElement("img");
      objetoImage.src = "objeto.jpg";
      objetoImage.alt = "Objeto";
      objetoCard.appendChild(objetoImage);
  
      const objetoTitle = document.createElement("h3");
      objetoTitle.textContent = objeto.nombre;
      objetoCard.appendChild(objetoTitle);
  
      const objetoDescription = document.createElement("p");
      objetoDescription.textContent = objeto.descripcion;
      objetoCard.appendChild(objetoDescription);
  
      objetosContainer.appendChild(objetoCard);
    });
  }
  

  window.addEventListener("DOMContentLoaded", generarCartasObjetos);
  
  