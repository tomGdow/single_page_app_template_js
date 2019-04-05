'use strict';
function pageTwoCallback() {
  const childId=document.getElementById('navbar').childNodes[1].id;
  makeActive({childId});
  insertNodeTxt({txt:"Welcome to Page Two"})  
}
const insertHTMLTwo=insertContents('content', pageTwoCallback);