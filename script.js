"use strict";
const container = document.getElementById("container");
const nav = document.querySelector(".nav");
const navIcon = document.querySelector(".nav-icon");
const navLinks = document.querySelector(".nav-links");
const hero = document.querySelector(".hero");
const homeSection = document.getElementById("home");
const portfolioSection = document.getElementById("portfolio");
const contactSection = document.getElementById("contact");
// ===================================================================

// Navigation Event Listeners

// Toggle Naviation
navIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Smooth Scroll
navLinks.addEventListener("click", function (e) {
  e.preventDefault();
  const id = e.target.getAttribute("href");
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});
