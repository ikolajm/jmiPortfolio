const threshold = [.70];
for (let i = .71; i <= 1; i += .01) {
    threshold.push(i);
    i += .01;
    i = Number(i.toFixed(2))
}
const footer = document.querySelector('#footer');
let footerObserver = new IntersectionObserver(entries =>  {
	// isIntersecting is true when element and viewport are overlapping
	// isIntersecting is false when element and viewport don't overlap
	if(entries[0].intersectionRatio >  0){
		const l1 = document.querySelector('.layer--1');
		const l2 = document.querySelector('.layer--2');
		const l3 = document.querySelector('.layer--3');
        const all = [l1, l2, l3];

        all.forEach(item=> {
            item.classList.add('active');
        })
    }

}, { threshold: threshold });
footerObserver.observe(footer);