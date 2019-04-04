(function () {
    'use strict';

    class ClearedTable {

        constructor(data) {

            this.el = document.createElement('table');
            this.data = data;
            let thead = document.createElement('thead'),
            tbody = document.createElement('tbody');

            this.el.classList.add("pure-table");
            thead.innerHTML = `<tr><td>Name</td><td>Age</td><td>Salary</td><td>City</td><td></td></tr>`;

            this.el.appendChild(thead);
            this.el.appendChild(tbody);

            function render (arr) {

                tbody.innerHTML = arr.filter(item => typeof item === "object")
                    .map(item =>`<tr><td>${item.name}</td><td>${item.age}</td><td>${item.salary}</td><td>${item.city}</td><td><a href="#delete">X</a></td></tr>`).join(" ");
            }


            render(this.data);

            this.el.onclick =  e => {
                let target = e.target;
                let row = target.parentNode.parentNode;
                let id = row.rowIndex;

             this.el.deleteRow(id);
             this.onRemoved(id);

            }
        }
        
        onRemoved(id) {
            console.log(`Из таблицы удален пользователь ${id}`);
        }

        
    }

    window.ClearedTable = ClearedTable;
})();
