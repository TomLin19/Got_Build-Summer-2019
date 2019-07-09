(()=>{
	console.log('fired!');

	const sigils = document.querySelectorAll('.sigilContainer'),
	      lightBox = document.querySelector('.lightbox'),
	      closeButton = document.querySelector('.close-lightbox'),
	      houseVideo = document.querySelector('.house-video');

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
	sigils.forEach(sigil => sigil.addEventListener("click",popLightBox));
	closeButton.addEventListener("click", closeLightBox);

	houseVideo.addEventListener('ended',closeLightBox);
})();