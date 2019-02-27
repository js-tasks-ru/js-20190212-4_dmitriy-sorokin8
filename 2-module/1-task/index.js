/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone (el) {
   let clon = {};
        
        for(let key in el){
        
            if (typeof el[key] === 'object' && el[key] !== null){
                clon[key] = clone(el[key]);
            }  else {
                clon[key] = el[key];
            }
        }
    
    return clon;
}