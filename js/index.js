const buttons = document.querySelectorAll('.school, .travel, .foodAndDrinks, .stores, .tourism, .activities');
const infoCard = document.getElementById("infoCard");
const infoCardImg = document.getElementById('locatieImg');
const closeButton = document.getElementById('closeButton');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const locations = document.querySelectorAll('button');
const weatherCard = document.querySelector(".weatherCard");
const weatherCardImg = document.getElementById('weatherCardImg');
const date = new Date();
const hour = date.getHours();

if (hour > 8 && hour < 20) {
    weatherCard.style.background = 'rgb(61,197,181)';
    weatherCard.style.background = 'linear-gradient(120deg, rgba(61,197,181,1) 16%, rgba(42,168,191,1) 39%, rgba(37,105,171,1) 100%)';
} else {
    weatherCard.style.background = 'rgb(0,0,0)';
    weatherCard.style.background = 'linear-gradient(60deg, rgba(0,0,0,1) 16%, rgba(16,22,52,1) 45%, rgba(10,39,119,1) 100%)';
    weatherCardImg.src = './img/maan.png'
}

function closeInfoCard() {
    infoCard.style.display = 'none';
}

function closeNavigationMenu() {
    const menuToggle = document.getElementById('menuToggle');
    menuToggle.querySelector('input[type="checkbox"]').checked = false;
}
document.addEventListener('click', function(event) {
    if (!infoCard.contains(event.target) && event.target !== closeButton) {
        closeInfoCard();
    }

    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');
    if (menuToggle.querySelector('input[type="checkbox"]').checked && !menu.contains(event.target) && !menuToggle.contains(event.target)) {
        closeNavigationMenu();
    }
});

buttons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.stopPropagation();
        const buttonId = this.id;
        const imgLink = './img/' + buttonId + '.jpeg';
        infoCard.style.display = 'block';
        infoCardImg.src = imgLink;
    });
});

closeButton.addEventListener('click', closeInfoCard);

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function () {
        const targetClass = this.getAttribute('data-target');
        buttons.forEach((location) => {
            if (targetClass) {
                if (location.classList.contains(targetClass)) {
                    location.style.display = this.checked ? 'block' : 'none';
                }
            }
        });
    });
});
