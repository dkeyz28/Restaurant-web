document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger-image');
  const navMenu = document.querySelector('.nav-menu');
    
   hamburger.addEventListener('click',()=>{
    navMenu.classList.toggle('active')
  
   });
   });

