// ==UserScript==
// @name         Skip Reddit Open in App mobile popup
// @version      1.0
// @match        *.reddit.com/*
// @run-at       document-idle

// ==/UserScript==

setTimeout(function () {
    var buttons = document.querySelectorAll('button');
    var continueButton = null;

    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].textContent.includes('Continue')) {
            continueButton = buttons[i];
            break;
        }
    }

    if (continueButton) {
        continueButton.click();
    }
}, 3000);
