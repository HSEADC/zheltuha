/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
document.addEventListener('DOMContentLoaded', function () {
  var knopka = document.getElementsByClassName('knopka')[0];
  var knopka2 = document.getElementsByClassName('knopka2')[0];
  var deepfakes = document.getElementsByClassName('deepfakes')[0];
  var zagolovki = document.getElementsByClassName('zagolovki')[0];
  knopka.addEventListener('click', function () {
    zagolovki.style.display = 'none';
    deepfakes.style.display = 'flex';
    knopka.style.backgroundColor = '#FBF448';
    knopka2.style.backgroundColor = '#d4d3c0';
  });
  knopka2.addEventListener('click', function () {
    zagolovki.style.display = 'flex';
    deepfakes.style.display = 'none';
    knopka2.style.backgroundColor = '#FBF448';
    knopka.style.backgroundColor = '#d4d3c0';
  });
});
/******/ })()
;