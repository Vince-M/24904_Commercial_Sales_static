"use strict";console.log("Hello");var btnHamburger=document.querySelector("#btnHamburger"),body=document.querySelector("body"),header=document.querySelector(".header"),overlay=document.querySelector(".overlay"),mobileMenu=document.querySelector(".mobileMenu"),nav__list=document.querySelector(".nav__list"),nav__item=document.querySelector(".nav__item"),faders=document.querySelectorAll(".col-fade-in"),sliders=document.querySelectorAll(".slide-in");btnHamburger.addEventListener("click",(function(){console.log("click hamburger"),header.classList.contains("open")?(body.classList.remove("noscroll"),header.classList.remove("open"),overlay.classList.remove("fade-in"),overlay.classList.add("fade-out"),nav__list.classList.remove("fade-in"),mobileMenu.classList.remove("nav-open"),mobileMenu.classList.add("hide-for-mobile"),nav__item.classList.remove("nav__item--open")):(body.classList.add("noscroll"),header.classList.add("open"),overlay.classList.add("fade-in"),overlay.classList.remove("fade-out"),nav__list.classList.add("fade-in"),mobileMenu.classList.add("nav-open"),nav__item.classList.add("nav__item--open"))}));
//# sourceMappingURL=script.js.map