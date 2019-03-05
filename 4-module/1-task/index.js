'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList (friends) {
   const arr = friends.filter(item => typeof item === "object")
               .map(item => `<li>${item.firstName}, ${item.lastName} </li>`)
               .join('\n');
  let html = document.createElement('UL'),
      out = html.innerHTML = arr;

   return html;
}
