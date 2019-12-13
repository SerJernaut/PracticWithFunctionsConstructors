'use strict';

const goToHomeButton = document.getElementById('home');

goToHomeButton.onclick = function () {
    console.log(location);
    location.assign(`${location.origin}`);
}