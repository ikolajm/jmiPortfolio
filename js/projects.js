const toggleProjectA = () => {
    const button = document.querySelector('#project__button-a');
    const card = document.querySelector('#project__card-a');
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
    const button = document.querySelector('#project__button-b');
    const card = document.querySelector('#project__card-b');
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