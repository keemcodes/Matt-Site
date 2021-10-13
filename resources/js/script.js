// const wrap = document.querySelector('#wrap');
const menu = document.querySelector('.active-menu');
const menuToggle = document.querySelector('.ham-menu');
// const menuToggle = document.querySelectorAll('.');
const barOne = document.getElementById('1');
const barTwo = document.getElementById('2');
const barThree = document.getElementById('3');
const barFour = document.getElementById('4');
// const barTwo = barOne.nextElementSibling;
// const barTree = barTwo.nextElementSibling;
// const barFour = barTree.nextElementSibling;
const homeButton = document.querySelectorAll('.home-link a');
const homeActive = document.querySelector('.home')
const aboutButton = document.querySelectorAll('.about-link a');
const aboutActive = document.querySelector('.about')
const contactButton = document.querySelectorAll('.contact-link a');
const contactActive = document.querySelector('.contact')


// homeButton[0].style.backgroundColor = "red"; 

// homeButton.forEach( (button) => {
// 	button.addEventListener('click', () => {
// 		homeActive.classList.remove('temp-hide');
// 		aboutActive.classList.add('temp-hide');
// 		contactActive.classList.add('temp-hide');
// 		// button.style.backgroundColor = "red"; 
// 		// homeActive.style.display = "block";
		
// 	});
	
	
// });

// aboutButton.forEach( (button) => {
// 	button.addEventListener('click', () => {
// 		aboutActive.classList.remove('temp-hide');
// 		homeActive.classList.add('temp-hide');
// 		contactActive.classList.add('temp-hide');

		
// 	});
	
	
// });

// contactButton.forEach( (button) => {
// 	button.addEventListener('click', () => {
// 		contactActive.classList.remove('temp-hide');
// 		homeActive.classList.add('temp-hide');
// 		aboutActive.classList.add('temp-hide');

	
// 	});


// });

// for (i = 0; i < homeButton.length; i ++) {
// 	homeButton[i].style.backgroundColor = 'red';
// }
// homeButton.forEach( () => {} );
// homeButton.style.transform = 'scale(3)';

function barsOn() {
	barOne.style.transform = 'scale(0)';
	barTwo.style.transform = 'rotate(45deg)';	
	barThree.style.transform = 'rotate(-45deg)';
	barFour.style.transform = 'scale(0)';
}

function barsOff() {
	barOne.style.transform = 'scale(1)';
	barTwo.style.transform = 'rotate(0)';	
	barThree.style.transform = 'rotate(0)';		
	barFour.style.transform = 'scale(1)';	
}
menuToggle.addEventListener('click', () => {

	if (menu.classList.contains('menu-active')) {
		menu.classList.remove('menu-active');
		barsOff();
	} else {
		menu.classList.add('menu-active');
		barsOn();
	}
});

function setLocation() {
	menu.classList.remove('menu-active');
	barsOff();
	if (location.hash === '#home') {
		homeActive.classList.remove('temp-hide');
		aboutActive.classList.add('temp-hide');
		contactActive.classList.add('temp-hide');

		homeButton[1].classList.add('active-link');
		aboutButton[1].classList.remove('active-link');
		contactButton[1].classList.remove('active-link');
		homeButton[0].classList.add('active-link');
		aboutButton[0].classList.remove('active-link');
		contactButton[0].classList.remove('active-link');
		
	}
	else if (location.hash === '#about') {
		aboutActive.classList.remove('temp-hide');
		homeActive.classList.add('temp-hide');
		contactActive.classList.add('temp-hide');
		
		aboutButton[1].classList.add('active-link');
		homeButton[1].classList.remove('active-link');
		contactButton[1].classList.remove('active-link');
		aboutButton[0].classList.add('active-link');
		homeButton[0].classList.remove('active-link');
		contactButton[0].classList.remove('active-link');

	}
	else if (location.hash === '#contact') {
		contactActive.classList.remove('temp-hide');
		homeActive.classList.add('temp-hide');
		aboutActive.classList.add('temp-hide');	

		contactButton[1].classList.add('active-link');
		homeButton[1].classList.remove('active-link');
		aboutButton[1].classList.remove('active-link');
		contactButton[0].classList.add('active-link');
		homeButton[0].classList.remove('active-link');
		aboutButton[0].classList.remove('active-link');


	}
	else {
		location.hash = "#home";
	}
}

setLocation();

window.addEventListener('hashchange', setLocation);


