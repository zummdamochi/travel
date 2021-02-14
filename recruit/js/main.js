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

}