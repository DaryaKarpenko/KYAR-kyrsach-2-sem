window.addEventListener('DOMContentLoaded', () => {

    let array = [];
    fetch('catalogComp.xml')
        .then(function (response) {
            return response.text();
        })
        .then(function (xmlDocText) {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlDocText, "text/xml");
            const MenuCards = xmlDoc.querySelectorAll('imagine');
            const tableBody = document.querySelector(".galeryContainer");
            MenuCards.forEach(function (student) {
                const scr = student.querySelector("src").textContent;
                const title = student.querySelector("title").textContent;
                const price = student.querySelector("price").textContent;
                array.push({ scr, title, price });
            });
            array.sort(function (a, b) {
                return a.price - b.price;
            });

            for (let i = 0; i < (array.length); i += 3) {
                tableBody.innerHTML += `
            <div class="gallery">
                <div class="img">
                    <img src="${array[i].scr}" alt="Image 1">
                    <div class="caption">
                        <p>${array[i].title}</p>
                        <p>${array[i].price}</p>
                        <button class="order-btn" onclick="showOrderForm( '${array[i].scr}')">Заказать</button>
                    </div>
                </div>
            
                <div class="img">
                    <img src="${array[i + 1].scr}" alt="Image 1">
                    <div class="caption">
                        <p>${array[i + 1].title}</p>
                        <p>${array[i + 1].price}</p>
                        <button class="order-btn" onclick="showOrderForm( '${array[i + 1].scr}')">Заказать</button>
                    </div>
                </div>
            
                <div class="img">
                    <img src="${array[i + 2].scr}" alt="Image 1">
                    <div class="caption">
                        <p>${array[i + 2].title}</p>
                        <p>${array[i + 2].price}</p>
                        <button class="order-btn" onclick="showOrderForm( '${array[i + 2].scr}')">Заказать</button>
                    </div>
                </div>
                
                    
                <div id="order-modal" class="modal">
                    <div class="modal-content">
                    <span class="close" onclick="closeOrderForm()">&times;</span>
                    <img src="" alt="Selected bouquet" id="selected-bouquet-image">
                    <form id="order-form">
                        <p id="selected-bouquet-description"></p>
                            <input type="text" placeholder="Введите ваше ФИО" required>
                            <input type="tel" placeholder="Введите ваш номер телефона" required>
                            <input type="date" placeholder="Выберите дату" required>
                            <input type="time" placeholder="Выберите время" required>
                            <textarea placeholder="Оставьте коментарии к букету(необязательно)"></textarea>
                            <button class="buttonForma" type="submit">Отправить</button>
                    </form>
                    </div>
                </div>
            </div>
            `;
            }
        })
        .catch(function(error) {
            console.log('Произошла ошибка: ', error);
        });
});
