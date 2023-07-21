const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// EJERCICIO 1
console.log("----- EJERCICIO 1 -----");

function idImpar(ids){
  ids.forEach((id) => {
    if (id.id % 2 === 1){
      console.log("las pizzas con id impar son " + id.nombre + " - id: " + id.id );
    }
  });
}

idImpar(pizzas);

// EJERCICIO 2
console.log("----- EJERCICIO 2 -----");

function pizzasBaratas(precios){
  pizzas600 = [];
  precios.forEach((precio) => {
    if (precio.precio <= 600){
      pizzas600.push(precio.nombre);
    }
  })
  console.log("si hay pizzas de menos de 600$, la " + pizzas600[0] + " y la " + pizzas600[1] + ".");
}

pizzasBaratas(pizzas);

// EJERCICIO 3
console.log("----- EJERCICIO 3 -----");

function pizzaConPrecio(pyp){
  pyp.forEach((pizzaprecio) => {
    console.log("La " + pizzaprecio.nombre + " cuesta $" + pizzaprecio.precio)
  })
}

pizzaConPrecio(pizzas);

// EJERCICIO 4 
console.log("----- EJERCICIO 4 -----");

function pizzaIngredientes(pi){
  pi.forEach((ingredientes) => {
    ingredientes.ingredientes.forEach((ingr) => {
      console.log("los ingredientes de la " + ingredientes.nombre + " son " + ingredientes.ingredientes + ".");
    })
  })
}

pizzaIngredientes(pizzas);
