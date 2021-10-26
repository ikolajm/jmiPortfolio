// Howler
const sfx = {
    move: new Howl({
        src: ["https://res.cloudinary.com/jlengstorf/video/upload/q_auto/v1593395252/jason.af/sfx/pop.mp3"]
    }),
    click: new Howl({
        src: ["https://res.cloudinary.com/jlengstorf/video/upload/q_auto/v1593395252/jason.af/sfx/click.mp3"]
    })
}

const playPop = () => {
    sfx.click.play();
}

let bioIndex = 2;
const swapBio = (num) => {
    if (num === bioIndex) return;
    playPop()
    bioIndex = num;
    switch (num)  {
        case 1: 
            toggleAboutLength('short');
            break;
        case 2: 
            toggleAboutLength('default');
            break;
        default:
            toggleAboutLength('long');
    }
    // console.log(bioIndex)
}

const toggleAboutLength = (length) => {
    const defaultA = document.querySelector("#default-sentence-a");
    const defaultB = document.querySelector("#default-sentence-b");
    const longA = document.querySelector("#long-sentence-a");
    const longB = document.querySelector("#long-sentence-b");
    const all = [defaultA, defaultB, longA, longB];

    all.forEach(el => el.style.display = 'none');
    switch(length) {
        case 'default':
            defaultA.style.display = 'inline';
            defaultB.style.display = 'inline';
            break;
        case 'long':
            all.forEach(el => el.style.display =  'inline');
            break;
        default:
            return
    }
}

let activePhoto = 'webdev';
const swapPhoto = (string) => {
    const webdev = document.querySelector("#webdev");
    const skateboard = document.querySelector("#skateboard");
    const art = document.querySelector("#art");
    const all = [webdev, skateboard, art];
    const photoButtons = document.querySelectorAll('.highlight')

    if (activePhoto === string) return;
    sfx.click.play();
    activePhoto = string;
    photoButtons.forEach(el => el.classList.remove('active'));
    all.forEach(el => el.classList.remove('visible'));
    switch (string) {
        case 'skateboard':
            skateboard.classList.add('visible');
            photoButtons[1].classList.add('active')
            break;
        case 'art':
            art.classList.add('visible');
            photoButtons[2].classList.add('active');
            break;
        default:
            webdev.classList.add('visible')
            photoButtons[0].classList.add('active');
    }
}