'use strict'

{
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

  const spimages = [
    'img/IMG_0542.jpeg',
    'img/IMG_0595.jpeg',
    'img/IMG_0575.jpeg',
    'img/IMG_0594.jpeg',
    'img/valleta.jpeg'
  ];
  let spcurrentIndex = 0;

  const spImage = document.getElementById('malta');
  spImage.src = spimages[spcurrentIndex];

  spimages.forEach((image, index) => {
    const img = document.createElement('img');
    img.src = image;

    const li = document.createElement('li');
    if (index === spcurrentIndex){
      li.classList.add('current');
    }
    li.addEventListener('click', () =>{
      spImage.src = image;
      const thumbnails = document.querySelectorAll('.spthumbnails > li');
      thumbnails[spcurrentIndex].classList.remove('current');
      spcurrentIndex = index;
      thumbnails[spcurrentIndex].classList.add('current');
    });

    li.appendChild(img);
    document.querySelector('.spthumbnails').appendChild(li);
  });

  const firstimages = [
    'img/coro.jpeg',
    'img/sky.jpeg',
    'img/pizza.jpeg'
  ];
  let currentIndex = 0;

  const mainImage = document.getElementById('italia');
  mainImage.src = firstimages[currentIndex];

  firstimages.forEach((image, index) => {
    const img = document.createElement('img');
    img.src = image;

    const li = document.createElement('li');
    if (index === currentIndex){
      li.classList.add('current');
    }
    li.addEventListener('click', () =>{
      mainImage.src = image;
      const thumbnails = document.querySelectorAll('.spthumbnails > li');
      thumbnails[currentIndex].classList.remove('current');
      currentIndex = index;
      thumbnails[currentIndex].classList.add('current');
    });

    li.appendChild(img);
    document.querySelector('.thumbnails').appendChild(li);
  });

  const secondimages = [
    'img/sea.jpeg',
    'img/kame.jpeg',
    'img/sunset.jpeg'
  ];
  let secondcurrentIndex = 0;

  const secondImage = document.getElementById('hawaii');
  secondImage.src = secondimages[secondcurrentIndex];

  secondimages.forEach((image, index) => {
    const img = document.createElement('img');
    img.src = image;

    const li = document.createElement('li');
    if (index === secondcurrentIndex){
      li.classList.add('current');
    }
    li.addEventListener('click', () =>{
      secondImage.src = image;
      const thumbnails = document.querySelectorAll('.secondthumbnails > li');
      thumbnails[secondcurrentIndex].classList.remove('current');
      secondcurrentIndex = index;
      thumbnails[secondcurrentIndex].classList.add('current');
    });

    li.appendChild(img);
    document.querySelector('.secondthumbnails').appendChild(li);
  });
}