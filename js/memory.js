const icons = document.querySelector('.cards');

function removeHidden(evt) {
    evt.target.classList.remove('hidden');
    console.log("working");
}

icons.addEventListener('click', removeHidden);
