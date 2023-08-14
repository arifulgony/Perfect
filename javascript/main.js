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
/*========= Testimonials ==============*/
const sliderElm = document.querySelector(".container_slider .slider")
const btnLeft = document.querySelector(".container_slider .btn-left")
const btnRight = document.querySelector(".container_slider .btn-right")
const numberSliderBoxs = sliderElm.children.length;
let idxCurrentSlide = 0;

function moveSlider() {
let leftMargin = (sliderElm.clientWidth / numberSliderBoxs) * idxCurrentSlide;
sliderElm.style.marginLeft = -leftMargin + "px";
console.log(sliderElm.clientWidth, leftMargin);
}
function moveLeft() {
if (idxCurrentSlide === 0) idxCurrentSlide = numberSliderBoxs - 1;
else idxCurrentSlide--;
moveSlider();
}
function moveRight() {
if (idxCurrentSlide === numberSliderBoxs - 1) idxCurrentSlide = 0;
else idxCurrentSlide++;
moveSlider();
}

btnLeft.addEventListener("click", moveLeft);
btnRight.addEventListener("click", moveRight);
window.addEventListener("resize", moveSlider);


//active button accoding
 var button1 = document.getElementById("General"); 
 var button2 = document.getElementById("Transactions"); 
 var button3 = document.getElementById("Payment"); 
 var button4 = document.getElementById("Returns"); 
 var button5 = document.getElementById("Carrers"); 
 var button6 = document.getElementById("Others"); 
 function activateButton(event) {
     var target = event.target;
     var buttons = [button1, button2, button3,button4, button5, button6]; 
     for (var i = 0; i < buttons.length; i++) {
         var button = buttons[i];
         if (button == target) {
             button.style.backgroundColor = "#605bfe";
             button.style.color = "white";
             button.style.padding = "20px";
         } else {
             button.style.backgroundColor = "white";
             button.style.color = "black"
             button.style.padding = "0px";;
         }
     }
 }
 button1.addEventListener("click", activateButton);
 button2.addEventListener("click", activateButton);
 button3.addEventListener("click", activateButton);
 button4.addEventListener("click", activateButton);
 button5.addEventListener("click", activateButton);
 button6.addEventListener("click", activateButton);


// accoding data 
function showGeneral() {
    var info = document.getElementById("info");
    info.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur molestiae assumenda nihil, eveniet quisquam repudiandae mollitia obcaecati eos, cupiditate sequi sed deleniti, ab at! Rem tempora sed dicta atque consequatur consequuntur saepe quisquam repudiandae officia perferendis sapiente, qui commodi iure possimus, accusamus explicabo? Perspiciatis tempora, harum esse, blanditiis  totam, deleniti asperiores eos?";
}
function showTransactions() {
    var info = document.getElementById("info");
    info.innerHTML = ` <div class="accordion" >
    <div class="accordion-item">
        <button aria-expanded="true"><span class="accordion-title">Where can I get technical help for online transactions?</span><span
                class="icon" aria-hidden="true"></span></button>
        <div class="accordion-content">
            <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
    </div>
    <div class="accordion-item">
        <button aria-expanded="false"><span class="accordion-title">How do I signup for the trail?</span><span class="icon"
                aria-hidden="true"></span></button>
        <div class="accordion-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore
                magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse
                potenti.</p>
        </div>
    </div>
    <div class="accordion-item">
        <button aria-expanded="false"><span class="accordion-title">Does the document need to be in specific file format?</span><span
                class="icon" aria-hidden="true"></span></button>
        <div class="accordion-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore
                magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse
                potenti.</p>
        </div>
    </div>
    <div class="accordion-item">
        <button aria-expanded="false"><span class="accordion-title">How do I import my transactions?</span><span
                class="icon" aria-hidden="true"></span></button>
        <div class="accordion-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore
                magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse
                potenti.</p>
        </div>
    </div>
</div>`;
}
function showPayment() {
    var info = document.getElementById("info"); 
    info.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur molestiae assumenda nihil, eveniet quisquam repudiandae mollitia obcaecati eos, cupiditate sequi sed deleniti, ab at! Rem tempora sed dicta atque consequatur consequuntur saepe quisquam repudiandae officia perferendis sapiente, qui commodi iure possimus, accusamus explicabo? Perspiciatis tempora, harum esse, blanditiis placeat doloremque quaerat tempore debitis nam fugiat delectus, aut aliquam repellendus perferendis consectetur maxime fugit officiis nulla consequuntur! Repellat, saepe dignissimos fugiat, similique provident consequuntur non magnam, dolores molestiae nisi maiores nihil eum. Laudantium est illo similique ullam repellendus deserunt corporis, doloremque vitae, ab dolorem odit vel porro veritatis inventore debitis totam perferendis corrupti? At explicabo earum fuga architecto, incidunt exercitationem eos obcaecati dolor vel illo ipsum corrupti asperiores ratione dicta fugiat temporibus. Pariatur, minima dicta. Praesentium veritatis ea officia vitae quaerat, alias consequatur cumque aliquid amet possimus voluptatem animi dolorum, minus nulla architecto quia fugiat! Magnam, quo maiores? Adipisci laudantium alias, odit rerum eligendi modi eum autem facere atque? Totam culpa eos neque, quod quidem minima, optio cumque voluptate, sapiente dolores magni laborum dolor excepturi iure incidunt nostrum cum error veritatis laboriosam fuga? Eos incidunt vero pariatur eum error accusamus, tempore illum commodi eveniet voluptate repellendus! Possimus nemo, voluptatum temporibus quasi magni delectus, dolorum recusandae nostrum amet beatae maiores nisi commodi ducimus blanditiis odio explicabo tempora sint, esse soluta quo saepe voluptas optio quae officiis? Facilis minima quibusdam velit temporibus. Quod accusantium, minus nemo dolorum suscipit rem obcaecati magnam cum totam, excepturi maiores. Nihil magni atque ipsa corporis, sequi quia hic quisquam quis laudantium deleniti iste fuga, aperiam, reprehenderit illum pariatur distinctio eaque? Rem, possimus. Omnis ipsam tempora, eius ab, sequi ipsum facere, laboriosam nihil ipsa necessitatibus error. Quo maxime incidunt nemo numquam iusto accusamus dignissimos consectetur molestias, debitis nam autem temporibus excepturi tempore quis dolores soluta corrupti totam, deleniti asperiores eos?";
}
function showReturns() {
    var info = document.getElementById("info");
    info.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur molestiae assumenda nihil, eveniet quisquam repudiandae mollitia obcaecati eos, cupiditate sequi sed deleniti, ab at! Rem tempora sed dicta atque consequatur consequuntur saepe quisquam  numquam iusto accusamus dignissimos consectetur molestias, debitis nam autem temporibus excepturi tempore quis dolores soluta corrupti totam, deleniti asperiores eos?"; 
}
function showCarrers() {
    var info = document.getElementById("info");
    info.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur molestiae assumenda nihil, eveniet quisquam repudiandae mollitia obcaecati eos, cupiditate sequi sed deleniti, ab at! Rem tempora sed dicta atque consequatur consequuntur saepe quisquam repudiandae officia perferendis sapiente, qui commodi iure possimus, accusamus explicabo? Perspiciatis tempora, harum esse, blanditiis placeat doloremque quaerat tempore debitis nam fugiat delectus, aut aliquam repellendus perferendis consectetur maxime fugit officiis nulla consequuntur! Repellat, saepe dignissimos fugiat, similique provident consequuntur non magnam, dolores molestiae nisi maiores nihil eum. Laudantium est illo similique ullam repellendus deserunt corporis, doloremque vitae, ab dolorem odit vel porro veritatis inventore debitis totam perferendis corrupti? At explicabo earum fuga architecto, incidunt exercitationem eos obcaecati dolor vel illo ipsum corrupti asperiores ratione dicta fugiat temporibus. Pariatur, minima dicta. Praesentium veritatis ea officia vitae quaerat, alias consequatur cumque aliquid amet possimus voluptatem animi dolorum, minus nulla architecto quia fugiat! Magnam, quo maiores? Adipisci laudantium alias, odit rerum eligendi modi eum autem facere atque? Totam culpa eos neque, quod quidem minima, optio cumque voluptate, sapiente dolores magni laborum dolor excepturi iure incidunt nostrum cum error veritatis laboriosam fuga? Eos incidunt vero pariatur eum error accusamus, tempore illum commodi eveniet voluptate repellendus! Possimus nemo, voluptatum temporibus quasi magni delectus, dolorum recusandae nostrum amet beatae maiores nisi commodi ducimus blanditiis odio explicabo tempora sint, esse soluta quo saepe voluptas optio quae officiis? Facilis minima quibusdam velit temporibus. Quod accusantium, minus nemo dolorum suscipit rem obcaecati magnam cum totam, excepturi maiores. Nihil magni atque ipsa corporis, sequi quia hic quisquam quis laudantium deleniti iste fuga, aperiam, reprehenderit illum pariatur distinctio eaque? Rem, possimus. Omnis ipsam tempora, eius ab, sequi ipsum facere, laboriosam nihil ipsa necessitatibus error. Quo maxime incidunt nemo numquam iusto accusamus dignissimos consectetur molestias, debitis nam autem temporibus excepturi tempore quis dolores soluta corrupti totam, deleniti asperiores eos?";
}
function showOthers() {
    var info = document.getElementById("info"); 
    info.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur molestiae assumenda nihil, eveniet quisquam repudiandae mollitia obcaecati eos, cupiditate sequi sed deleniti, ab at! Rem tempora sed dicta atque consequatur consequuntur saepe quisquam repudiandae officia perferendis sapiente, qui commodi iure possimus, accusamus explicabo? Perspiciatis tempora, harum esse, blanditiis placeat doloremque quaerat tempore debitis nam fugiat delectus, aut aliquam repellendus perferendis consectetur maxime fugit officiis nulla consequuntur! Repellat, saepe dignissimos fugiat, similique provident consequuntur non magnam, dolores molestiae nisi maiores nihil eum. totam, deleniti asperiores eos?"; 
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