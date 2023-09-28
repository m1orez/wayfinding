const buttons = document.querySelectorAll('.school, .travel, .foodAndDrinks, .stores, .tourism, .activities');
const card = document.getElementById("infoCard")
const cardImg = document.getElementById("locatieImg")
const closeButton = document.getElementById("closeButton")

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const buttonId = this.id;
        yourFunction(buttonId);
    });
});

function yourFunction(buttonId) {
    const imgLink = './img/' + buttonId + '.jpeg';
    card.style.display = "block";
    cardImg.src = imgLink;
    console.log('Button clicked with id:', buttonId);
}

closeButton.addEventListener('click', function() {
    card.style.display = "none";
})