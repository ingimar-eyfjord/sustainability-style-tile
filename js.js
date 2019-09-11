// JavaScript Document

const link =
  "https://spreadsheets.google.com/feeds/list/1kbHDE_BG8qb5t72fitcdg4PbMjENz7fVTgHCjb12ScI/od6/public/values?alt=json";
window.addEventListener("load", getData);

function getData() {
  fetch(link)
    .then(res => res.json())
    .then(showData);}

function showData(data){
	const myArray = data.feed.entry;
	myArray.forEach(showName)}

function showName(nameData){
	const template = document.querySelector("template").content;
	const copy = template.cloneNode(true);
	console.log(nameData)
	copy.querySelector("h1").textContent=nameData.gsx$category.$t;
	document.querySelector("body").appendChild(copy);
}
