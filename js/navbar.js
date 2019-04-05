'use strict';
document.getElementById('navbar').appendChild(makeAnchor({innerText:'Nav-Item-1', id: 'first_entry'}));
document.getElementById('navbar').appendChild(makeAnchor({innerText:'Nav-Item-2', id: 'second_entry'}));
document.getElementById('navbar').appendChild(makeAnchor({innerText:'Nav-Item-3', id: 'third_entry'}));

function makeActive({childId, parentNode, className='active'}={}) {
  parentNode=parentNode || document.getElementById('navbar');
  if(document.getElementById(childId)) {
    for(let item of parentNode.getElementsByClassName(className)) {item.removeAttribute('class', className)}   
    document.getElementById(childId).setAttribute('class', className);
  }
}
