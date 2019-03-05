/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
    let x = [];
        for (let key of data) {
            if (key["age"] <= age) {
            x.push(key["name"] + ", " + key["balance"]);
            }
        } 
  return x.join('\n');
}


