// Check whether to show mobile or desktop navigation
window.addEventListener('resize', () => {
    if (window.innerWidth > 550) {
        document.querySelector("#splash-nav").classList.add('visible')   
    }
})

// Toggle mobile dropdown menu to be shown/hidden
const toggleMobile = () => {
    const hero = document.querySelector(".splash-hero");
    const mobileNavContainer = document.querySelector("#mobile-nav-container");

    const hamburger = document.querySelector(".hamburger");
    const close = document.querySelector(".close");
    const overlay = document.querySelector(".mobile-background");
    const nav = document.querySelector("#splash-nav");

    // Check -> Open or closed?
    if  (overlay.classList.contains("visible")) {
        nav.classList.remove("visible")
        mobileNavContainer.classList.add("fade")
        setTimeout(() => {nav.classList.remove("mobile")}, 150)
        setTimeout(() => { 
            overlay.classList.remove("visible");
            close.classList.remove("visible");
            hamburger.classList.add("visible");
        },500);
        setTimeout(() => {
            hero.classList.remove("fade");
            mobileNavContainer.classList.remove("fade");
        }, 800)
    } else {
        // Fade the hero
        hero.classList.add("fade");
        // Fade the icon out
        mobileNavContainer.classList.add("fade")
        // Pull overlay in, swap icons
        setTimeout(() => { 
            overlay.classList.add("visible");
            hamburger.classList.remove("visible");
            close.classList.add("visible");
        },500);
        // Fade icon in
        setTimeout(() => { mobileNavContainer.classList.remove("fade") }, 800);
        // Fade links in from top-> bottom
        setTimeout(() => {nav.classList.add("mobile")}, 950)
        setTimeout(() => {nav.classList.add("visible")}, 1000)
    }
}

// If the user is on desktop, fade the navbar in time with the herosection finishing it's load-in animation
const fadeInNav = () => {
    document.querySelector('#splash-nav').classList.add('visible');
}
setTimeout(() => {
    if (window.innerWidth >= 550) {
        fadeInNav();
    }
}, 5000)

// Trying to get setTimeout to work - trying to close mobile menu then scroll,currently  just scrolls and toggles mobile
const callbackScrollTo = section => {
    section.scrollIntoView();
}
// On navigation link click, send to that section of the site
const mainNavClick = (link) => {
    let hash = `#${link}`;
    let section = document.querySelector(hash);

    if (window.innerWidth <= 550) {
        toggleMobile()
        setTimeout(() => {
            callbackScrollTo(section);
        }, 1000)
    } else {
        section.scrollIntoView();
    }
}