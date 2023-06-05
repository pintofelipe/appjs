

const lista = document.getElementById("lista");


const arrayItem = ["item1","item2","item3"];


const fragment = document.createDocumentFragment();

arrayItem.forEach(item=>{
  const li = document.createElement('li');
  li.textContent = item;

  const childNode = fragment.firstChild;
  console.log(item, childNode);


  fragment.insertBefore(li,childNode);
  //fragment.appendChild(li);
});

lista.appendChild(fragment);