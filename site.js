// Newsletter form is a local visual placeholder until a mailing provider is connected.
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#follow form');
  const email = form?.querySelector('input[type="email"]');
  const button = form?.querySelector('button');
  if (!form || !email || !button) return;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!email.checkValidity()) { email.reportValidity(); return; }
    button.textContent = 'Thanks — coming soon';
    button.disabled = true;
  });
});
