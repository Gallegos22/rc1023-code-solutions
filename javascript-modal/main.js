const open = document.getElementById('open');
const modalContainer = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', function (event) {
  modalContainer.classList.add('show');
});

close.addEventListener('click', function (event) {
  modalContainer.classList.remove('show');
});
