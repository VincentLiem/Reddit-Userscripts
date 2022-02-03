// ==UserScript==
// @name         Switch to Old Reddit
// @version      1.0
// @match        *.reddit.com/*
// @exclude      *://old.reddit.com/*
// @exclude      *://www.reddit.com/gallery*
// @exclude      *://www.reddit.com/poll*
// @run-at       document-start

// ==/UserScript==
 
var address = window.location.href;
address = address.replace("www.reddit", "old.reddit");


window.location.replace(address);
