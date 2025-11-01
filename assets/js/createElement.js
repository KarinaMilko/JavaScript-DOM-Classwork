"use strict";

// const newsItem = {
//   title: "News Title",
//   body: "News Body News Body News Body News Body News Body News Body News Body News Body ",
// };

// // create
// const articleEl = document.createElement("article");
// // articleEl.textContent = "News Item body";
// // articleEl.style.color = "grey";

// const h3El = document.createElement("h3");
// h3El.textContent = newsItem.title;
// articleEl.append(h3El);

// const pEl = document.createElement("p");
// // p додати в розмітку
// pEl.textContent = newsItem.body;
// articleEl.append(pEl);

// // add to html
// const sectionEl = document.querySelector(".section");
// sectionEl.append(articleEl);
// //////////////////////////////////////////////////////////

// // додати в розмітку дату

// const sectionEl = document.querySelector(".section");
// // create
// const articleEl = document.createElement("article");
// sectionEl.append(articleEl);
// // p додати в розмітку
// const h3El = createNewElement("h3", newsItem.title);
// const pEl = createNewElement("p", newsItem.body);
// const dateEl = createNewElement("p", newsItem.date);
// articleEl.append(h3El, pEl, dateEl);
// // add to html
// function createNewElement(type, content) {
//   const newElement = document.createElement(type);
//   newElement.textContent = content;
//   return newElement;
// }

// =============userCard===============
const USERS_URL = `https://randomuser.me/api/?results=5&seed=2024`;

const rootEl = document.querySelector("#root");

let currentPage = 1;
loadUsers(currentPage);

const [prevBtn, nextBtn] = document.querySelectorAll(".navBtn");
prevBtn.onclick = () => {
  if (currentPage > 1) {
    currentPage--;
    loadUsers(currentPage);
  }
};
nextBtn.onclick = () => {
  currentPage++;
  loadUsers(currentPage);
};

// згенерувати список користувачів
// у кожного користувача відображати
// зображення профілю, ім'я, вік
// передбачити можливість видалення користувача зі списку

function loadUsers(currentPage) {
  rootEl.textContent = "";
  fetch(`${USERS_URL}&page=${currentPage}`)
    .then((response) => response.json())
    .then(({ results }) => results.forEach((r) => genSingleUser(r)))
    .catch((err) => console.log("err :>> ", err));
}

function genSingleUser({
  picture: { large: imgSrc },
  name: { first, last },
  dob: { age },
}) {
  // сворити елемент
  // налаштувати (контент, стилі, атрибути, ...)
  // навісити обробник
  // додати елемент в розмітку

  const userCard = document.createElement("article");
  rootEl.append(userCard);
  userCard.classList.add("userCard");

  // додати img (створити, задати клас, src з imgSrc,
  //             alt - конкатенація first, last )

  const imgEl = createNewImg(imgSrc, `${first} ${last}`, "userImg");
  const userName = createNewElement("h2", `${first} ${last}`, "userName");
  const userAge = createNewElement("p", age, "userAge");

  const trashIcon = document.createElement("button");
  trashIcon.classList.add("trashIcon");
  trashIcon.innerHTML = `<i class="fa-solid fa-trash"></i>`;

  trashIcon.onclick = function () {
    this.parentElement.remove();
  };

  userCard.append(imgEl, userName, userAge, trashIcon);
}

function createNewImg(src, alt, className) {
  const newImg = document.createElement("img");
  newImg.src = src;
  newImg.alt = alt;
  newImg.classList.add(className);
  return newImg;
}

function createNewElement(type, content, className) {
  const newElement = document.createElement(type);
  newElement.textContent = content;
  newElement.classList.add(className);
  return newElement;
}
