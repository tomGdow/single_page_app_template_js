'use strict';
function pageOneCallback() {
  const childId=document.getElementById('navbar').childNodes[0].id
  makeActive({childId});
  insertNodeTxt({txt:"Welcome to Page One"})  

  const excl='!'
  for(let i=1; i< 40; i++) {
    const tag = createTag();
    const txt = createTxtNode('Scroll'+ excl.repeat(i));
    tag.appendChild(txt);
    document.getElementById('pageOneContent').appendChild(tag);
  }
} 
const insertHTMLOne=insertContents('content', pageOneCallback);