const apiUrl = "http://localhost:3000/photos";

fetch(apiUrl)
	.then((response) => response.json())
	.then((data) => {
		const sliderWrapper = document.getElementById("slider-wrapper");

		data.forEach((item) => {
			const slide = document.createElement("div");
			slide.className = "swiper-slide relative rounded-3xl";

			const img = document.createElement("img");
			img.src = item.url;
			img.className = "rounded-3xl";
			img.alt = "";

			const textContainer = document.createElement("div");
			textContainer.className =
				"absolute bottom-2 w-full flex flex-col items-center";

			const title = document.createElement("p");
			title.className = "text-white text-2xl";
			title.textContent = item.title;

			const description = document.createElement("p");
			description.className = "text-gray text-lg";
			description.textContent = item.text;

			textContainer.appendChild(title);
			textContainer.appendChild(description);

			slide.appendChild(img);
			slide.appendChild(textContainer);

			sliderWrapper.appendChild(slide);
			let swiper = new Swiper(".slider", {
				slidesPerView: 2,
				spaceBetween: 30,
				grabCursor: true,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			});
		});
	})
	.catch((error) => console.error("Error fetching data:", error));

let swiper2 = new Swiper(".comment-slider", {
	slidesPerView: 1,
	spaceBetween: 30,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
});
