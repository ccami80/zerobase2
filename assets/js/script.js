const sections=document.querySelectorAll('section[id]');



const scrollActive = () =>{
  const scrollY = window.pageYOffset

sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 152,
      sectionId = current.getAttribute('id'),
      sectionsClass = document.querySelector('.categorty-tab[href*=' + sectionId + ']')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
    sectionsClass.classList.add('is-active')
  }else{
    sectionsClass.classList.remove('is-active')
  }                                                    
})
}


window.addEventListener('scroll', scrollActive)



//MENU ACTIVE
const tab = document.querySelectorAll(".tab");
function activeMenu() {
  tab.forEach((item) => item.classList.remove("is-active"));
  this.classList.add("is-active");
}
tab.forEach((item) => item.addEventListener("click", activeMenu));