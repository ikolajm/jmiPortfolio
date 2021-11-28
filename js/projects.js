const toggleProjectA = () => {
    const projectA = document.querySelector('#project-a')
    const button = document.querySelector('#project__button-a');
    const card = document.querySelector('#project__card-a');
    const projectAImage = projectA.firstElementChild
    if (!card.classList.contains('visible')) {
        // Turn the button 45deg
        button.classList.toggle('turned');
        setTimeout(() => {
            // Turn brightness of image/video down
            projectAImage.classList.toggle('brightness-down');
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
            // Turn brightness of image/video down
            projectAImage.classList.toggle('brightness-down');
            // Pull card up to top-20%
            card.classList.toggle('visible')
            // Pull the button up/down
            button.classList.toggle('pulled');
        }, 300)
    }
}

const toggleProjectB = () => {
    const projectB = document.querySelector('#project-b')
    const button = document.querySelector('#project__button-b');
    const card = document.querySelector('#project__card-b');
    const projectBImage = projectB.firstElementChild
    if (!card.classList.contains('visible')) {
        // Turn the button 45deg
        button.classList.toggle('turned');
        setTimeout(() => {
            // Turn brightness of image/video down
            projectBImage.classList.toggle('brightness-down');
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
            // Turn brightness of image/video down
            projectBImage.classList.toggle('brightness-down');
            // Pull card up to top-20%
            card.classList.toggle('visible')
            // Pull the button up/down
            button.classList.toggle('pulled');
        }, 300)
    }
}

// const toggleTellemPlay = () => {
//     const tellemVideo = document.querySelector("#tellem-video");
//     const videoToggle = document.querySelector('#video-toggle');
//     console.log(videoToggle.children)
//     const playBtn = videoToggle.children[0]
//     const pauseBtn = videoToggle.children[1]

//     if (tellemVideo.classList.contains('playing')) {
//         tellemVideo.pause()
//         tellemVideo.classList.remove('playing')
//         pauseBtn.classList.remove('show')
//         playBtn.classList.add('show')
//     } else {
//         tellemVideo.play()
//         playBtn.classList.remove('show')
//         pauseBtn.classList.add('show')
//         tellemVideo.classList.add('playing')
//     }
// }