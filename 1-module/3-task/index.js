'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */


function getMinMax(str) {
    let obj = {
        min: 0,
        max: 0
            },
      re =/-?\d+(\.\d+)?/gi,
      arr = str.match(re);
      
       obj.max = Math.max.apply(null, arr);
       obj.min = Math.min.apply(null, arr);

    return obj;
};
