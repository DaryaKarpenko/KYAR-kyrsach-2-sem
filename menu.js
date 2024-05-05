menuToggle.addEventListener('change', function() {
    if (this.checked) {
        menuBox.classList.add('active');
    } else {
        menuBox.classList.remove('active');
    }
});
