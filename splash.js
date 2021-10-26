window.addEventListener('resize', () => {
    if (window.innerWidth > 550) {
        document.querySelector("#splashNav").classList.add('visible')   
    }
})

const toggleMobile = () => {
    const hero = document.querySelector(".splash-hero");
    const mobileNavContainer = document.querySelector("#mobileNavContainer");

    const hamburger = document.querySelector(".hamburger");
    const close = document.querySelector(".close");
    const overlay = document.querySelector(".coloredOverlay");
    const nav = document.querySelector("#splashNav");
    const icon = document.querySelector("#navIcons")

    const about = document.querySelector("#aboutLink");
    const experience = document.querySelector("#experienceLink");
    const project = document.querySelector("#projectLink");
    const contact = document.querySelector("#contactLink");

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

const translateHeroSection = (e) => {
    const hero = document.querySelector('.splash-hero');
    const shapes = document.querySelector('.shapes')

    const x = (window.innerWidth - e.pageX*3)/100;
    const y = (window.innerHeight - e.pageY*3)/100;

}
// const splash = document.querySelector('#splash');
// splash.addEventListener('mouseover', translateHeroSection);

const fadeInNav = () => {
    document.querySelector('nav').classList.add('visible');
}
setTimeout(() => {
    if (window.innerWidth >= 550) {
        fadeInNav();
    }
}, 5000)

const callbackScrollTo = section => {
    section.scrollIntoView();
}
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