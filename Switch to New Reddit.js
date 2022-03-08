// ==UserScript==
// @name         Switch to New Reddit
// @version      1.0
// @match        *old.reddit.com/*
// @run-at       document-start

// ==/UserScript==

window.location.replace(window.location.href.replace("old.reddit", "www.reddit"));
