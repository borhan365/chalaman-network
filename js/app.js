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


// tabs => SEO Pricing / Reporting / Accountability
function latestPopularTabs(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


// sticky navbar
window.onscroll = () => {

  // click to top
  const topBtn = document.getElementById("top");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.classList.add("active")
  } else {
    topBtn.classList.remove("active")
  }

  topBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  })
}
