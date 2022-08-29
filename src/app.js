/* eslint-disable */
import "bootstrap";
import "./style.css";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let ext = [".com", ".io", ".org"];

const ranDom = arr => {
  for (let i = 0; i < arr.length; i++) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
};

document.querySelector("#randEl").addEventListener("click", () => {
  document.querySelector("#url").innerHTML =
    ranDom(pronoun) + ranDom(adj) + ranDom(noun) + ranDom(ext);
});

let domArr = [];

for (let i = 0; i < pronoun.length; i++) {
  for (let r = 0; r < adj.length; r++) {
    for (let h = 0; h < noun.length; h++) {
      for (let g = 0; g < ext.length; g++) {
        domArr.push(pronoun[i] + adj[r] + noun[h] + ext[g]);
      }
    }
  }
}

console.log(domArr);

const urList = arr => {
  let urlS = "";
  for (let i = 0; i < arr.length; i++) {
    urlS += `<li class="list-group-item">${arr[i]}</li>`;
  }
  return urlS;
};

document.querySelector("#list").innerHTML = urList(domArr);
