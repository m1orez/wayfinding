const buttons = document.querySelectorAll('.school, .travel, .foodAndDrinks, .stores, .tourism, .activities');
const card = document.getElementById("infoCard")
const cardImg = document.getElementById("locatieImg")
const closeButton = document.getElementById("closeButton")
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const locations = document.querySelectorAll('button');

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

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', function () {
    const targetClass = this.getAttribute('data-target');
    buttons.forEach((locations) => {
      if (targetClass) {
        if (locations.classList.contains(targetClass)) {
          locations.style.display = this.checked ? 'block' : 'none';
        }
      }
    });
  });
});