const buttons = document.querySelectorAll('.school, .travel, .foodAndDrinks, .stores, .tourism, .activities');
const card = document.getElementById("infoCard")

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const buttonId = this.id;
        yourFunction(buttonId);
    });
});

function yourFunction(buttonId) {
    card.style.display = "block";
    console.log('Button clicked with id:', buttonId);
}