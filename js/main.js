'use strict'

{
  const images = [
    'img/IMG_0916.jpeg',
    'img/IMG_0925.jpeg',
    'img/IMG_0591.jpeg',
    'img/IMG_0564.jpeg',
    'img/IMG_0905.jpeg',
    'img/IMG_0567.jpeg'
  ];
  let currentIndex = 0;

  const mainImage = document.getElementById('main');
  mainImage.src = images[currentIndex];

  images.forEach((image, index) => {
    const img = document.createElement('img');
    img.src = image;

    const li = document.createElement('li');
    if (index === currentIndex){
      li.classList.add('current');
    }
    li.addEventListener('click', () =>{
      mainImage.src = image;
      const thumbnails = document.querySelectorAll('.thumbnails > li');
      thumbnails[currentIndex].classList.remove('current');
      currentIndex = index;
      thumbnails[currentIndex].classList.add('current');
    });

    li.appendChild(img);
    document.querySelector('.thumbnails').appendChild(li);
  });
  
  function playSlideshow(){
    setTimeout(() =>{
      let target = currentIndex + 1;
      if (target === images.length) {
        target = 0;
      }
      const thumbnails = document.querySelectorAll('.thumbnails > li')[target].click();
      playSlideshow();
    }, 3000);
  }

  let isPlaying = false;

  mainImage.addEventListener('click' ,() =>{
    if (isPlaying === false) {
      playSlideshow();
    }
  });


  const spopen = document.getElementById('spopen');
  const overlay = document.querySelector('.overlay');
  const sp = document.querySelector('.sp');
  const spclose = document.getElementById('spclose');

  spopen.addEventListener('click', () =>{
    overlay.classList.add('show');
    sp.classList.add('hide');
  });

  spclose.addEventListener('click', () =>{
    overlay.classList.remove('show');
    sp.classList.remove('hide');
  });

  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const modal = document.getElementById('modal');
  const mask = document.getElementById('mask');

  open.addEventListener('click' ,() =>{
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
  });
  
  close.addEventListener('click' ,() =>{
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  });

  mask.addEventListener('click' ,() =>{
    close.click();
  });


}