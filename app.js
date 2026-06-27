/*====================================================

WHO GAVE YOU AUTHORITY?

Main JavaScript

Version 1.0

====================================================*/


document.addEventListener("DOMContentLoaded", () => {

initializeHeader();

initializeMobileMenu();

initializeScrollTop();

initializeReadingProgress();

initializeRevealAnimations();

initializeSmoothScroll();

initializeActiveLinks();

});



/*====================================================

STICKY HEADER

====================================================*/

function initializeHeader(){

const header=document.querySelector(".site-header");

if(!header)return;

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});

}



/*====================================================

MOBILE MENU

====================================================*/

function initializeMobileMenu(){

const toggle=document.querySelector(".menu-toggle");

const menu=document.querySelector(".nav-links");

if(!toggle||!menu)return;

toggle.addEventListener("click",()=>{

menu.classList.toggle("active");

});

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

menu.classList.remove("active");

});

});

}



/*====================================================

READING PROGRESS

====================================================*/

function initializeReadingProgress(){

const progress=document.querySelector(".read-progress");

if(!progress)return;

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const percent=(scrollTop/scrollHeight)*100;

progress.style.width=percent+"%";

});

}



/*====================================================

SCROLL TO TOP

====================================================*/

function initializeScrollTop(){

const button=document.querySelector(".scroll-top");

if(!button)return;

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

button.style.opacity="1";

button.style.visibility="visible";

}else{

button.style.opacity="0";

button.style.visibility="hidden";

}

});

button.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}



/*====================================================

SMOOTH SCROLL

====================================================*/

function initializeSmoothScroll(){

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

});

});

}



/*====================================================

REVEAL ANIMATIONS

====================================================*/

function initializeRevealAnimations(){

const elements=document.querySelectorAll(

".reveal,.fade-up,.slide-left,.slide-right"

);

if(elements.length===0)return;

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

entry.target.classList.add("show");

}

});

},{

threshold:.15

});

elements.forEach(el=>observer.observe(el));

}



/*====================================================

ACTIVE NAVIGATION

====================================================*/

function initializeActiveLinks(){

const current=window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link=>{

const href=link.getAttribute("href");

if(href===current){

link.classList.add("active");

}

});

}



/*====================================================

ESC KEY CLOSE MENU

====================================================*/

document.addEventListener("keydown",e=>{

if(e.key==="Escape"){

const menu=document.querySelector(".nav-links");

if(menu){

menu.classList.remove("active");

}

}

});



/*====================================================

WINDOW RESIZE

====================================================*/

window.addEventListener("resize",()=>{

if(window.innerWidth>992){

const menu=document.querySelector(".nav-links");

if(menu){

menu.classList.remove("active");

}

}

});



/*====================================================

END PART ONE

====================================================*/

/*====================================================

READING TIME

====================================================*/

function initializeReadingTime(){

const element=document.querySelector(".reading-time-value");

const article=document.querySelector(".book-content,.chapter");

if(!element||!article)return;

const words=article.innerText.trim().split(/\s+/).length;

const minutes=Math.max(1,Math.ceil(words/225));

element.textContent=minutes+" min read";

}

initializeReadingTime();



/*====================================================

LAZY IMAGE LOADING

====================================================*/

function initializeLazyImages(){

const images=document.querySelectorAll("img[data-src]");

if(images.length===0)return;

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const image=entry.target;

image.src=image.dataset.src;

image.removeAttribute("data-src");

image.classList.add("loaded");

observer.unobserve(image);

}

});

});

images.forEach(image=>observer.observe(image));

}

initializeLazyImages();



/*====================================================

IMAGE FADE

====================================================*/

document.querySelectorAll("img").forEach(image=>{

image.addEventListener("load",()=>{

image.classList.add("loaded");

});

});



/*====================================================

KEYBOARD NAVIGATION

====================================================*/

document.addEventListener("keydown",event=>{

if(event.target.tagName==="INPUT")return;

if(event.target.tagName==="TEXTAREA")return;

if(event.key==="ArrowRight"){

const next=document.querySelector(".next-chapter");

if(next){

window.location=next.href;

}

}

if(event.key==="ArrowLeft"){

const previous=document.querySelector(".previous-chapter");

if(previous){

window.location=previous.href;

}

}

});



/*====================================================

AUTO YEAR

====================================================*/

const year=document.querySelector(".current-year");

if(year){

year.textContent=new Date().getFullYear();

}



/*====================================================

COPY SCRIPTURE

====================================================*/

document.querySelectorAll(".copy-scripture").forEach(button=>{

button.addEventListener("click",()=>{

const scripture=button.previousElementSibling.innerText;

navigator.clipboard.writeText(scripture);

button.innerText="Copied";

setTimeout(()=>{

button.innerText="Copy Scripture";

},2000);

});

});



/*====================================================

ACTIVE CHAPTER

====================================================*/

const page=document.body.dataset.page;

if(page){

document.querySelectorAll(".contents-item").forEach(item=>{

if(item.dataset.page===page){

item.classList.add("active");

}

});

}



/*====================================================

SMOOTH IMAGE SCALE

====================================================*/

document.querySelectorAll(".image-panel").forEach(panel=>{

panel.addEventListener("mouseenter",()=>{

panel.classList.add("hover");

});

panel.addEventListener("mouseleave",()=>{

panel.classList.remove("hover");

});

});



/*====================================================

BACK TO TOP AFTER CHAPTER

====================================================*/

const chapterEnd=document.querySelector(".chapter-end");

if(chapterEnd){

const button=document.createElement("button");

button.className="btn btn-outline";

button.innerText="Back to Top";

button.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

chapterEnd.appendChild(button);

}



/*====================================================

ACCESSIBILITY

====================================================*/

document.querySelectorAll("a").forEach(link=>{

if(!link.getAttribute("aria-label")){

link.setAttribute(

"aria-label",

link.innerText.trim()

);

}

});



/*====================================================

PREFERRED REDUCED MOTION

====================================================*/

const reduceMotion=window.matchMedia("(prefers-reduced-motion: reduce)");

if(reduceMotion.matches){

document.documentElement.style.scrollBehavior="auto";

}



/*====================================================

CONSOLE

====================================================*/

console.log(

"WHO GAVE YOU AUTHORITY? Website Loaded Successfully"

);



/*====================================================

END PART TWO

====================================================*/

