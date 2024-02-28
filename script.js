let time = new Date();
let hour = time.getHours();
let min = time.getMinutes();
// let day = time.getDay();
// let month = time.getMonth();
// document.querySelector(".date").innerHTML = `${day} ${month}`;
const links = document.querySelector(".links");
const link = document.createElement("a");
if (min < 10) {
  document.querySelector(".clock").innerHTML = `${hour}<br>0${min}`;
} else {
  document.querySelector(".clock").innerHTML = `${hour}<br>${min}`;
}
const URL = "./links.json";
async function loadData() {
  const items = await fetch(URL);
  const data = items.json();
  return data;
}
async function loadItems() {
  const items = await loadData();
  items.links.forEach((element) => {
    console.log(element);
  });
}
loadItems();
