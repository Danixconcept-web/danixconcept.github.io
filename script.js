// Portfolio animations script

document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio script loaded and DOM fully parsed.");

    // Scroll-triggered animations
    const animatedSections = document.querySelectorAll('main section'); // Target all sections in main
    const gliderItems = document.querySelectorAll('.glider-item');

    const observerOptions = {
        root: null, // relative to document viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of item visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: unobserve after animation to save resources
                // observer.unobserve(entry.target);
            } else {
                // Optional: remove class if you want animation to re-trigger on scroll up
                // entry.target.classList.remove('is-visible');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    animatedSections.forEach(section => {
        section.classList.add('animated-section'); // Add base class for initial state
        observer.observe(section);
    });

    // Apply a different animation to glider items for variety
    gliderItems.forEach((item, index) => {
        // Add a base class for initial state, can be more specific
        item.classList.add('fade-in');
        // Stagger animation for glider items
        item.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(item);
    });

    // Example of adding specific animations to specific sections if desired
    const aboutSection = document.getElementById('about');
    const contactSection = document.getElementById('contact');

    if (aboutSection) {
        aboutSection.classList.remove('animated-section'); // remove generic one if it was added
        aboutSection.classList.add('slide-in-left'); // specific animation
        // observer.observe(aboutSection); // already observed if it's a 'main section'
    }
    if (contactSection) {
        contactSection.classList.remove('animated-section');
        contactSection.classList.add('slide-in-right');
        // observer.observe(contactSection);
    }


    // Placeholder for other animation functions
    // e.g., hover animations, header animations etc.
    console.log("Scroll-triggered animations initialized for sections and glider items.");
});
