'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {

   let rows = table.lastElementChild.rows,
    lengthRows = rows.length-1,
    attrState = [],
    age = [];

   for (let i=0; i<=lengthRows; i++) {
      attrState.push(rows.item(i).lastElementChild.getAttribute('data-available'));  
      age.push(+rows.item(i).children[1].innerText);  

      if (attrState[i] === "true") {
         rows[i].classList.add("available");
      } else if (attrState[i] === "false") {
         rows[i].classList.add("unavailable");
      } else {
         rows.item(i).hidden = true;
      }

      if (rows.item(i).children[2].innerText === "m") {
         rows[i].classList.add("male");
      } else {
         rows[i].classList.add("female");
      }

      if (age[i] < 18) {
         rows.item(i).style.textDecoration = "line-through";
      }
   }
}