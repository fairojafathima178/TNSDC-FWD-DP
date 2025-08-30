// Form submission logic with custom message box
const contactForm = document.getElementById('contactForm');
const messageBox = document.getElementById('messageBox');
const messageBoxText = document.getElementById('messageBoxText');
const closeMessageBoxBtn = document.getElementById('closeMessageBox');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const message = document.getElementById('message').value;

  if (message.trim() !== '') {
    console.log("Message received:", message);

    messageBoxText.textContent = "Thank you for your message! It has been noted.";
    messageBox.classList.add('show');

    document.getElementById('message').value = '';
  } else {
    messageBoxText.textContent = "Please enter a message before sending.";
    messageBox.classList.add('show');
  }
});

closeMessageBoxBtn.addEventListener('click', function () {
  messageBox.classList.remove('show');
});
