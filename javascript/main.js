 //header
 function toggleMenu() {
            var toggle = document.querySelector(".toggle");
            var nav = document.querySelector(".nav");
            toggle.classList.toggle("active");
            nav.classList.toggle("active");
        }

//Accoding
        const items = document.querySelectorAll(".accordion button");

        function toggleAccordion() {
            const itemToggle = this.getAttribute('aria-expanded');

            items.forEach(item => {
                item.setAttribute('aria-expanded', 'false');
            })

            if (itemToggle == 'false') {
                this.setAttribute('aria-expanded', 'true');
            }
        }

        items.forEach(item => item.addEventListener('click', toggleAccordion));