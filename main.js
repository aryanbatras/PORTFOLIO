// EFFECTS

//OK HOVER EFFECT

//OK TEXT SPAN CHILD

//OK LOADING TIMELINE
//OK ICON FLIP EFFECT

//OK NAVIGATION EFFECT

//OK SCROLL ONE
//OK SCROLL TWO
//OK IMAGE SLIDER


//OK SCROLL THREE
//Ok SCROLL FOUR
//OK SCROLL FIVE
//OK SCROLL SIX





// TOUCH EFFECT

const body = document.querySelector('body');
const touch = document.querySelector('.touch');

body.addEventListener('touchmove', details => {
	const x_axis = details.touches[0].pageX;
	const y_axis = details.touches[0].pageY;
	touch.style.opacity = 1;
	
	setTimeout( () => {
		gsap.to('.touch', {
			y: y_axis,
			x: x_axis,
			duration: 0.5,
			ease: Expo
		})
	}, 50)
	
})

body.addEventListener('touchend', () => {
	touch.style.opacity = 0;
})





// TEXT ANIMATION
const animate = document.querySelectorAll('.animate');

	animate.forEach(e => {
		
		const spanParent = document.createElement('span');
		const spanChild = document.createElement('span');
		
		spanParent.classList.add("parent");
		spanChild.classList.add("child");
		spanParent.appendChild(spanChild);
		
		spanChild.innerHTML = e.innerHTML;
		e.innerHTML = "";
		
		e.appendChild(spanParent);
	})




// LOADING
const loading = gsap.timeline();

loading
.from('.overlay-text h1',{
	x: 200,
	opacity: 0,
	delay: 0.8,
	duration: 1.2,
	ease: Expo.easeOut
})
.to('.overlay-text #is_a', {
	opacity: 0,
	delay: 0.2,
	duration: 0.8,
	ease: Expo.easeOut
})
.to('.overlay .animate .parent .child',{
	y: "-100%",
	delay: 0.2,
	duration: 0.8,
	ease: Circ.easeInOut
})
.to('.overlay',{
	height: 0,
	delay: '-0.8',
	duration: 2,
	ease: Expo.easeInOut
})
.to('.green-overlay', {
	height: "100%",
	duration: 2,
	delay: '-2',
	ease: Expo.easeInOut
})
.to('.container', {
	height: "100%",
	duration: 2,
	delay: '-1.2',
	ease: Expo.easeInOut
})
.from('.main-text-title .child', {
	y: "100%",
	delay: '-0.5',
	duration: 1.2,
	ease: Circ.easeInOut
})
.from('.main-text-bottom .child', {
	y: "100%",
	delay: 0.2,
	duration: 0.8,
	ease: Circ.easeInOut
})
.from('.main .img .self-img', {
	y: "-200%",
	duration: 1.8,
	delay: '-0.2',
	opacity: 0,
	ease: Expo.easeInOut
})
.from('.nav-btn',{
	y: "-100%",
	opacity: 0,
	delay: 0.2,
	duration: 0.8,
	ease: Circ.easeOut
})
.from('.page-bottom .child', {
	y: "100%",
	delay: 0.1,
	duration: 0.4,
	ease: Power3.easeInOut
})



// IMAGE FLIP EFFECT
const iconloop = gsap.timeline({ repeat: -1, paused: false });

iconloop
.to('.main img', {
	scaleX: '-1',
	delay: 0.2,
	duration: 2,
	ease: Power3.easeInOut
})
.to('.main img', {
	scaleX: 1,
	delay: 0.2,
	duration: 2,
	ease: Power3.easeInOut
});

const icon = document.querySelector('.main img');
icon.addEventListener('touchend', () => iconloop.pause() )







// NAVIGATION
let isOpen = false;

const nav = document.querySelector('.nav-btn');
const navO = document.querySelector('.nav-overlay');
const navOBtns = document.querySelectorAll('.nav-overlay div a');

// NAVIGATION CLICK
nav.addEventListener('touchend', () => {

	if(!isOpen){
		gsap.to('.scale',{
				scale: 100,
				duration: 2,
				ease: Power2.easeInOut
			})
			
			navOBtns.forEach( e => {
				gsap.from(e, {
					y: '100%',
					scale: 0,
					duration: 2,
					opacity: 1
				})
			})
			
		isOpen = true;

		navO.style.display = 'flex';
		nav.style.background = 'black';
	}
	
	else{
		gsap.to('.scale', {
				scale: 0,
				duration: 2,
				ease: Power2.easeInOut
			})
		
		isOpen = false;

		setTimeout(() => {
			navO.style.display = 'none';
		}, 1000)
		
		nav.style.background = 'greenyellow';
	}
	
})

// BUTTON CLICK
navOBtns.forEach(e => {
	
	e.addEventListener('touchend', () => {
		
	
			gsap.to('.scale', {
				scale: 0,
				duration: 1,
				ease: Power2.easeInOut
			})
			gsap.from(e, {
				scale: 1.5,
				duration: 2
			})
			
		isOpen = false;
		
		nav.style.background = 'greenyellow';
		
		setTimeout( () => {
			navO.style.display = 'none';
		}, 1000)
	
		
	})
	
})








const scrollOne = gsap.timeline({ 
	scrollTrigger: {
		scroller: 'body',
		trigger: '.scroller',
		start: 'top top',
		end: 'bottom top',
		scrub: 5
	}
})

scrollOne
.to('.page-two-intro',{
	scale: 250,
	duration: 4
})
.to('.main-text', {
		opacity: 0,
		y: "-100%",
		duration: 4,
		delay: '-4'
})
.to('.main .self-img',{
		height: "10%",
		x: "200%"
})
.to('.page-two-text h1', {
	opacity: 1,
	scale: 4,
	y: -420
})





const scrollTwo = gsap.timeline({
		scrollTrigger: {
			scroller: 'body',
			trigger: '.page-two',
			start: 'top top',
			end: 'center top',
			scrub: 4
		}
})

scrollTwo
.from('.page-two-intro', {
	opacity: 1
})
.to('.page-two-text', {
	opacity: 0
})







// IMAGE SLIDER
const pino = document.querySelector('.image-slider-pin');
const featured = document.querySelectorAll('.featuredContainer');

const imgSlide = gsap.timeline({
	scrollTrigger: {
		scroller: 'body',
		trigger: pino,
		start: 'top top',
		end: '+=400%',
		scrub: 5,
		pin: true
	}
})

imgSlide
.to('.page-three-intro', {
	scale: 300,
	rotate: 360,
	duration: 4
})
.to('.page-three-text h1', {
	scale: 4,
	y: -420,
	rotate: 360,
	duration: 4,
	delay: '-4'
})
.from('.page-three-text h1', {
	opacity: 1
})
.from('.page-three-intro', {
	opacity: 1
})


featured.forEach( e => {
	
imgSlide
	.from(e.firstElementChild, {
		width: 0,
		scaleX: 0,
		rotate: 180,
		borderRadius: "50%",
		duration: 2.5,
		ease: Expo
	})
	.to(e.firstElementChild.nextElementSibling, {
		opacity: 1,
		scale: 1.2,
		x: 520,
		duration: 2,
		delay: '-2',
		ease: Expo
	})
	
})




	
	
//	scroll trigger page FOUR
	const s4 = gsap.timeline({
			scrollTrigger: {
				scroller: 'body',
				trigger: '.skills',
				start: 'top bottom',
				end: 'top top',
				scrub: 5
			}
	});
s4
.from('#skill-text', {
	opacity: 0,
	x: "100%"
})
.from('.languages', {
	opacity: 0,
	y: "100%",
	rotate: 90,
	scale: 2.6
})
.from('.frameworks', {
	opacity: 0,
	y: "100%",
	rotate: 90,
	scale: 2.6
})
.from('.others', {
	opacity: 0,
	y: "100%",
	rotate: 90,
	scale: 2.6
})


	
//	scroll trigger page FIVE
const s5 = gsap.timeline({
	scrollTrigger: {
		scroller: 'body',
		trigger: '.page-five',
		start: 'top bottom',
		end: 'top top',
		scrub: 5
	}
})

s5
.from('.about-me p', {
	opacity: 0,
	y: "100%",
	x: "-100%"
})
.from('.hobbies', {
	opacity: 0,
	y: "100%",
	rotate: '-90',
	scale: 2.2
})
.from('.soft-skills', {
	opacity: 0,
	y: "100%",
	rotate: '-90',
	scale: 2.2
})
.from('.education', {
	opacity: 0,
	y: "100%",
	rotate: '-90',
	scale: 2.2
})


	
//	scroll trigger page SIX
const s6 = gsap.timeline({
		scrollTrigger: {
			scroller: 'body',
			trigger: '.socials',
			start: 'center bottom',
			end: 'top top',
			scrub: 4
		}
});

s6
.from('.socials h1', {
	opacity: 0,
	y: "-100%",
	scale: 1.5
})

.from('.socials div', {
	opacity: 0,
	y: "-100%",
	scale: 1.5
})
