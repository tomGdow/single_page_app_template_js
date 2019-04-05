'use strict';
function initPageOne () { makeRequest('./html/page_one.html', insertHTMLOne); }
function initPageTwo () { makeRequest('./html/page_two.html', insertHTMLTwo); }
function initPageThree () { makeRequest('./html/page_three.html', insertHTMLThree); }

document.getElementById('first_entry').addEventListener('click', initPageOne, false);
document.getElementById('second_entry').addEventListener('click',initPageTwo, false);
document.getElementById('third_entry').addEventListener('click', initPageThree, false);

window.addEventListener('DOMContentLoaded', initPageOne)