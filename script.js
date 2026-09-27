const themeBtn=document.getElementById("themeBtn");
themeBtn.addEventListener("click",()=>{document.body.classList.toggle("dark-mode");const dark=document.body.classList.contains("dark-mode");themeBtn.textContent=dark?"☀️":"🌙";localStorage.setItem("darkMode",dark)});
if(localStorage.getItem("darkMode")==="true"){document.body.classList.add("dark-mode");themeBtn.textContent="☀️";}
const yearElement=document.getElementById("year");
if(yearElement)yearElement.textContent=new Date().getFullYear();
const sections=document.querySelectorAll(".section");
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.style.opacity="1";entry.target.style.transform="translateY(0)"}})},{threshold:.15});
sections.forEach(section=>{section.style.opacity="0";section.style.transform="translateY(20px)";section.style.transition="opacity .6s ease,transform .6s ease";observer.observe(section)});
