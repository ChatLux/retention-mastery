const dot=document.getElementById("cursorDot"),ring=document.getElementById("cursorRing");
let mouseX=0,mouseY=0,ringX=0,ringY=0;
document.addEventListener("mousemove",e=>{mouseX=e.clientX;mouseY=e.clientY;dot.style.left=mouseX+"px";dot.style.top=mouseY+"px";});
(function lerp(){ringX+=(mouseX-ringX)*.12;ringY+=(mouseY-ringY)*.12;ring.style.left=ringX+"px";ring.style.top=ringY+"px";requestAnimationFrame(lerp);})();
document.querySelectorAll("a,button,.pill").forEach(el=>{el.addEventListener("mouseenter",()=>{ring.style.width="52px";ring.style.height="52px";ring.style.opacity=".5";});el.addEventListener("mouseleave",()=>{ring.style.width="32px";ring.style.height="32px";ring.style.opacity="1";});});
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");obs.unobserve(e.target);}});},{threshold:0.1});
document.querySelectorAll(".reveal").forEach(r=>obs.observe(r));
document.querySelectorAll("a[href^='#']").forEach(a=>{a.addEventListener("click",e=>{e.preventDefault();const t=document.querySelector(a.getAttribute("href"));if(t)t.scrollIntoView({behavior:"smooth",block:"start"});});});