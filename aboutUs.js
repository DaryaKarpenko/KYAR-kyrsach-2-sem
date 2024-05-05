const menuToggle = document.getElementById('menu__toggle');
const menuBox = document.getElementById('menuBox');

menuToggle.addEventListener('change', function() {
    if (this.checked) {
        menuBox.classList.add('active');
    } else {
        menuBox.classList.remove('active');
    }
});

