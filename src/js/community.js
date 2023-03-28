
$('.question__slider').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	dots: true,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 5000,
	adaptiveHeight: true,
	easing: 'ease',
	centerMode: true,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerPadding: '40px',
			}
		},
	]
});

$(document).ready(function () {
	$('.blog__slider').slick({
		dots: false,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		adaptiveHeight: true,
		prevArrow: '<button type="button" class="prev"><img src="img/icon/left.svg">Предыдущий</button>',
		nextArrow: '<button type="button" class="next">Следующий<img src="img/icon/right.svg"></button>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerPadding: '40px',
				}
			},
		]
	});
});

const count = document.querySelectorAll('.counter');

const likes = document.querySelectorAll('.like'),
	countLikes = document.querySelectorAll('.count__like'),
	dislikes = document.querySelectorAll('.dislike'),
	countDislike = document.querySelectorAll('.count__dislike');

likes.forEach((like, index) => {
	like.addEventListener('click', (event) => {
	if (event.target.classList.contains('added')) {
	countLikes[index].textContent--;
	} else {
		countLikes[index].textContent++;
	}
	like.classList.toggle('added');
	})
})

dislikes.forEach((dislike, index) => {
	dislike.addEventListener('click', (event) => {
		if (event.target.classList.contains('added')) {
			countDislike[index].textContent--;
			} else {
				countDislike[index].textContent++;
			}
		dislike.classList.toggle('added');
	})
		
})





	
// count.forEach(counter => {
// 	const likes = document.querySelector('.like'),
// 		countLikes = document.querySelector('.count__like'),
// 		dislikes = document.querySelector('.dislike'),
// 		countDislike = document.querySelector('.count__dislike'),
// 		saves = document.querySelector('.save'),
// 		countSave = document.querySelector('.count__save');
	
// 	likes.addEventListener('click', () => {
// 		if (likes.classList.contains('added')) {
// 			countLikes.textContent--;
// 		} else {
// 			countLikes.textContent++;
// 		}
// 		likes.classList.toggle('added');
// 	})

// 	dislikes.addEventListener('click', () => {
// 		if (dislikes.classList.contains('added')) {
// 			countDislike.textContent--;
// 		} else {
// 			countDislike.textContent++;
// 		}
// 		dislikes.classList.toggle('added');
// 	})

// 	// saves.addEventListener('click', () => {
// 	// 	if(saves.classList.contains('added')) {
// 	// 		countSave.textContent--;
// 	// 	} else {
// 	// 		countSave.textcontent++;
// 	// 	}
// 	// 	saves.classList.toggle('added');
// 	// })
// })







