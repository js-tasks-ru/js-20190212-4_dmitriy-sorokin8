/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
"use strict";

   let m = +prompt("Введите число"),
       n = +prompt("Введите степень");

function pow (m, n) {

   if ((m >= 1) & (n >= 1)) {
     let res = 1;
       for (let i=0; i<n; i++) {
         res *= m;
       }
       return(res);
   } else {
       return("числа должны быть больше 1");
   }
 }

 alert(pow(m,n));