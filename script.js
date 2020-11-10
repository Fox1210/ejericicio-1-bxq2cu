// En este ejercicio deberéis crear un array de objetos a partir de la siguiente lista de usuarios:
//  * name: usuario1, country: spain, money: 199, premiumAccount: true
//  * name: usuario2, country: france, money: 0, premiumAccount: false
//  * name: usuario3, country: spain, money: 537, premiumAccount: false
//  * name: usuario4, country: italy, money: 1004, premiumAccount: true
//  * name: usuario5, country: spain, money: 250, premiumAccount: false
//  * name: usuario6, country: ireland, money: 799, premiumAccount: true
//  * name: usuario7, country: spain, money: 3345, premiumAccount: false

// Este array de usuarios debe generarse en una función llamada "createUsers". Al generar el array hay que asignarlo a una variable que haya sido declarada globalmente fuera de la función.

// Después de crear el array, deberéis realizar un filtrado empleando el método del objeto "Array", "filter".
// Este filtrado deberá generar otro array con los usuarios que sean de españa y que tengan más de 200 euros.
// El filtrado se realizará desde una función llamada "filterUsers" que recibirá por parámetros la lista de usuarios y devolverá el array filtrado.
// Las dos últimas instrucciones de la función "onLoad" deben ser dos console.log para mostrar los dos arrays.
// Utilizad constantes siempre que sea posible.
// Suerte!

window.addEventListener("load", onLoad);
var arrayUsuarios;
var arrayUsuariosFiltrado;

function onLoad() {
  console.log("hi");
  createUsers();
  console.log(arrayUsuarios[0].name);
  arrayUsuariosFiltrado = filterUsers(arrayUsuarios);
  console.log(arrayUsuarios);
  console.log(arrayUsuariosFiltrado);
}
//funcion que devuelve un array de usuarios
function createUsers() {
  let user1 = {
    name: "usuario1",
    country: "spain",
    money: 199,
    premiumAccount: true
  };
  let user2 = {
    name: "usuario2",
    country: "france",
    money: 0,
    premiumAccount: false
  };
  let user3 = {
    name: "usuario3",
    country: "spain",
    money: 537,
    premiumAccount: false
  };
  let user4 = {
    name: "usuario4",
    country: "italy",
    money: 1004,
    premiumAccount: true
  };
  let user5 = {
    name: "usuario5",
    country: "spain",
    money: 250,
    premiumAccount: false
  };
  let user6 = {
    name: "usuario6",
    country: "ireland",
    money: 799,
    premiumAccount: true
  };
  let user7 = {
    name: "usuario7",
    country: "spain",
    money: 3345,
    premiumAccount: false
  };
  arrayUsuarios = [user1, user2, user3, user4, user5, user6, user7];
}

//filtra el arrayUsuarios y devuelve un array con los usuarios spain y cuyo salario mas de 200
function filterUsers(arrayUsuarios) {
  let usuariosFiltados = [];
  for (var i = 0; i < arrayUsuarios.length; i++) {
    if (arrayUsuarios[i].country == "spain" && arrayUsuarios[i].money > 200) {
      usuariosFiltados.push(arrayUsuarios[i]);
    }
  }
  return usuariosFiltados;
}
