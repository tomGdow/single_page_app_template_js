'use strict';
const stickyScrollOne=stickyScrollFactory();
window.addEventListener('scroll', function() { stickyScrollOne(); });

    
const siteGravatar=setGravatarUrl('f9879d71855b5ff21e4963273a886bfc?s=40');
document.getElementsByTagName('link')[0].setAttribute('href', siteGravatar);

