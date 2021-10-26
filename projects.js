let text = document.querySelector('.project-text');
// VanillaTilt.init(text)

// let _projectSwitchA = 0;
// const projectSwitchAFunc = () => {
//     if (_projectSwitchA === 0) {
//         return _projectSwitchA++
//     }
//     _projectSwitchA++;
//     // document.querySelector('#tellemPhotoContainer').setAttribute('data-aos', 'fade-right');
//     projectObserverA.disconnect();
// }
// const projectA = document.querySelector('#projectA');
// let projectObserverA = new IntersectionObserver(entries =>  {
//     console.log(entries)
// 	if(entries[0].intersectionRatio >  0)
// 		console.log('Bring in the classes');
//         projectSwitchAFunc();
// }, { threshold: [.7] });
// projectObserverA.observe(projectA);

const toggleProjectA = () => {
    const project = document.querySelector('#projectA');
    const button = document.querySelector('#buttonA');
    const card = document.querySelector('#cardA');
    if (!card.classList.contains('visible')) {
        // Turn the button 45deg
        button.classList.toggle('turned');
        setTimeout(() => {
            // Pull the button up/down
            button.classList.toggle('pulled');
        }, 300)
        setTimeout(() => {
            // Pull card up to top-20%
            card.classList.toggle('visible')
        }, 500)
    } else {
        // Turn the button 45deg
        button.classList.toggle('turned');
        setTimeout(() => {
            // Pull card up to top-20%
            card.classList.toggle('visible')
            // Pull the button up/down
            button.classList.toggle('pulled');
        }, 300)
    }
}

const toggleProjectB = () => {
    const project = document.querySelector('#projectB');
    const button = document.querySelector('#buttonB');
    const card = document.querySelector('#cardB');
    if (!card.classList.contains('visible')) {
        // Turn the button 45deg
        button.classList.toggle('turned');
        setTimeout(() => {
            // Pull the button up/down
            button.classList.toggle('pulled');
        }, 300)
        setTimeout(() => {
            // Pull card up to top-20%
            card.classList.toggle('visible')
        }, 500)
    } else {
        // Turn the button 45deg
        button.classList.toggle('turned');
        setTimeout(() => {
            // Pull card up to top-20%
            card.classList.toggle('visible')
            // Pull the button up/down
            button.classList.toggle('pulled');
        }, 300)
    }
}