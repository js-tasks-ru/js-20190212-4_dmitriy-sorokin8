(function () {

    class Tooltip {

        /**
         * Имя компонента
         * @property {string}
         */
        get name() {
            return 'tooltip';
        }

        /**
         * Обязательный отступ
         */
        get indent() {
            return 5;
        }

        constructor() {

            this.el = document.createElement('div');
            this.el.style.position = 'absolute';

            this.el.classList.add(this.name);
            document.body.appendChild(this.el);
        }

        attach(root) {
            let el = this.el;
            document.onmouseover = e => {
                let target = e.target;
                const atr = target.getAttribute('data-tooltip');

                if (!atr) {return}
                this.el.innerHTML = atr;
                this.el.classList.add('tooltip_active');       
                
                let coord = target.getBoundingClientRect();
                const heightDoc = document.documentElement.clientHeight;

                let left = coord.left + (target.offsetWidth - this.el.offsetWidth) / 2;
                    if (left < 0) left = 8;

                    let top = coord.top + target.offsetHeight + this.indent;
                    if (heightDoc - top < this.el.offsetHeight) {
                      top = coord.top - (this.el.offsetHeight + this.indent);
                    }
      
                this.el.style.left = left + 'px';
                this.el.style.top = top + 'px';


                let tooltips = this.el;
                let span = document.querySelector('.left_top');

                let spanRect = span.getBoundingClientRect();
                let elRect = tooltips.getBoundingClientRect();

                console.log(spanRect.bottom < elRect.top);
                console.log(spanRect.left === elRect.left);
                console.log(spanRect.left);
                console.log(elRect.left);

            };

            document.onmouseout = e => {
                this.el.classList.remove('tooltip_active');
            }
        }
        /**
         * Удаляет все обработчики событий
         */
        detach() {
            document.onmouseover = e => {
                e.preventDefault();
            }
        }
    }
    
    window.Tooltip = Tooltip;
})();