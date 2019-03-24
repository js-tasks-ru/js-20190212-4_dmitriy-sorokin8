'use strict';
function SortableTable(items) {
    this.a = items;
    this.el = document.createElement('table');

    let thead = document.createElement('thead'),
        tbody = document.createElement('tbody'); 
    
    this.el.classList.add("result__table");
    thead.classList.add("result__Thead");
    tbody.classList.add("result__Tbody");    
    thead.innerHTML = `<tr><td>Name</td><td>Age</td><td>Salary</td><td>Country</td></tr>`;
    
    this.el.appendChild(thead);
    this.el.appendChild(tbody);


    function render (arr) {

        tbody.innerHTML = arr.filter(item => typeof item === "object")
               .map(item =>`<tr><td>${item.name}</td><td>${item.age}</td><td>${item.salary}</td><td>${item.city}</td></tr>`).join(" ");
    }

    function compare(field, param) {
        return function(a, b) {
           if (param == true) {
            return a[field] < b[field] ? 1 : -1
           } else {
            return a[field] > b[field] ? 1 : -1
           }   
        }
    }

    this.sort = function (column, desc = false) { 
        if (column == 0 && desc == true) {
            this.a.sort(compare('name', desc));
           } else if (column == 0) {
            this.a.sort(compare('name'));
           } else if (column == 2) {
             this.a.sort(compare('salary'));
           }
        render(this.a);
    }

    render(this.a);
}

