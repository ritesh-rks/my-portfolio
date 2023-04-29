const buttonDark = document.getElementById('buttonDark');
const buttonLight = document.getElementById('buttonLight');
const coolButton = document.querySelectorAll('.coolButton');
const hamburger = document.querySelector('.hamburger');
const listItems = document.querySelector('.list_items');
const scrollUp = document.getElementById("scrollUp");


// dark and light theme

coolButton.forEach( icon => {
  icon.addEventListener('click', () =>{
    document.body.classList.toggle('darkTheme')
    if(document.body.classList.contains('darkTheme'))
    {
      buttonDark.style.display = 'none';
      buttonLight.style.display = 'block';
      buttonLight.style.color = '#fff';
    }
    else
    {
      buttonDark.style.display = 'block';
      buttonLight.style.display = 'none';
    }
  })
});

// hamburger menu

hamburger.addEventListener('click', ()=>{
  hamburger.classList.toggle('active');
  listItems.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', ()=>{
  hamburger.classList.remove('active');
  listItems.classList.remove('active');
}))



// for scrollup

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollUp.style.display = "block";
  } else {
    scrollUp.style.display = "none";
  }
});

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});