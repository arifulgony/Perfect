$(document).ready(function() {
    $('.person-slider').slick({
      slidesToShow: 5,
      asNavFor: ".text-slider",
      centerMode: true,
      centerPadding: "0px",
      arrows: false,
    });
    $(".text-slider").slick({
      asNavFor: ".person-slider",
      focusOnSelect: true,
      prevArrow:
        '<span class="priv_arrow"><i class="fa-solid fa-angle-left"></i></span>',
      nextArrow:
        '<span class="next_arrow"><i class="fa-solid fa-angle-right"></i></span>',
    });
  });
   
 
 //header
 function toggleMenu() {
            var toggle = document.querySelector(".toggle");
            var nav = document.querySelector(".nav");
            toggle.classList.toggle("active");
            nav.classList.toggle("active");
        }

//card
const plansSwitch = document.querySelector(".plans-switch");
const basicPrice = document.querySelector(".basic-price");
const professionalPrice = document.querySelector(".professional-price");
const businessPrice = document.querySelector(".business-price");
const planDuration = document.querySelectorAll(".plan-duration");

plansSwitch.addEventListener("change", () => {
  if (plansSwitch.checked) {
    basicPrice.innerText = "$220";
    professionalPrice.innerText = "$499";
    businessPrice.innerText = "$799";
    planDuration.forEach((p) => {
      p.innerText = "/ year";
    });
  } else {
    basicPrice.innerText = "$20";
    professionalPrice.innerText = "$48";
    businessPrice.innerText = "$80";
    planDuration.forEach((p) => {
      p.innerText = "/ month";
    });
  }
});

//active button
var header = document.getElementById("myBtn");
var btns = header.getElementsByClassName("tapbtn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
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