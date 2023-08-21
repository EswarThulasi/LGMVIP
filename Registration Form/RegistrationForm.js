function submitForm(event) {
    event.preventDefault();

    const form = document.getElementById('registration-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    // Simulate form submission process
    setTimeout(() => {
        form.reset();
        confirmationMessage.classList.remove('hidden');
        setTimeout(() => {
            confirmationMessage.classList.add('hidden');
        }, 3000);
    }, 1000);
}
