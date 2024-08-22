// Example animation for the form
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.admission-form');
    form.style.opacity = '0';
    form.style.transition = 'opacity 1s ease-in-out';
    setTimeout(() => {
        form.style.opacity = '1';
    }, 500);
});
