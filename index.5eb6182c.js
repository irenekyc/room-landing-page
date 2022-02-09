const aboutSections=document.querySelectorAll(".about-section__content"),options={root:null,rootMargin:"0px",threshold:.2},fallBack=e=>{e.forEach((function(e){e.isIntersecting&&e.isIntersecting&&e.target.classList.add("slide-in--active")}))};let observer=new IntersectionObserver(fallBack,options);aboutSections.forEach((e=>{observer.observe(e)}));
//# sourceMappingURL=index.5eb6182c.js.map
