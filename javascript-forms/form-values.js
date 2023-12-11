const $form = document.querySelector('#contact-form');

$form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = $form.elements.name.value;
  const email = $form.elements.email.value;
  const message = $form.elements.message.value;

  const formObject = {
    name,
    email,
    message,
  };
  console.log(formObject);
  $form.reset();
});
