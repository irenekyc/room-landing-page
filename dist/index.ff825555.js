const aboutSections = document.querySelectorAll(".about-section__content");
const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
};
const fallBack = (entries)=>{
    entries.forEach(function(entry) {
        // If the entry is not in the viewport, do nothing
        if (!entry.isIntersecting) return;
        if (entry.isIntersecting) entry.target.classList.add("slide-in--active");
    });
};
let observer = new IntersectionObserver(fallBack, options);
aboutSections.forEach((aboutSection)=>{
    observer.observe(aboutSection);
});

//# sourceMappingURL=index.ff825555.js.map
