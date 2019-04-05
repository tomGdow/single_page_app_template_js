'use strict';
function pageThreeCallback() {
  const childId=document.getElementById('navbar').childNodes[2].id;
  makeActive({childId});
  insertNodeTxt({txt:"Welcome to Page Three"})  

}
const insertHTMLThree=insertContents('content', pageThreeCallback);