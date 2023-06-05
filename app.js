/*document.querySelector('h3');
console.log(document.querySelector('h3'));
console.log(document.querySelector('.h3-danger'));
console.log(document.querySelector('#parrafo'));
console.log(document.getElementById('parrafo'));

console.log(document.querySelectorAll('.h3-danger'));

felipe77

const parrafo = document.querySelector('#parrafo');
parrafo.textContent = "Texto desde JS";
parrafo.innerHTML ='<b> texto con innerHTML</b>'
parrafo.classList.add('h3-daanger')

*/
const lista = document.getElementById("lista");
//console.log(lista);

const arrayElement = ["primer elemento", "segundo", "tercero"];
//arrayElement.forEach((item) => {
  //console.log(item);

//const li = document.createElement("li");
//  li.textContent = item;

  //lista.appendChild(li);

//});

arrayElement.forEach(item =>{
  lista.innerHTML += `<li>${item}</li>`
})