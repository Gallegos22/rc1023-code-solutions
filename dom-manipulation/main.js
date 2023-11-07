let clickedButton = 0;

const $hotButton = document.querySelector('.hot-button');

const $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', hotButtonIncrement);

function hotButtonIncrement(event) {
  clickedButton++;

  $clickCount.textContent = 'click:' + clickedButton;
  if (clickedButton < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (clickedButton < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (clickedButton < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (clickedButton < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (clickedButton < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
}
