(() => {
console.log('fired!');

  const sigils = document.querySelectorAll('.sigilContainer'),
        lightbox = document.querySelector('.lightbox'),
        closeButton = document.querySelector('.close-lightbox');
        houseVideo = document.querySelector('.house-video')

  function popLightBox() {
    //debug this so far and make sure event handling works
    //debugger;
    lightbox.classList.add('show-lightbox')

    houseVideo.play();
  }

  function closeLightBox(e) { //'e' is shorthand for 'event' -> passes through event that is happened (button click)
    e.preventDefault();
    //make lightbox close
    lightbox.classList.remove('show-lightbox');
    houseVideo.currentTime = 0; //rewinds video
    houseVideo.pause();
  }

  sigils.forEach(sigil => sigil.addEventListener("click", popLightBox));
  closeButton.addEventListener("click", closeLightBox);

  houseVideo.addEventListener('ended', closeLightBox);

})();
