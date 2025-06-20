document.addEventListener('DOMContentLoaded', function() {
  const contactMeBtn = document.getElementById('contactMeBtn');
  const contactInfo = document.getElementById('contactInfo');

  contactMeBtn.addEventListener('click', function() {
    contactInfo.classList.toggle('contact-info-hidden');
  });
});