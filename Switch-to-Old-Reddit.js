// ==UserScript==
// @name         Switch to Old Reddit
// @version      1.0
// @match        *.reddit.com/*
// @exclude      *://old.reddit.com/*
// @exclude      *://www.reddit.com/gallery*
// @exclude      *://www.reddit.com/poll*
// @exclude      *chat.reddit.com/*
// @run-at       document-start

// ==/UserScript==

window.location.replace(window.location.href.replace("www.reddit", "old.reddit"));
