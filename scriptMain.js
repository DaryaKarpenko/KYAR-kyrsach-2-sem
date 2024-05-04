// Функция для отображения модальной формы заказа букета
function showOrderForm(bouquetName, bouquetImagePath) {
    // Обновляем текст для отображения выбранного букета
    document.getElementById("selected-bouquet-description").innerText = "Выбран букет: " + bouquetName;
    // Устанавливаем путь к изображению выбранного букета
    document.getElementById("selected-bouquet-image").src = bouquetImagePath; // Путь к выбранному изображению букета
    // Отображаем модальное окно заказа букета
    document.getElementById("order-modal").style.display = "block";
}

// Функция для закрытия модальной формы заказа букета
function closeOrderForm() {
    // Скрываем модальное окно заказа букета
    document.getElementById("order-modal").style.display = "none";
}

// Обработчик события клика по элементам страницы
window.onclick = function(event) {
    // Получаем модальное окно заказа букета
    var modal = document.getElementById("order-modal");
    // Проверяем, был ли клик по модальному окну
    if (event.target == modal) {
        // Если клик произошел за пределами модального окна, скрываем его
        modal.style.display = "none";
    }
}
