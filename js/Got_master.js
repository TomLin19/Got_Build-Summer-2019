(()=>{
	console.log('fired!');

	const sigils = document.querySelectorAll('.sigilContainer'),
	      lightBox = document.querySelector('.lightbox'),
	      closeButton = document.querySelector('.close-lightbox'),
	      houseVideo = document.querySelector('.house-video'),
	      bannerImage = document.querySelector("#houseImages");

    //variable stack -> get the shields /sigile first
	function popLightBox(){
        // make the lightbox show up //
		lightBox.classList.add('show-lightbox');

		houseVideo.play();
	}

   function closeLightBox(event){
   	event.preventDefault();

   	//make the light box close//
   	lightBox.classList.remove('show-lightbox');
   	houseVideo.cunrrentTime = 0;
   	houseVideo.pause();

   }
   function animateBanners(){

   	let offset = 600,
        multiplier = this.data.offset; 
        // this is the date-offset custom data attribute
        // on each of the sigils
    console.log((offset*multiplier) + "px");

   	// move the banners to the left  using the product of our math;
   	bannerImage.style.right = `${offset * multiplier + "px"}`;
   }
	// sigils.forEach(sigil => sigil.addEventListener("click",popLightBox));

	sigils.forEach(sigil => sigil.addEventListener("click",animateBanners));

	closeButton.addEventListener("click", closeLightBox);

	houseVideo.addEventListener('ended',closeLightBox);
})();