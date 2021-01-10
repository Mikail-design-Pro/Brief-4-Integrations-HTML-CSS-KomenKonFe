window.addEventListener('load', () => {
  var popup = document.querySelector('.popup');

  popup.style.opacity = 1;
  popup.addEventListener('click', () => {
    popup.style.display = 'none';
  });
});
