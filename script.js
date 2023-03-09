let counter = 0;
const counterHeading = document.querySelector(".counter");
const addBtn = document.querySelector(".add");
const boxContainer = document.querySelector(".list");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");

// Not preferred #1
// not scalable
// tedious
// repetitive

// const add = () => {
//   counter++;
//   counterHeading.textContent = `Counter ${counter}`;
// };

// one.addEventListener("click", add);
// two.addEventListener("click", add);
// three.addEventListener("click", add);
// four.addEventListener("click", add);

// addBtn.addEventListener("click", () => {
//   const newLi = document.createElement("li");
//   newLi.classList.add("box", "indigo");
//   newLi.addEventListener("click", add);
//   boxContainer.append(newLi);
// });

// not preferred #2
// not scalable

// const boxes = document.querySelectorAll(".box");
// boxes.forEach((item) => {
//   item.addEventListener("click", () => {
//     counter++;
//     counterHeading.textContent = `Counter ${counter}`;
//   });
// });

// addBtn.addEventListener("click", () => {
//   const newLi = document.createElement("li");
//   newLi.classList.add("box", "indigo");
//   newLi.addEventListener("click", () => {
//     counter++;
//     counterHeading.textContent = `Counter ${counter}`;
//   });
//   boxContainer.append(newLi);
// });

// preferred
// event delegation

boxContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("box")) {
    counter++;
    counterHeading.textContent = `Counter ${counter}`;
  }
});

addBtn.addEventListener("click", () => {
  const newLi = document.createElement("li");
  newLi.classList.add("box", "indigo");
  boxContainer.append(newLi);
});
