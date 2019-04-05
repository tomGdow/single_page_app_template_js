'use strict';
function makeRequest(url, insertHTML) {
  let httpRequest = new XMLHttpRequest();
  httpRequest.addEventListener("load", insertHTML);
  // httpRequest.onreadystatechange = insertContents;
  httpRequest.open('GET', url);
  httpRequest.send();
 }

function insertContents(id, cb) {
   return function insert() {
      document.getElementById(id).innerHTML = this.responseText;
      cb();
    }
 }

function createTag({tagType='p', tagClass='', tagId=''}={}) {
  let el = document.createElement(tagType);
  if(tagClass) {
    el.className=tagClass;
  }
  if(tagId) {
    el.id=tagId;
  }
  return el
}

function makeAnchor({innerText, id, href='#'}={}) {
  let el = document.createElement('a');
  let txt = document.createTextNode(innerText);
  el.appendChild(txt);
  el.setAttribute('href', href);
  el.id=id;
  return el;
 }

 function createTxtNode(txt) {
   let node=document.createTextNode(txt);
   return node;
 }
 
 function insertNodeTxt ({nodeId='header', txt}={}) {
  let h2txt = createTxtNode(txt);
  while (document.getElementById(nodeId).firstChild) {
    document.getElementById(nodeId).removeChild(document.getElementById(nodeId).firstChild);
  }
  document.getElementById(nodeId).appendChild(h2txt);
 }

function stickyScrollFactory({stickyValue, stickyClass='sticky', stickyNode}={}) {
  stickyValue=stickyValue || document.getElementById("navbar").offsetTop;
  stickyNode = stickyNode || document.getElementById('navbar');
  return function stickyScroll() {
  //w3schools, thanks!
    if (window.pageYOffset >= stickyValue) {
      stickyNode.classList.add(stickyClass)
    } else {
      stickyNode.classList.remove(stickyClass);
    }
  } 
}

function setGravatarUrl(hash) {
    var str='https://s.gravatar.com/avatar/';
    return str+hash;
}

