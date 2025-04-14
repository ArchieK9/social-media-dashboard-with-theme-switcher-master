"use strict"
let toggle = document.querySelector("button")
let toggleCont = document.querySelector(".toggle-cont")
let body = document.querySelector("body")
let absolute = document.querySelector(".absolute")
let stats = document.querySelectorAll(".stats")
let overviews = document.querySelectorAll(".overviews")

toggleCont.addEventListener("click", () => {
    toggle.classList.toggle('left')
    body.classList.toggle('light-theme')
  })