document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.forms.register;

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log('Formular abgeschickt');
    });

    const passwordconfirm = registerForm.elements.passwordconfirm;
    const passwordconfirm2 = document.querySelector('input[name="passwordConfirm"]');
    passwordconfirm.addEventListener('input', () => {
        const confirmValue = passwordconfirm.value;
        const passwordValue = registerForm.elements.password.value;

        if (confirmValue !== passwordValue) {
            console.log('nicht gleich');
            passwordconfirm.setCustomValidity('Passwörter sind nicht gleich');
        } else {
            console.log('gleich');
            passwordconfirm.setCustomValidity('');
        }

        console.log(confirmValue, passwordValue);
    });
});
