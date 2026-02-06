document.addEventListener('DOMContentLoaded', () => {

    // Smooth Scroll Animation using Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply observer to sections that aren't the sidebar (which is sticky)
    const sections = document.querySelectorAll('.main-content .section');
    sections.forEach(section => {
        // Reset initial state for JS animation if CSS animation didn't run or to override
        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";
        section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        observer.observe(section);
    });

    // Simplified Hover Effect (optional JS part, mostly handled in CSS now)
    // The complex 3D tilt effect has been removed as requested.
});
