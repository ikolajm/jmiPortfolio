// On scroll in, check to see if the animation has fired yet or not
const expThreshold = [.50];
for (let i = .51; i <= 1; i += .01) {
    expThreshold.push(i);
    i += .01;
    i = Number(i.toFixed(2))
}
let _experienceSwitch = 0;
const experienceSwitch = () => {
    if (_experienceSwitch === 0) {
        return _experienceSwitch++
    }
    _experienceSwitch++;
    swapExperience('efa');
    expObserver.disconnect();
}
const experienceContainer = document.querySelector('#experience');
let expObserver = new IntersectionObserver(entries =>  {
	// isIntersecting is true when element and viewport are overlapping
	// isIntersecting is false when element and viewport don't overlap
	if(entries[0].intersectionRatio >  0)
        experienceSwitch();
}, { threshold: expThreshold });
expObserver.observe(experienceContainer);

let currentJob = 0;
const navLinkClick = (newLinkNumber) => {
    // Remove the current active state
    removeJobExperience()
    // Add the new active slide
    setTimeout(setJobExperience(newLinkNumber), 300)
}

// Swap the job description that is showing
let currentExperience = "";
const swapExperience = (newExp) => {
    if (newExp === currentExperience) return;
    currentExperience = newExp;
    const all = document.querySelectorAll(".experience-list-item");
    const one = document.querySelector("#efa-li")
    const two = document.querySelector("#propelup-li")
    const three = document.querySelector("#freelance-li")
    const container = document.querySelector(".jobs-container");

    all.forEach(el => el.classList.remove("active"));
    container.classList.remove("visible");

    // Wait for animation to near completion, begin new animations
    setTimeout(() => {
        switch(newExp) {
            case "efa":
                one.classList.add("active");
                break;
            case "propelup":
                two.classList.add("active");
                break;
            default:
                three.classList.add("active");
        }
    }, 300)
    swapDescription(newExp);
}

const swapDescription = (newExp) => {
    const all = document.querySelectorAll(".job-container");
    const one = document.querySelector("#efa-desc")
    const two = document.querySelector("#propelup-desc")
    const three = document.querySelector("#freelance-desc")
    const container = document.querySelector(".jobs-container");

    all.forEach(el => el.classList.remove("active"));

    setTimeout(() => {
        switch(newExp) {
            case "efa":
                one.classList.add("active");
                break;
            case "propelup":
                two.classList.add("active");
                break;
            default:
                three.classList.add("active");
        }
        container.classList.add("visible");
    }, 300)
}

let currentPosition = 1;
const shiftJob = direction => {
    const leftBtn = document.querySelector("#left-btn");
    const rightBtn = document.querySelector("#right-btn");
    const all = [leftBtn, rightBtn];
    const text = document.querySelector("#position-indicator");
    let toSend = "";

    all.forEach(element => element.disabled = false);
    if (direction === 'left' && currentPosition !== 1) {
        currentPosition--;
        text.innerText = `${currentPosition}/3`;
    }
    if (direction === 'right' && currentPosition !== 3) {
        currentPosition++;
        text.innerText = `${currentPosition}/3`;
    }

    switch(currentPosition) {
        case 1:
            toSend = 'efa';
            break;
        case 2:
            toSend = 'propelup';
            break;
        default:
            toSend = 'freelance';
    }

    swapExperience(toSend);
}