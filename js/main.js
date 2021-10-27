AOS.init();

const emailFeedback = () => {
    console.log("fired")
    // Toast message
    const toast = document.querySelector("#toast");
    console.log(toast)
    toast.classList = "showToast"
    console.log(toast)
    setTimeout(() => toast.className = toast.className.replace("showToast", ""), 3000);
}

const copyEmail = () => {
    // Copy email
    const email = "ikolajm@gmail.com";
    const dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', email);
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    // Create visual feedback
    emailFeedback()
}