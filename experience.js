const expThreshold = [.50];
for (let i = .51; i <= 1; i += .01) {
    // console.log(i)
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
    // console.log(entries)
	// isIntersecting is true when element and viewport are overlapping
	// isIntersecting is false when element and viewport don't overlap
	if(entries[0].intersectionRatio >  0)
		// console.log('Bring in the classes');
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

let currentExperience = "";
const swapExperience = (newExp) => {
    // e.preventDefault();
    // console.log('swappedexp')
    // console.log(newExp)
    if (newExp === currentExperience) return;
    currentExperience = newExp;
    const all = document.querySelectorAll(".experienceListItem");
    const one = document.querySelector("#efaLi")
    const two = document.querySelector("#propelupLi")
    const three = document.querySelector("#freelanceLi")
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
    const one = document.querySelector("#efaDesc")
    const two = document.querySelector("#propelupDesc")
    const three = document.querySelector("#freelanceDesc")
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
    const leftBtn = document.querySelector("#leftBtn");
    const rightBtn = document.querySelector("#rightBtn");
    const all = [leftBtn, rightBtn];
    const text = document.querySelector("#positionIndicator");
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