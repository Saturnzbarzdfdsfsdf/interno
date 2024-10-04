const navTriggerBtn = document.querySelector('#nav__trigger-btn')
const navMenu = document.querySelector('#nav__menu')

// event list
navTriggerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('open-menu')
})

//swiper 
const swiper = new Swiper('.swiper', {
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	// breakpoints
	slidesPerView: 3,
	spaceBetween: 20,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 3,
		},
	},
})

// scroll reveal animation
const sr = ScrollReveal({
	origin: 'bottom',
	distance: '60px',
	duration: 3000,
	delay: 300,
	// reset: true,
})

// hero
sr.reveal('.hero__text', {origin: 'top'})

// steps
sr.reveal('.steps__step', { distance: '100px', interval: 100 })

// about
sr.reveal('.about__text', { origin: 'left' })
sr.reveal('.about__img', { origin: 'right' })

// testimonial
sr.reveal('.testimonial__bg', { delay: 800 })
sr.reveal('.testimonial__title')
sr.reveal('.testimonial__slider', { delay: 1000 })

// brands
sr.reveal('.brands__img', { delay: 600, distance:'100px', interval:100 })

// work
sr.reveal('.work__title')
sr.reveal('.work__subtitle', { delay: 800 })
sr.reveal('.work__grid', { delay: 1000 })

// stats
sr.reveal('.stats')
sr.reveal('.brands__img', { distance:'100px', interval:100 })

// news
sr.reveal('.news__title')
sr.reveal('.news__subtitle', {delay: 800})
sr.reveal('.news__item', { distance:'100px', interval:100, delay: 1000 })

// contact 
sr.reveal('.contacts__container')
sr.reveal('.contacts__text', {delay: 800})

// footer
sr.reveal('.footer__item', { distance:'100px', interval:100 })
sr.reveal('.footer__copyright')

