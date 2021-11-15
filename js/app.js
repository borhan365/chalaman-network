// Animate items
new WOW().init();

// Desktop sidebar
const menuBtn = document.getElementById('menuBtn'); 
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
  sidebar.classList.add('active');

})

const cancelBtn = document.getElementById("cancelBtn"); 
cancelBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
})

const mobileMenuBtn = document.getElementById("mobileMenuBtn"); 
mobileMenuBtn.addEventListener("click", () => {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.add('active');
})

// popup modal

// add class
const getPlayBtn = document.getElementById("tvcBtn")
getPlayBtn.addEventListener('click', () => {
  const modal = document.getElementById("modal")
  modal.classList.add("active")
})

// remove class
const getCancelBtn = document.getElementById("tvcCancelBtn")
getCancelBtn.addEventListener('click', () => {
  const modal = document.getElementById("modal")
  modal.classList.remove("active")
})

// Swiper slider home page product slider
var ProductSlider = new Swiper(".productSlider", {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
        640: {
        slidesPerView: 2,
        spaceBetween: 20,
        },
        767: {
        slidesPerView: 2,
        spaceBetween: 20,
        },
        1024: {
        slidesPerView: 5,
        spaceBetween: 20,
        },
    }
  });

  // Campaign slider
  var campaignSlider = new Swiper(".campaignSlider", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
          640: {
          slidesPerView: 1,
          spaceBetween: 20,
          },
          767: {
          slidesPerView: 2,
          spaceBetween: 20,
          },
          1024: {
          slidesPerView: 4,
          spaceBetween: 20,
          },
      }
    });